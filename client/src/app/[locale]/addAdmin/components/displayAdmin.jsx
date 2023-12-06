"use client";
import { useState } from "react";
import { GiTrashCan } from "react-icons/gi";
export const DisplayAdmin = () => {
  const [finalOption, SetFinalOption] = useState(false);
  return (
    <div className="h-full">
      <div className=" overflow-y-auto border border-background_shade_2 h-full">
        <div className="mx-2 bg-white drop-shadow-md border-background_shade_2 border h-fit rounded gap-2 my-2 p-1 flex justify-between items-center ">
          <div className="rounded text-white uppercase font-bold p-4 text-2xl bg-blue">
            <p>Z</p>
          </div>

          {/* Name and permission */}
          <div className="flex flex-wrap justify-center text-center items-center gap-0 rounded w-full truncate">
            <p className="font-semibold truncate w-[80%]">Zafer Akile</p>
            <p className="text-sm text-blue truncate w-[80%]">
              Department coordinator
            </p>
          </div>

          {/* icon */}

          <div className="text-2xl cursor-pointer mr-2">
            {/* delete user */}

            {finalOption ? (
              //  final option
              <div className=" from-left rounded flex gap-1">
                <div
                  onClick={() => SetFinalOption(false)}
                  className="px-1.5 py-0.5 rounded text-white bg-[red]"
                >
                  X
                </div>
                <div className="px-1.5 py-0.5 rounded text-white bg-[green]">
                  X
                </div>
              </div>
            ) : (
              <GiTrashCan
                onClick={() => SetFinalOption(true)}
                className="from-right text-[#e44444]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
