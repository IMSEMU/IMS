

export const CoordinatorEvaluation = () => {
  return (
    <main>
    <div className="my-1 flex justify-center items-center font-bold pt-5">
      <div className="border-x-[0.4rem] text-2xl border-yellow dark:text-white">
        <p className="px-2">Trainee Evaluation Form by Coordinator</p>
      </div>
    </div>
    <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
      <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[50rem] h-fit pb-10">
        <div className=" w-full    ">
          <p
            className={
              " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] md:border-x-[0.3rem] px-2"
            }
          >
           Evaluation of the intern
          </p>

          <form>

          <div class=" max-[300px]:w-screen px-1 border-dark_3 shadow font-medium grid grid-cols-6 lg:grid-cols-10  text-black border-x-2 border-t-2 lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
  <div class=" col-span-2  lg:col-span-6 pl-1 dark:text-white font-medium"> Evaluation criteria</div>
  <div class="   dark:text-white flex justify-center text-black">poor</div>
  <div class= " flex justify-center dark:text-white">fair </div>
  <div class="dark:text-white flex justify-center">good</div>
  <div class="  dark:text-white flex justify-center">excellent</div>
  
</div>

<div class=" grid grid-cols-6 lg:grid-cols-10 border-dark_3 shadow px-1   font-medium border-x-2 border-t-2 lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow ">
  <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white"> Quality of the report and the compatibility of the work done with the logbook </div>
  <div class="flex justify-center"> <input type={"radio"} name="ah" id="" /></div>
  <div class="flex justify-center"><input type={"radio"} name="ah" id="" /> </div>
  <div class=" flex justify-center"><input type={"radio"} name="ah" id="" /></div>
  <div class="flex justify-center"> <input type={"radio"} name="ah" id="" /></div>
  
</div>

<div class=" grid grid-cols-6 lg:grid-cols-10 border-dark_3 shadow font-medium px-1 border-x-2 border-t-2 lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
  <div class=" col-span-2  lg:col-span-6 pl-1 dark:text-white"> The student has done IT related work or applied IT knowledge to some task </div>
  <div class="flex justify-center"> <input type={"radio"} name="" id="" /></div>
  <div class="flex justify-center"><input type={"radio"} name="" id="" /> </div>
  <div class=" flex justify-center"><input type={"radio"} name="" id="" /></div>
  <div class=" flex justify-center"> <input type={"radio"} name="" id="" /></div>
  
</div>
<div class=" grid grid-cols-6 lg:grid-cols-10 border-dark_3 shadow font-medium px-1 border-x-2 border-t-2 lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
  <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white"> Knowledge of the student during presentation </div>
  <div class="flex justify-center"> <input type={"radio"} name="" id="" /></div>
  <div class="flex justify-center"><input type={"radio"} name="" id="" /> </div>
  <div class=" flex justify-center"><input type={"radio"} name="" id="" /></div>
  <div class="  flex justify-center"> <input type={"radio"} name="" id="" /></div>
  
</div>
<div class=" grid grid-cols-6 lg:grid-cols-10 border-dark_3 shadow px-1 font-medium border-x-2 border-t-2 lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
  <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white"> Answering questions during presentation  </div>
  <div class="flex justify-center"> <input type={"radio"} name="" id="" /></div>
  <div class="flex justify-center"><input type={"radio"} name="" id="" /> </div>
  <div class=" flex justify-center"><input type={"radio"} name="" id="" /></div>
  <div class=" flex justify-center"> <input type={"radio"} name="" id="" /></div>
  
</div> 
<div class=" grid grid-cols-6 lg:grid-cols-10 border-dark_3 shadow px-1 font-medium border-2  lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow ">
  <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white  "> Overall Evaluation Result </div>
  <div class=" dark:text-white col-span-2 pl-5 text-xs lg:text-base "> <input type={"radio"} name="" id="" /> satisfactory </div>
  <div class=" dark:text-white col-span-2 pl-3 text-xs lg:text-base "><input className=" " type={"radio"} name="" id="" /> Unsatisfactory </div>
  
  
</div>
            <div className="mx-4  space-y-2 ">

             

              <div className="flex pt-1">
                <textarea
                  type={"text"}
                  name=""
                  id=""
                  placeholder='General comment'
                  className=" w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-white bg-white dark:bg-dark_2 px-2  border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  h-[8rem]"
                />
              </div>

              <div className="w-full flex items-center justify-end text-white pt-10">
                <button
                  type="submit"
                  className="bg-blue py-2 px-3.5 rounded "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
  )
}
