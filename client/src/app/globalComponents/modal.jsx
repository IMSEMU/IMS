import Link from "next/link";
import { BiLogIn } from "react-icons/bi";

function Modal({ isOpen, message, buttonText, buttonLink }) {
  return (
    isOpen && (
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white dark:bg-dark_2 p-4 rounded shadow-md text-center'>
          <p>{message}</p>
          <button><Link href={buttonLink} className={"text-sm md:text-md font-semibold flex items-center bg-blue rounded py-1 px-2 sm:py-2 sm:px-4 text-white"}>
                    <BiLogIn className={"mr-1"}/>
                    {buttonText}
                </Link></button>
          {/* <a href={buttonLink} className='text-blue'>{buttonText}</a> */}
          {/* <button onClick={buttonLink} className='text-red-500 hover:text-red-700'>
            {buttonText}
          </button> */}
        </div>
      </div>
    )
  );
}

export default Modal;