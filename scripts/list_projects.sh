#!/bin/bash
# List existing Supabase projects to check if BrandForge one exists
curl -s -X GET "https://api.supabase.com/v1/projects" \
  -H "Authorization: Bearer REDACTED_SUPABASE_TOKEN" \
  -H "Content-Type: application/json" | python3 -m json.tool