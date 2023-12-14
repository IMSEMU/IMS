import Image from "next/image";
import { IoMdPhotos } from "react-icons/io";

// add post display section
export const AddpostComponent = () => {
  return (
    <div className=" flex flex-wrap rounded bg-white drop-shadow-md border-background_shade_2 border w-full">
      {/* first */}
      <div className="flex justify-start gap-2 mx-4  mt-3 pb-3 border-b-background_shade_2 border-b w-full">
        {/* image */}
        <Image
          height={100}
          width={100}
          src={"/dark-flower.jpeg"}
          alt="profile picture"
          className="border w-[3rem] h-[3rem] rounded-full"
        />

        {/* text display */}
        <div className="capitalize cursor-pointer bg-background_shade border border-background_shade_2 flex items-center rounded-md w-full">
          <input  className="px-2 w-full h-full outline-none text-xs sm:text-base text-black font-semi-bold"
             placeholder="Whats on your mind username ?"
          />
        </div>
      </div>

      {/* second section */}
      <div className="flex justify-between items-center mx-4 my-2 w-full">
        {/* photo icon */}
        <div className="text-4xl cursor-pointer  text-yellow">
          <IoMdPhotos />
        </div>

        {/* post button */}
        <button className="px-4 cursor-pointer py-1.5 font-normal bg-blue text-white rounded">
          Post
        </button>
      </div>
    </div>
  );
};

export const AddpostModal = () => {
  return (
    <div className="w-full px-3 ">
      <div className="flex justify-between">
      <div className="flex justify-between items-center mx-4 my-2 w-full">
        {/* photo icon */}
        <div className="text-4xl cursor-pointer  text-yellow">
          <IoMdPhotos />
        </div>

        {/* post button */}
        <button className="px-4 cursor-pointer py-1.5 font-normal bg-blue text-white rounded">
          Post
        </button>
      </div>
      </div>
    </div>
  );
};
