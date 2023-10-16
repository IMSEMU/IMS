'use client'
import { BiPlus } from "react-icons/bi";
import {useState} from "react";
import AuthConnect from "@/auth";

export  const AddLogData = () => {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");

  const createLogEntry = async (e) => {
   try { 
    const response = await AuthConnect.post('/createlog', {
            day: day,
            date: date,
            department: department,
            description: description
    });
         
        console.log(response);

    } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          setMsg(error.response.data.msg);
        }
    }
}

  return ( 
      <div className="w-full">
        <div className={"w-full justify-center mb-3"}>
            <p  className={" font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>Daily Logbook</p>
        </div>
        <form onSubmit={createLogEntry} className="flex gap-3 justify-center py-2 items-center">

          <div className="flex flex-wrap gap-3 justify-center items-center">

          <div className="w-[22rem]">
              <input placeholder="Day"  
              type="number" 
              value={day} onChange={(e) => setDay(e.target.value)}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2" />
            </div>

            <div className="w-[22rem]">
              <input placeholder="Date"  
              type="date" 
              value={date} onChange={(e) => setDate(e.target.value)}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2" />
            </div>

            {/* Department input section */}
            <div className="w-[22rem]">
              <input placeholder="Department"  type="text" 
              value={department} onChange={(e) => setDepartment(e.target.value)}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2" />
            </div>

            {/* work description section */}
            <div >
              <textarea placeholder="Description of Work done" 
              value={description} onChange={(e) => setDescription(e.target.value)}
              className=" resize-none rounded p-3 outline-none w-[22rem] border border-dark_4 dark:border-none h-[10rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"/>
            </div>

            <div className=" flex justify-end mx-4 w-[22rem]">
              <button type="submit" className={'px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1'}>
                  <BiPlus className={'text-white text-xl'}/>
                  <div>Add</div>
              </button>
            </div>

          </div>
            
         </form>

      </div>
      );
}