import React from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="relative bg-none p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="relative bg-none w-full  text-xl bg-none border rounded-full ">
          <input
            type="text"
            placeholder="Enter your text..."
            className="w-full h-auto px-8 py-4 border-none rounded-full bg-none "
          />
          <button className="absolute mt-4 w-8 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
