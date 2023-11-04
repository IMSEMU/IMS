import Image from "next/image"
import { HiEllipsisVertical } from "react-icons/hi2"

export const DeptInternshipDisplay = () =>{
    return(
        <div className=" flex flex-nowrap rounded bg-dark_3 ">
            <div className="m-3 flex justify-between items-center">
                {/* company image */}
                <div>
                <Image
            src={"/avatar.png"}
            priority
            width={2000}
            height={2000}
            alt=""
            className="w-[3rem] rounded-sm"
          />
                </div>

<div className="flex-nowrap flex truncate w-full">
        <p className="w-full">Eastern Mediiiiii</p>
        <p className="w-full">Frontend developer</p>
</div>

<div className="text-xl">
    <HiEllipsisVertical />
</div>

            </div>
        </div>
    )
}