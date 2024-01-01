import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, onClose }) => {
  return (
    <div className=" fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>
      <div className="bg-white from-bottom dark:bg-dark_2 w-[20rem] mx-2 md:mx-auto  md:w-1/2 p-4 rounded shadow-md relative max-h-[70vh] overflow-y-auto">
        <div className="flex justify-end sticky top-0">
          <button onClick={onClose} className="text-gray-400 hover:text-red">
            <FaTimes className="dark:text-yellow" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
