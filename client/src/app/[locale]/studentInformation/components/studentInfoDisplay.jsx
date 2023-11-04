import { BiX } from "react-icons/bi";
import { TopNav } from "../../internDashboard/components/topNav";
import { StudentList } from "./studentsList";
import Image from "next/image";

export const StudentInfoDisplay = () => {
  return (
    <div className="h-screen">
      <TopNav />

      {/* students list */}
      <div className="flex items-center justify-center">
        <div className=" bg-white mt-8 shadow-xl border-background_shade_2 border max-w-[50rem] flex justify-center h-[32rem] w-full rounded">
          <div className="w-1/2">
            {/* Section Name */}
            <div className="flex text-md font-bold  m-3">
              <p className="border-yellow capitalize border-x-4 mx-2  inline-flex px-2">
                Student Information
              </p>
            </div>
            {/* search */}
            <div className="flex items-center justify-center my-3">
              <div className="  flex justify-center items-center border border-background_shade_2 h-full w-2/3 rounded">
                <input
                  type="text"
                  id=""
                  className="outline-none border-none w-full px-2"
                  placeholder="student number or Names"
                />
                <button className="px-2 py-1 bg-blue text-white rounded">
                  <BiX className="text-2xl" />
                </button>
              </div>
            </div>
            <StudentList />
          </div>
          {/* display section */}
          <div className="w-1/2">
            <div className="w-full h-full bg-background_shade rounded">
              {/* <div className="w-full"> */}
              <Image
                src={"/dark-flower.jpeg"}
                width={2000}
                height={2000}
                alt=""
                priority
                className="bg-cover object-cover w-full rounded h-[9rem]"
              />
              {/* </div> */}

              <div className="-mt-9 ml-4 ">
                <Image
                  src={"/dark-flower.jpeg"}
                  width={2000}
                  height={2000}
                  alt=""
                  priority
                  className="bg-cover object-cover rounded-full w-[6rem] h-[6rem]"
                />
              </div>
              {/* name and student number */}
              <div className="flex flex-wrap justify-start items-center mt-3">
                <p className="font-semibold text-lg w-full px-2">
                  Joel Ikenga Inyama
                </p>
                <p className="font-medium text-md text-blue w-full px-2">
                  {" "}
                  21902012@emu.edu.tr
                </p>
              </div>

              <div className="w-full flex justify-center mx-3 mt-3">
                <div className="w-1/2 ">
                  <div className="text-start  font-semibold my-3">
                    Company Details
                  </div>
                  <div className="text-sm ">
                    Name <p className=""></p>
                  </div>
                  <div className="text-sm">
                    Supervisor <p className=""></p>
                  </div>
                  <div className="text-sm">
                    Location <p className=""></p>
                  </div>
                  <div className="text-sm">
                    Status <p className=""></p>
                  </div>
                </div>

                <div className="w-1/2 ">
                  <div className=" font-semibold my-3">
                    Internship Details
                  </div>
                  <div className="text-sm ">
                    Total Days <p className=""></p>
                  </div>
                  <div className="text-sm">
                    Remaining Days <p className=""></p>
                  </div>
                  <div className="text-sm">
                    Completed Forms <p className=""></p>
                  </div>
                  <div className="text-sm">
                    Status <p className=""></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
