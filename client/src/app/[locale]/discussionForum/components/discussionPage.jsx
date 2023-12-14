import { Navbar } from "../../globalComponents/Navbar";
import { AddpostComponent, AddpostModal } from "./addPost";
import { Post } from "./post";

export const DiscussionPage = () => {
  return (
    // main components import page
    <div className="w-full h-screen">
      {/* navbar */}
      <Navbar />

      {/* grids */}
      <main className="flex justify-center overflow-y-visible">
        <div className="relative grid  grid-cols-8 gap-4 mx-4 md:mx-24 lg:mx-4 mt-2 w-screen max-w-[83.75rem]">
            {/* left grid */}
          <div className="  col-span-2 h-full bg-[transparent] rounded"></div>

          <div className="col-span-8 lg:col-span-4 h-full    rounded">
            {/* add post component */}
            <AddpostComponent />
            {/* <AddpostModal /> */}

            {/* post Display */}
            <div className="my-5">
                <Post />
                <Post />
            </div>
          </div>

{/* right grid */}
          <div className=" col-span-2 h-full bg-[transparent] rounded"></div>
        </div>
      </main>
    </div>
  );
};
