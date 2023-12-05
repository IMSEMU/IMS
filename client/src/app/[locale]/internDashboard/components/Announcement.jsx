import Image from "next/image";
import { FaOpenid } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";

export const Announcement = () => {
  return (
    <main>
      <div className="m-4 rounded h-fit overflow-hidden">
        <div className=" flex justify-center flex-wrap">
          <div className="bg-white drop-shadow-md border-background_shade_2 border h-fit rounded gap-2 my-2 p-1 flex justify-between items-center ">
            {/* profile image */}
            <div className="">
              <Image
                src={"/envelope.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-[4rem] h-fit"
              />
            </div>
            {/* name and std number */}
            <div className="flex flex-wrap justify-start text-center items-center gap-0 rounded w-full truncate">
              <p className="font-semibold truncate w-[80%]">
                Frontend Developer
              </p>
              <p className=" text-black rounded truncate text-sm w-[60%]">
                Tesla.com
              </p>
            </div>
            {/* view button */}
            <div className="w-fit text-2xl px-2">
                <MdReadMore />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
