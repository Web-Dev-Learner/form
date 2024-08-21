import React from 'react';

const Timeline = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="border-l-2 border-gray-300 dark:border-gray-600">
        
        {/* Event 1 */}
        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center">
          <span className="text-xs">1</span>
        </div>
        <div className="mb-6 mt-4 ml-6">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="ml-3 text-sm font-medium">Email Sent</div>
          </div>
          <div className="ml-6 text-sm text-gray-500">Description of the email sent event.</div>
        </div>

        {/* Event 2 */}
        <div className="absolute -left-3 w-6 h-6 bg-green-500 rounded-full text-white flex items-center justify-center">
          <span className="text-xs">2</span>
        </div>
        <div className="mb-6 mt-4 ml-6">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="ml-3 text-sm font-medium">Registered</div>
          </div>
          <div className="ml-6 text-sm text-gray-500">Description of the registration event.</div>
        </div>
        
        {/* Event 3 */}
        <div className="absolute -left-3 w-6 h-6 bg-yellow-500 rounded-full text-white flex items-center justify-center">
          <span className="text-xs">3</span>
        </div>
        <div className="mb-6 mt-4 ml-6">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="ml-3 text-sm font-medium">Other Event</div>
          </div>
          <div className="ml-6 text-sm text-gray-500">Description of another event.</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

