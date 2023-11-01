

export const ReportSubmit = () => {
  return (
    <main className=" bg-white justify-center dark:bg-dark_1  " >

       <div className="justify-center flex mt-5   " >
      <p className=" text-center border-x-[0.4rem] px-2 font-bold border-yellow justify-center text-2xl dark:text-white " > Report submission </p></div>
       
       
       <div className=" flex justify-center mx-5 "  >
      <div className=" bg-white border-background_shade_2 dark:bg-dark_2 dark:border-none shadow-xl w-full md:max-lg:w-5/6  lg:w-2/3   justify-center mt-8 h-auto rounded  border" >


        <div className="  border py-3.5 shadow-inner bg-background_shade_2 dark:bg-dark_3 dark:border-none  rounded border-background_shade_2 text-sm md:max-lg:text-lg lg:text-xl my-5 mx-10">
        <div className=" pl-2 dark:text-white"> file status: </div></div>

        <div className="  border py-3.5 shadow-inner bg-background_shade_2 dark:bg-dark_3 dark:border-none rounded border-background_shade_2 text-sm md:max-lg:text-lg  lg:text-xl  mx-10">
        <div className=" pl-2 dark:text-white"> Due date: </div></div>

        <div className=" mx-10  mt-5">
          <textarea 
          type={"text"}
           name=""
            id=""  
            placeholder=" Add a comment " 
          className="  border w-full h-20 lg:h-40  shadow dark:bg-dark_3 dark:placeholder:text-white  dark:text-white dark:border-none  "/> 
          </div>




        <div className=" flex justify-center pt-3 space-x-5" ><button className="bg-blue py-2 px-3.5 rounded text-white">
          Upload file </button> 
          
           
             </div>

             <div className=" flex justify-end mr-3 pt-6 pb-10"><button className="bg-blue py-2 px-3.5 rounded text-white">Submit </button></div>

      </div></div>

    </main>
  )
}
