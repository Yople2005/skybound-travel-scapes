
import React, { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increase loading time to 2 seconds to better see the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-light/90 to-skyblue/90 z-50">
        <div className="text-center">
          <div className="relative w-64 h-4 bg-white/30 rounded-full overflow-hidden my-6">
            <div className="absolute top-0 left-0 h-full bg-white/50 rounded-full animate-progress-bar"></div>
            <Plane className="text-white w-8 h-8 absolute top-1/2 -translate-y-1/2 -rotate-12 animate-plane-loader" />
          </div>
          <p className="text-white font-medium">Loading your travel experience...</p>
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
