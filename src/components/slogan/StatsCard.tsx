import React from 'react';

interface StatProps {
    classes?: String
}

const StatsCard = ({classes}: StatProps) => {
  return (
    <div className={`${classes} max-w-xl bg-blue-100 p-6 rounded-lg border border-blue-300 shadow-md flex justify-between items-center`}>
      <div className="text-center">
        <h3 className="text-3xl font-bold">38M+</h3>
        <p className="text-sm">Businesses have already joined us! Businesses have already joined us!</p>
        <div className="flex items-center gap-2 mt-4">
          <img src="https://via.placeholder.com/30" alt="avatar" className="rounded-full" />
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.817l1.902 5.842h6.16l-4.98 3.617 1.898 5.832-4.98-3.617-4.98 3.617 1.898-5.832-4.98-3.617h6.16z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.817l1.902 5.842h6.16l-4.98 3.617 1.898 5.832-4.98-3.617-4.98 3.617 1.898-5.832-4.98-3.617h6.16z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.817l1.902 5.842h6.16l-4.98 3.617 1.898 5.832-4.98-3.617-4.98 3.617 1.898-5.832-4.98-3.617h6.16z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.817l1.902 5.842h6.16l-4.98 3.617 1.898 5.832-4.98-3.617-4.98 3.617 1.898-5.832-4.98-3.617h6.16z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.817l1.902 5.842h6.16l-4.98 3.617 1.898 5.832-4.98-3.617-4.98 3.617 1.898-5.832-4.98-3.617h6.16z" />
            </svg>
          </div>
          <p className="text-sm">So many people like this service</p>
        </div>
      </div>
      <div className="text-center border-l border-gray-500 pl-6">
        <h3 className="text-3xl font-bold">0%</h3>
        <p className="text-sm">Zero percent fee for any transaction</p>
      </div>
    </div>
  );
};

export default StatsCard;
