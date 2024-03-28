import React, { useState } from 'react';

const HomepagePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div
      className={`fixed inset-0 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      onClick={togglePopup}
    ></div>
    <div
      className={`bg-white rounded-lg p-8 w-96 shadow-lg ${isOpen ? 'block' : 'hidden'}`}
    >
      <h2 className="text-xl mb-4">Welcome!</h2>
      <p>A very warm Welcome to Search Website.</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={togglePopup}>
        Close
      </button>
    </div>
  </div>
  );
};

export default HomepagePopup;
