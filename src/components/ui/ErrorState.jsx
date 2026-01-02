/**
 * Error state component for failed data fetches
 * Shows a warning icon with error message and optional retry
 */
export function ErrorState({ 
  message = "Something went wrong. Please try again later.",
  onRetry,
  className = ""
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 ${className}`}>
      {/* Error Icon - Sparkle with X */}
      <div className="mb-6">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-red-300"
        >
          {/* Main 4-pointed star */}
          <path 
            d="M32 4L36 28L60 32L36 36L32 60L28 36L4 32L28 28L32 4Z" 
            fill="currentColor"
            opacity="0.6"
          />
          {/* Small decorative elements */}
          <circle cx="18" cy="18" r="3" fill="currentColor" opacity="0.4" />
          <circle cx="14" cy="22" r="1.5" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Message */}
      <p className="text-gray-500 text-lg font-medium text-center max-w-md mb-4">
        {message}
      </p>

      {/* Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorState;
