#!/usr/bin/env python3
"""Create BrandForge Supabase project and set up tables + auth."""
import json
import os
import sys
import urllib.request
import urllib.error
import time

SUPABASE_TOKEN = "REDACTED_SUPABASE_TOKEN"
API_BASE = "https://api.supabase.com/v1"

def api_call(method, path, data=None):
    """Make a Supabase Management API call."""
    url = f"{API_BASE}{path}"
    headers = {
        "Authorization": f"Bearer {SUPABASE_TOKEN}",
        "Content-Type": "application/json",
    }
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        err_body = e.read().decode()
        print(f"HTTP {e.code}: {err_body}")
        return None
    except Exception as e:
        print(f"Error: {e}")
        return None

# Step 1: List existing projects
print("=== Listing existing Supabase projects ===")
projects = api_call("GET", "/projects")
if projects is None:
    print("Failed to list projects. Check token.")
    sys.exit(1)

print(f"Found {len(projects)} project(s)")
brandforge_project = None
for p in projects:
    print(f"  - {p['name']} ({p['id']}) - ref: {p.get('ref', 'N/A')}")
    if 'brandforge' in p['name'].lower() or 'brand-forge' in p['name'].lower():
        brandforge_project = p

# Step 2: Create project if it doesn't exist
if not brandforge_project:
    print("\n=== Creating BrandForge Supabase project ===")
    # Generate a unique project ref
    import random
    import string
    random_suffix = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))
    
    project_data = {
        "name": "brandforge",
        "organization_id": None,  # will use default org
        "db_pass": "BrandForge2024!Secure",
        "region": "us-east-1",
    }
    
    # First, get the default org
    orgs = api_call("GET", "/organizations")
    if orgs and len(orgs) > 0:
        project_data["organization_id"] = orgs[0]["id"]
        print(f"Using organization: {orgs[0]['name']} ({orgs[0]['id']})")
    else:
        print("No organizations found!")
        sys.exit(1)
    
    result = api_call("POST", "/projects", project_data)
    if result:
        print(f"Project created: {result.get('name', 'unknown')}")
        print(f"  ID: {result.get('id')}")
        print(f"  Ref: {result.get('ref')}")
        brandforge_project = result
    else:
        print("Failed to create project!")
        sys.exit(1)
else:
    print(f"\nUsing existing project: {brandforge_project['name']} ({brandforge_project['id']})")

project_ref = brandforge_project.get("ref")
project_id = brandforge_project.get("id")
print(f"\nProject ref: {project_ref}")
print(f"Project ID: {project_id}")

# Get project API keys (anon key and service role key)
print("\n=== Getting project API keys ===")
keys = api_call("GET", f"/projects/{project_id}/api-keys")
if keys:
    anon_key = None
    service_role_key = None
    for key in keys:
        if key.get("name") == "anon" or key.get("name") == "anon public":
            anon_key = key.get("api_key") or key.get("key")
        elif key.get("name") == "service_role" or key.get("name") == "service_role key":
            service_role_key = key.get("api_key") or key.get("key")
    
    print(f"Anon key: {anon_key[:20]}..." if anon_key else "Anon key: NOT FOUND")
    print(f"Service role key: {service_role_key[:20]}..." if service_role_key else "Service role key: NOT FOUND")
else:
    print("Failed to get API keys!")
    anon_key = None
    service_role_key = None

# Save to a file for reference
output = {
    "project_ref": project_ref,
    "project_id": project_id,
    "project_name": brandforge_project.get("name"),
    "supabase_url": f"https://{project_ref}.supabase.co",
    "anon_key": anon_key,
    "service_role_key": service_role_key,
}

output_path = "/Users/dandanielielclarkson/brandforge/scripts/supabase_project_info.json"
with open(output_path, "w") as f:
    json.dump(output, f, indent=2)
print(f"\nProject info saved to {output_path}")

# Construct the Supabase URL
supabase_url = f"https://{project_ref}.supabase.co"
print(f"\nSupabase URL: {supabase_url}")