/**
 * Loading spinner component for data fetching states
 * Provides a clean, animated loading indicator
 */
export function LoadingState({ 
  message = "Loading...",
  size = "default",
  className = ""
}) {
  const sizes = {
    small: {
      container: "py-8",
      spinner: "w-8 h-8",
      text: "text-sm"
    },
    default: {
      container: "py-16",
      spinner: "w-12 h-12",
      text: "text-base"
    },
    large: {
      container: "py-24",
      spinner: "w-16 h-16",
      text: "text-lg"
    }
  };

  const sizeStyles = sizes[size] || sizes.default;

  return (
    <div className={`flex flex-col items-center justify-center px-6 ${sizeStyles.container} ${className}`}>
      {/* Animated Spinner */}
      <div className="relative mb-4">
        {/* Outer ring */}
        <div className={`${sizeStyles.spinner} rounded-full border-4 border-blue-100`} />
        {/* Spinning arc */}
        <div 
          className={`absolute top-0 left-0 ${sizeStyles.spinner} rounded-full border-4 border-transparent border-t-blue-400 animate-spin`}
        />
      </div>

      {/* Loading text */}
      {message && (
        <p className={`text-gray-500 font-medium ${sizeStyles.text}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default LoadingState;
