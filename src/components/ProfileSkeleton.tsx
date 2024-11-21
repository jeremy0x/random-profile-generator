import React from 'react';

export const ProfileSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 animate-pulse">
      <div className="flex items-center space-x-6">
        <div className="rounded-full bg-gray-300 h-32 w-32"></div>
        <div className="space-y-3 flex-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="h-20 bg-gray-300 rounded"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};