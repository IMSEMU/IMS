import { useRouter } from "next/navigation";
import AuthConnect from "@/auth";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Modal from "../../globalComponents/modal";
import ConfirmationSection from "./confimationSection";
import jwtDecode from "jwt-decode";

export const ConForm = () => {
  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="border-x-[0.4rem] text-2xl border-yellow dark:text-white">
          <p className="px-2">Confirmation Form</p>
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
              Information about the Company and Trainee
            </p>

            <form>
              <div className="mx-4 lg:mx-16">
                <div className="   mt-2 relative  md:mt-1  lg:flex  lg:space-x-5   ">
                  <div className=" max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Company Name"
                      className="input  w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className=" max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="working Field"
                      className="input w-full  text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mx-4 lg:mx-16">
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Postal Address"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className=" max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="City"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Country"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Fax"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Telephone Number"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"email"}
                      name=""
                      id=""
                      placeholder="Organiztion E-mail"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Organizational website"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Name and surname of the trainee"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <div className="pt-5   border-b-2 pb-2">
                      <label className="   ">
                        {" "}
                        Enter the Planned ending date:
                      </label>
                    </div>
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"date"}
                      name=""
                      id=""
                      placeholder="Planned Ending Date "
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <div className="pt-5   border-b-2 pb-2">
                      <label className="   ">
                        {" "}
                        Enter the Planned ending date:
                      </label>
                    </div>
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"date"}
                      name=""
                      id=""
                      placeholder="jbjnm"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <p
                className={
                  " font-bold my-6 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                }
              >
                The Work To Be Done By The Student
              </p>
              <div className="mx-4 lg:mx-16 space-y-2 ">
                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        {" "}
                        Developing Software{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        Operating system installation and maintenance{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        Working as part of a team in a large software project{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        Hardware fault diagnosis and repairs{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        designing WEB pages
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        Developing a WEB application using ASP, .NET, PHP etc{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        Designing/working with databases{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        Learning to use complex company software{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex ">
                  <div className=" inline-flex   space-x-2 ">
                    <div>
                      <input type={"checkbox"} name="" id="" />
                    </div>
                    <div>
                      <label className=" dark:text-yellow">
                        Network installation and maintenance
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" flex ">
                  <div className=" inline-flex  space-x-2 ">
                    <div>
                      <input
                        type={"checkbox"}
                        name=""
                        id=""
                        className=" checked:bg-yellow"
                      />
                    </div>
                    <div>
                      <label className=" dark:text-yellow ">
                        Other (please state in the box below){" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex pt-4">
                  <textarea
                    type={"text"}
                    name=""
                    id=""
                    className="input  w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4  border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  focus:outline-none h-[8rem]"
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
  );
};
