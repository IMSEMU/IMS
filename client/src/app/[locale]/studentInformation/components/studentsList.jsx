import Image from "next/image";
import { FaEllipsisV } from "react-icons/fa";

export const StudentList = () => {
  return (
    <main className=" flex justify-center ">
    <div className=" max-w-[95%]">
      <div className="bg-white drop-shadow-md border-background_shade_2 border h-fit rounded gap-2 my-2 p-1 flex justify-between items-center ">
        {/* profile image */}
        <div className="w-[4rem]">
          <Image
            height="1000"
            width="1000"
            src="/avatar.png"
            priority
            className="w-[4rem]  m-1 rounded-full"
          />
        </div>
        {/* name and std number */}
        <div className="flex flex-wrap justify-start items-center gap-0 rounded w-full truncate">
            <p className="font-semibold truncate w-full">Joel Ikenga Inyama</p>
            <p className=" text-black rounded text-sm w-fit">21902017</p>
        </div>
        {/* view button */}
        <div className="w-fit text-xl px-2">
            <FaEllipsisV />
        </div>
      </div>
    </div>
    </main>
  );
};
