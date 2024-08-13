import React from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <input
          type="text"
          placeholder="Enter your text..."
          className="w-full px-4 py-2 text-xl border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchOverlay;
