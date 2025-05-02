
// React is already injected by Vite's jsxInject configuration
import { AlertTriangle } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

interface ErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-6 rounded-lg glass-morphism border border-royal-crimson/30">
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="h-16 w-16 text-royal-crimson mb-4" />
          <h2 className="text-2xl font-bold font-medieval mb-2">Royal Mishap!</h2>
          <p className="text-white/70 mb-4">
            The royal court has encountered an unexpected issue.
          </p>
          {error && (
            <div className="bg-black/20 p-4 rounded-md w-full mb-4 overflow-auto text-left">
              <p className="text-royal-crimson font-medium mb-1">Error:</p>
              <p className="text-sm text-white/80">{error.message}</p>
            </div>
          )}
          <Button 
            onClick={resetErrorBoundary} 
            className="bg-royal-gold hover:bg-royal-gold/90 text-black"
          >
            Return to the Kingdom
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
