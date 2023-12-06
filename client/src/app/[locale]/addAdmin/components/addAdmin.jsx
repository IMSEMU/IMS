export const AddAdmin = () => {
  return (
    <div className="">
      {/* Title */}
      <div className="hidden  font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  lg:inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2">
        Add Admin
      </div>

      {/* form inputs */}

      <form className="flex flex-wrap gap-3 justify-center items-center">
        <div className="w-[90%] mt-3">
          <input
            placeholder="Firstname"
            type="text"
            id=""
            name=""
            className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
          />
        </div>

        <div className="w-[90%] mt-3">
          <input
            placeholder="Lastname"
            type="text"
            id=""
            name=""
            className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
          />
        </div>

        <div className="w-[90%] mt-3">
          <input
            placeholder="Email"
            type="email"
            id=""
            name=""
            className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
          />
        </div>
        <div className="w-[90%] mt-3">
          <select
            name=""
            id=""
            className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
          >
            <option className="rounded text-blue my-2">Administrator</option>
            <option className="rounded text-blue my-2">
              Department Co-ordinator
            </option>
          </select>
        </div>
        
        <div className="inline-flex items-end w-[90%] mb-4 md:mb-0 justify-end">
            <button className="bg-blue py-2 px-3 rounded text-white font-semibold">Add</button>
            </div>
      </form>
    </div>
  );
};
