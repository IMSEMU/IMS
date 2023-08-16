
export const AnnouncementSkeleton = () => {
  return (
    <>
      <main className="">
        <div className="mt-1  w-[23rem] md:w-fit flex items-center justify-center">
          <div className="w-[25rem] bg-white h-20 flex justify-between items-center rounded my-2 mx-4 border border-white">
            <div className="p-4">
              <em className="skeleton-loader rounded block bg-background_shade_2 h-6 w-20 text-black m-1 px-1.5 py-1"></em>
              <h1 className="skeleton-loader block rounded bg-background_shade_2 h-3 w-48 font-semibold text-lg py-2 mt-4 m-1"></h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const CompletedInternshipSkeleton = () => {
  return (
    <>
      <tr>
        <td className="text-center p-[0.875rem]">
          <p className="skeleton-loader bg-background_shade_2 h-3 w-full p-2 rounded"></p>{" "}
        </td>
        <td className="text-center p-[0.875rem]">
          <p className="skeleton-loader bg-background_shade_2 h-3 w-full p-2 rounded"></p>{" "}
        </td>
        <td className="text-center p-[0.875rem]">
          <p className="skeleton-loader bg-background_shade_2 h-3 w-full p-2 rounded"></p>{" "}
        </td>
        <td className="text-center p-[0.875rem]">
          <p className="skeleton-loader bg-background_shade_2 h-3 w-full p-2 rounded"></p>{" "}
        </td>
        <td className="text-center p-[0.875rem]">
          <p className="skeleton-loader bg-background_shade_2 h-3 w-full p-2 rounded"></p>{" "}
        </td>
      </tr>
    </>
  );
};

export const InternshipCardsSkeleton = () => {
  return (
    <>
      <main className="">
        <div className="bg-white w-[22rem] mx-1 my-1 rounded h-[12rem]">
          <div className="w-full place-content-start my-3 p-3">
            {/* Image */}
            <div className="rounded-full w-[5rem] skeleton-loader bg-background_shade_2 h-[5rem] "></div>
            <div className="">
              <p className="my-2 h-[0.7rem] w-[10rem] skeleton-loader bg-background_shade_2 rounded"></p>
              <p className="my-2 h-[0.5rem] w-[8rem] skeleton-loader bg-background_shade_2 rounded"></p>
              <p className="my-2 h-[0.5rem] w-[8rem] skeleton-loader bg-background_shade_2 rounded"></p>
            </div>
            <div className="flex justify-end px-2 pb-[4rem] items-center">
              <div className=" skeleton-loader bg-background_shade_2 h-[1.2rem] w-[5rem] rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
