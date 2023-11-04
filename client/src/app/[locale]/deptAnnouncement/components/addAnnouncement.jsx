import { BiPlus } from "react-icons/bi";

export const AddAnnouncement = () => {
  return (
    <div>
      <div className={"hidden lg:block w-full mb-3"}>
        <p
          className={
            " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
          }
        >
          Add Announcements
        </p>
      </div>
      <form className="flex gap-3 justify-center py-2 items-center">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {/* Department input section */}
          <div className="w-[90%]">
            <input
              placeholder={"Title"}
              type="text"
              id=""
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          {/*  description section */}
          <div className="w-[90%]">
            <textarea
              placeholder={"Text area"}
              id=""
              className=" resize-none rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[10rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          <div className=" flex justify-end mx-4 w-full">
            <button
              type="submit"
              className={
                "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
              }
            >
              <BiPlus className={"text-white text-xl"} />
              <div>add</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
