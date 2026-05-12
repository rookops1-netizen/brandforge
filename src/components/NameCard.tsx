import { BusinessName, AvailabilityStatus } from "@/types";
import { Heart, ExternalLink, Check, X, Loader2, Sparkles } from "lucide-react";
import { clsx } from "clsx";

interface NameCardProps {
  name: BusinessName;
  onToggleFavorite: (id: string) => void;
  onSelect: (name: BusinessName) => void;
  index: number;
}

function AvailabilityBadge({
  label,
  status,
}: {
  label: string;
  status: AvailabilityStatus | null;
}) {
  if (status === null || status === "unknown") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-500">
        <ExternalLink className="h-3 w-3" />
        {label}
      </span>
    );
  }

  const config = {
    available: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      icon: <Check className="h-3 w-3" />,
    },
    taken: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      icon: <X className="h-3 w-3" />,
    },
    checking: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      icon: <Loader2 className="h-3 w-3 animate-spin" />,
    },
  };

  const c = config[status];
  if (!c) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-500">
        <ExternalLink className="h-3 w-3" />
        {label}
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
        c.bg,
        c.text,
        c.border
      )}
    >
      {c.icon}
      {label}
    </span>
  );
}

function StyleBadge({ style }: { style: string }) {
  const styleColors: Record<string, string> = {
    modern: "bg-blue-50 text-blue-700 border-blue-200",
    classic: "bg-amber-50 text-amber-700 border-amber-200",
    playful: "bg-pink-50 text-pink-700 border-pink-200",
    minimal: "bg-gray-50 text-gray-700 border-gray-200",
    bold: "bg-red-50 text-red-700 border-red-200",
    elegant: "bg-purple-50 text-purple-700 border-purple-200",
    tech: "bg-cyan-50 text-cyan-700 border-cyan-200",
    nature: "bg-green-50 text-green-700 border-green-200",
    "compound word": "bg-indigo-50 text-indigo-700 border-indigo-200",
    portmanteau: "bg-violet-50 text-violet-700 border-violet-200",
    abstract: "bg-teal-50 text-teal-700 border-teal-200",
    descriptive: "bg-orange-50 text-orange-700 border-orange-200",
    metaphorical: "bg-rose-50 text-rose-700 border-rose-200",
  };

  const colorClass = styleColors[style.toLowerCase()] || "bg-brand-50 text-brand-700 border-brand-200";

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colorClass
      )}
    >
      {style}
    </span>
  );
}

export default function NameCard({
  name,
  onToggleFavorite,
  onSelect,
  index,
}: NameCardProps) {
  const animationClass = [
    "animate-fade-up",
    "animate-fade-up-delay-1",
    "animate-fade-up-delay-2",
    "animate-fade-up-delay-3",
    "animate-fade-up-delay-4",
  ][Math.min(index, 4)];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${animationClass}`}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-purple-50/0 transition-all duration-300 group-hover:from-brand-50/50 group-hover:to-purple-50/50" />

      <div className="relative">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {name.name}
              </h3>
              <Sparkles className="h-4 w-4 text-brand-500" />
            </div>
            <StyleBadge style={name.style} />
          </div>

          <button
            onClick={() => onToggleFavorite(name.id)}
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-full transition-all",
              name.isFavorite
                ? "bg-red-50 text-red-500 hover:bg-red-100"
                : "bg-gray-50 text-gray-300 hover:bg-gray-100 hover:text-gray-400"
            )}
            aria-label={name.isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={clsx("h-5 w-5 transition-all", name.isFavorite && "fill-current")}
            />
          </button>
        </div>

        {/* Meaning */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {name.meaning}
        </p>

        {/* Domain suggestion */}
        <p className="mt-2 text-xs text-gray-400">
          {name.domainSuggestion}
        </p>

        {/* Availability indicators */}
        <div className="mt-4 flex flex-wrap gap-2">
          <AvailabilityBadge
            label=".com"
            status={name.domainAvailable}
          />
          <AvailabilityBadge
            label="Twitter"
            status={name.twitterAvailable}
          />
          <AvailabilityBadge
            label="Instagram"
            status={name.instagramAvailable}
          />
        </div>

        {/* CTA */}
        <button
          onClick={() => onSelect(name)}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white opacity-0 transition-all group-hover:opacity-100 hover:from-brand-700 hover:to-purple-700"
        >
          Get Full Brand Kit →
        </button>
      </div>
    </div>
  );
}