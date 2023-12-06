import React, { useState } from "react";
import AuthConnect from "@/auth";
import Modal from "../../globalComponents/modal";
import { useRouter, useSearchParams } from "next/navigation";

export const SupervisorEvaluation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [interest, setInterest] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [technicalAbility, setTechnicalAbility] = useState(null);
  const [generalBehavior, setGeneralBehavior] = useState(null);
  const [overallEvaluation, setOverallEvaluation] = useState(null);
  const [summary, setSummary] = useState("");
  const [generalComments, setGeneralComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const stdid = searchParams.get("stdid");
  const id = searchParams.get("id");

  const submitEval = async (e) => {
    e.preventDefault();
    console.log(generalBehavior);
    try {
      const response = await AuthConnect.post("/submitcompeval", {
        stdid: stdid,
        interest: interest,
        attendance: attendance,
        technicalAbility: technicalAbility,
        generalBehavior: generalBehavior,
        overallEvaluation: overallEvaluation,
        summary: summary,
        generalComments: generalComments,
      });
      if (response) {
        setSubmitted(true);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        alert("Application Error"); // You can add a generic error message here
      }
    }
  };

  const push = () => {
    router.push("/companyDashboard");
  };
  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="border-x-[0.4rem] text-2xl border-yellow dark:text-white">
          <p className="px-2">Trainee Evaluation Form by Supervisor</p>
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
              <div class=" max-[300px]:w-screen px-1  grid grid-cols-6 lg:grid-cols-10   font-medium  lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
                <div class=" col-span-2  lg:col-span-6 pl-1 dark:text-white">
                  Evaluation criteria
                </div>
                <div class="  flex justify-center dark:text-white">Poor</div>
                <div class=" flex justify-center dark:text-white">Fair </div>
                <div class="dark:text-white flex justify-center">Good</div>
                <div class=" flex justify-center dark:text-white ">
                  Excellent
                </div>
              </div>

              <div class=" grid grid-cols-6 lg:grid-cols-10   font-medium  lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow ">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white">
                  Interest
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="interest"
                    id="1"
                    onChange={() => setInterest(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="interest"
                    id="2"
                    onChange={() => setInterest(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="interest"
                    id="3"
                    onChange={() => setInterest(3)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="interest"
                    id="4"
                    onChange={() => setInterest(4)}
                  />
                </div>
              </div>

              <div class=" grid grid-cols-6 lg:grid-cols-10   font-medium  lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
                <div class=" col-span-2  lg:col-span-6 pl-1 dark:text-white">
                  Attendance
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="attendance"
                    id="1"
                    onChange={() => setAttendance(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="attendance"
                    id="2"
                    onChange={() => setAttendance(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="attendance"
                    id="3"
                    onChange={() => setAttendance(3)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="attendance"
                    id="4"
                    onChange={() => setAttendance(4)}
                  />
                </div>
              </div>
              <div class=" grid grid-cols-6 lg:grid-cols-10   font-medium  lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white">
                  Technical Ability and Knowledge
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="technicalAbility"
                    id="1"
                    onChange={() => setTechnicalAbility(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="technicalAbility"
                    id="2"
                    onChange={() => setTechnicalAbility(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="technicalAbility"
                    id="3"
                    onChange={() => setTechnicalAbility(3)}
                  />
                </div>
                <div class="  flex justify-center">
                  <input
                    type={"radio"}
                    name="technicalAbility"
                    id="4"
                    onChange={() => setTechnicalAbility(4)}
                  />
                </div>
              </div>
              <div class=" grid grid-cols-6 lg:grid-cols-10   font-medium  lg:mx-4 py-1 text-xs lg:text-lg rounded dark:border-yellow">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white">
                  General Behavior
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="generalBehavior"
                    id="1"
                    onChange={() => setGeneralBehavior(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="generalBehavior"
                    id="2"
                    onChange={() => setGeneralBehavior(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="generalBehavior"
                    id="3"
                    onChange={() => setGeneralBehavior(3)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="generalBehavior"
                    id="4"
                    onChange={() => setGeneralBehavior(4)}
                  />
                </div>
              </div>
              <div class=" grid grid-cols-6 lg:grid-cols-10  font-medium  lg:mx-4 py-1 text-xs lg:text-lg rounded ">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white">
                  Overall Evaluation Result
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="overallEvaluation"
                    id="1"
                    onChange={() => setOverallEvaluation(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="overallEvaluation"
                    id="2"
                    onChange={() => setOverallEvaluation(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="overallEvaluation"
                    id="3"
                    onChange={() => setOverallEvaluation(3)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="overallEvaluation"
                    id="4"
                    onChange={() => setOverallEvaluation(4)}
                  />
                </div>
              </div>
              <div className="mx-4  space-y-2 font-medium">
                <div className="flex  pt-1 font-medium">
                  <textarea
                    type={"text"}
                    name=""
                    id=""
                    placeholder="Summary of the work done during the internship"
                    className=" w-full font-medium text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-white bg-white dark:bg-dark_2 px-2  border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  h-[8rem]"
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>

                <div className="flex pt-1 font-medium">
                  <textarea
                    type={"text"}
                    name=""
                    id=""
                    placeholder="General comments"
                    className=" w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-white bg-white dark:bg-dark_2 px-2  border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  h-[8rem]"
                    onChange={(e) => setGeneralComments(e.target.value)}
                  />
                </div>

                <div className="w-full flex items-center justify-end text-white pt-10">
                  <button
                    type="button"
                    className="bg-blue py-2 px-3.5 rounded "
                    onClick={submitEval}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {submitted && (
        <Modal onClose={() => push()}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>Company Supervisor Evaluation Submitted</p>
            </div>
            <button
              className="bg-blue text-white px-3 py-1 mt-2 justify-start rounded"
              onClick={() => push()}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
