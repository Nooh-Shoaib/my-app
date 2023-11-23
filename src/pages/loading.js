import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 9000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return isLoading && (
    <div className="flex justify-center items-center h-[500px]">
      <div className="w-5 h-5 bg-amber-600 rounded-full mr-2.5 mt-0 "></div>
      <div className="w-5 h-5 bg-amber-600 rounded-full mr-2.5 mt-0 "></div>
      <div className="w-5 h-5 bg-amber-600 rounded-full mr-2.5 mt-0 "></div>
    </div>
  );
};

export default LoadingComponent;
