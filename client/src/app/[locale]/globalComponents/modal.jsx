import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>
      <div className="bg-white dark:bg-dark_2 w-full sm:w-7/12 md:w-1/2 p-4 rounded shadow-md relative max-h-[80vh] overflow-y-auto">
        <div className="flex justify-end sticky top-0">
          <button onClick={onClose} className="text-gray-400 hover:text-red">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
