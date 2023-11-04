import Image from "next/image";
import { BiPlus } from "react-icons/bi";

export const AddInternshipPosition = () => {
  return (
    <main className="">
      <div className="mx-4 ">
        <div className="flex justify-between capitalize p-3 items-center">
          <p
            className={
              " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
            }
          >
            {"Internship Positions"}
          </p>

          <button className="flex gap-1 items-center p-1 text-sm md:text-md xl:text-lg rounded bg-blue text-white">
            <BiPlus className="text-xl" />
            <p>Add</p>
          </button>
        </div>

        <div className="">
          <Image
            src={"/avatar.png"}
            priority
            width={2000}
            height={2000}
            alt=""
            className="w-[4rem] rounded-sm"
          />
        </div>

        <div className="mt-2 relative flex space-x-2">
          <div className="w-1/2">
            <input
              type={"file"}
              name=""
              id=""
              placeholder={"Upload Image"}
              className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
              required
            />
          </div>
          <div className="w-1/2">
            <input
              type={"text"}
              name=""
              id=""
              placeholder={"Company name"}
              className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mt-2 md:mt-4 relative flex space-x-2">
          <div className="w-1/2">
            <input
              type={"text"}
              name=""
              id=""
              placeholder={"Internship position"}
              className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
              required
            />
          </div>
          <div className="w-1/2">
            <input
              type={"text"}
              name=""
              id=""
              placeholder={"Country"}
              className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mt-2 md:mt-4 relative flex space-x-2">
          <div className="w-1/2">
            <input
              type={"text"}
              name=""
              id=""
              placeholder={"City"}
              className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
              required
            />
          </div>
          <div className="w-1/2">
            <input
              type={"date"}
              name=""
              id=""
              placeholder={"due date"}
              className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mt-2 md:mt-4 relative flex space-x-2">
          <div className="w-full">
            <textarea
              type={"text"}
              name=""
              id=""
              placeholder={"desc"}
              className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  focus:outline-none h-[8rem]"
              required
            />
          </div>
        </div>
      </div>
    </main>
  );
};
