import { Sparkles } from "lucide-react";

/**
 * Empty/Error state component matching the Orbit design
 * Shows a sparkle star icon with a customizable message
 */
export function EmptyState({ 
  message = "No content available yet. Check back soon!",
  className = ""
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 ${className}`}>
      {/* Sparkle Star Icon */}
      <div className="mb-6">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-300"
        >
          {/* Main 4-pointed star */}
          <path 
            d="M32 4L36 28L60 32L36 36L32 60L28 36L4 32L28 28L32 4Z" 
            fill="currentColor"
            opacity="0.6"
          />
          {/* Small decorative star */}
          <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.4" />
          <circle cx="14" cy="22" r="1.5" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Message */}
      <p className="text-gray-500 text-lg font-medium text-center max-w-md">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;
