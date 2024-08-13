import React from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <button
          className="absolute top-20 right-20 text-2xl font-bold bg-secondary text-background hover:bg-primary hover:text-foreground rounded-[25%] p-3"
          onClick={onClose}
      >
        ✕
      </button>
      <div className="relative p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="relative w-full text-xl border rounded-full">
          <input
            type="text"
            placeholder="Enter your text..."
            className="w-full h-auto px-8 py-4 rounded-full bg-transparent focus:outline-none focus:ring-0"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 border border-border text-foreground rounded-full hover:bg-background hover:text-foreground">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
