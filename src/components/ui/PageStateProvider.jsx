import React, { createContext, useContext, useState, useCallback } from "react";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";

/**
 * Context for managing page-level loading and error states
 * Allows child components to report their loading/error status
 * and displays ONE consolidated message at the page level
 */
const PageStateContext = createContext(null);

export function usePageState() {
  const context = useContext(PageStateContext);
  if (!context) {
    throw new Error("usePageState must be used within a PageStateProvider");
  }
  return context;
}

/**
 * PageStateProvider - Wraps a page and manages consolidated loading/error state
 * 
 * Usage:
 * <PageStateProvider>
 *   <YourPageContent />
 * </PageStateProvider>
 * 
 * In child components:
 * const { setLoading, setError } = usePageState();
 */
export function PageStateProvider({ 
  children,
  loadingMessage = "Loading content...",
  errorMessage = "Something went wrong. Please try again later."
}) {
  const [loadingCount, setLoadingCount] = useState(0);
  const [errors, setErrors] = useState([]);

  // Child components call this when they start/finish loading
  const setLoading = useCallback((isLoading, id) => {
    setLoadingCount(prev => isLoading ? prev + 1 : Math.max(0, prev - 1));
  }, []);

  // Child components call this to report an error
  const setError = useCallback((error, id) => {
    if (error) {
      setErrors(prev => {
        if (!prev.find(e => e.id === id)) {
          return [...prev, { id, error }];
        }
        return prev;
      });
    } else {
      setErrors(prev => prev.filter(e => e.id !== id));
    }
  }, []);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const isLoading = loadingCount > 0;
  const hasError = errors.length > 0;

  const contextValue = {
    setLoading,
    setError,
    clearErrors,
    isLoading,
    hasError
  };

  return (
    <PageStateContext.Provider value={contextValue}>
      {isLoading ? (
        <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]">
          <LoadingState message={loadingMessage} />
        </div>
      ) : hasError ? (
        <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]">
          <EmptyState message={errorMessage} />
        </div>
      ) : (
        children
      )}
    </PageStateContext.Provider>
  );
}

export default PageStateProvider;
