
import Image from "next/image";

export const InsForm = () => {
          
    return ( 
        <main>
            <div className="my-1 flex justify-center items-center font-bold pt-5">
                
                <div className=" my-2 border-x-[0.4rem] text-2xl border-yellow dark:text-white"><p className="px-2 ">Social Insurance Form</p></div>
            </div>
              <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
                <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[50rem] h-fit pb-10">
                   
                  
                    <div className=" w-full    "  >
                    <div className="w-full flex justify-center my-3 pb-2">
                            <Image 
                                src={ "/avatar.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                priority
                                className="h-[7rem] w-[7rem] rounded-2xl"
                            />
                        </div>
                       

                        
                        <form >
                            <div className="mx-4 lg:mx-16">
                            

                           

                            <div className="   mt-2 relative  md:mt-1  lg:flex  lg:space-x-5   ">
                                   
                            <div className=" max-lg:md:mx-12 lg:w-1/2">
                                   
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Name and surname"
                                        className="input  w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                        
                                    /></div>
                            

                            <div className=" max-lg:md:mx-12 lg:w-1/2">
                                <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="ID/Passport Number*"
                                        className="input w-full  text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                       
                                    />

                            </div>
                            
                            </div></div>
                            
                        <div className="mx-4 lg:mx-16">
                        <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Student number"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className= " max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Academic year"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>

                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Department/Program"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Faculty/School"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>

                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'email'}
                                               name=""
                                               id=""
                                               placeholder="E-mail"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Phone Number(GSM)"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>


                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Address"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                           /></div>
                                   </div>

                                

                  </div>
                  
                  <p className={"  font-bold mt-8 my-2 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                        Information about the Place of the internship 
                        </p>
                        <div className="mx-4 lg:mx-16 space-y-2 ">
                        <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                   <div className=" pt-[1.1rem] border-b-2 pb-2">
                                          <label className="   "> Start date of the internship:</label></div></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'date'}
                                               name=""
                                               id=""
                                               placeholder="End date of the internship"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   


                                   
                                   </div>

                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                   <div className=" pt-[1.1rem]  border-b-2 pb-2">
                                          <label className="   "> Ending date of the internship:</label></div></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'date'}
                                               name=""
                                               id=""
                                               placeholder="End date of the internship"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   


                                   
                                   </div>

                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Duration(Working days)"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Company name"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>
                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Company address"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Field"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>
                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Phone Number"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'email'}
                                               name=""
                                               id=""
                                               placeholder="E-mail Address"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>
                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Website"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>                           
                                   </div>

                                 <div className="flex justify-start  ">
                                       
                                 <p className={"   font-bold my-6 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                        Employer or authority  
                        </p>

                                 </div>


                                  <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Name and surname"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Position"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>
                                    <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'email'}
                                               name=""
                                               id=""
                                               placeholder="E-mail Address"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Employer S.G.K number*"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>
                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                   <div className=" pt-[1.1rem]  border-b-2 pb-2">
                                          <label className="   "> Date:</label></div></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'date'}
                                               name=""
                                               id=""
                                               placeholder=""
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                    
                                   </div>

                                <div className=" justify-start">
                                   <p className={" font-bold my-6 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                        Student Registration information 
                        </p></div>


                           <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Name"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Surname"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>
                                    <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Father name*"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Mother name*"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>
                                    <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="Place of birth*"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="ID/Passport Number*"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>



                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                   <div className=" pt-[1.1rem]  border-b-2 pb-2">
                                          <label className="   "> Date of birth*</label></div></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'date'}
                                               name=""
                                               id=""
                                               placeholder=""
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   


                                   
                                   </div>

                                   <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                   <div className=" pt-[1.1rem]  border-b-2 pb-2">
                                          <label className="   "> Date of issue*</label></div></div>
                                   
       
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                       <input
                                               type={'date'}
                                               name=""
                                               id=""
                                               placeholder="End date of the internship"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                              
                                           />
       
                                   </div>
                                   
                                   </div>                                   
                                    <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                                   
                                   <div className="max-lg:md:mx-12 lg:w-1/2">
                                          
                                           <input
                                               type={'text'}
                                               name=""
                                               id=""
                                               placeholder="The period of validity*"
                                               className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                               
                                               
                                           /></div>
                                   
                                   </div> 
                               <div className="w-full flex items-center justify-end text-white pt-10">
                                 <button type="submit" className="bg-blue py-2 px-3.5 rounded ">Submit</button>
                                </div>
                            
                        </div>

                        </form>

                    </div>

                </div>
            </section>
        </main>
     );
}