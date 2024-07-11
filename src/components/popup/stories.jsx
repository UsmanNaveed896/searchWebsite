import React from "react";

const Stories = ({ isOpen, closeModal, isVideo, selectedMedia,  }) => {
  
  return (
    <div>
      {isOpen && (
        <div className="fixed z-[999] inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-75">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute z-[999] top-4 right-4 text-white bg-black p-2 rounded-full"
              >
                Close
              </button>
              {isVideo ? (
                <video
                  src={ selectedMedia}
                  controls
                  className="h-[500px]"
                />
              ) : (
                <img
                  src={selectedMedia}
                  alt="Selected Media"
                  className="h-[500px]"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;
