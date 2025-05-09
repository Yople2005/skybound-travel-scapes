
import React, { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increase loading time to 1.5 seconds to better see the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <div className="text-center">
          <div className="relative w-64 h-1 bg-gray-200 rounded-full overflow-hidden my-6">
            <div className="absolute top-0 left-0 h-full w-full">
              <Plane className="text-purple-500 w-8 h-8 absolute animate-plane-loader" />
            </div>
          </div>
          <p className="text-purple-dark font-medium">Loading your travel experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-in">
      {children}
    </div>
  );
};

export default PageTransition;
