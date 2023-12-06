import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Modal from "../../globalComponents/modal";
import LogView from "./logview";

export const EvalView = () => {
  const t = useTranslations("iaf");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [info, setInfo] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [reject, setReject] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState(false);

  const stdid = searchParams.get("stdid");
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchStudentById = async () => {
      const response = await AuthConnect.get(`/getInternship/${stdid}/${id}`);
      console.log(response.data);
      setInfo(response.data);
    };
    fetchStudentById();
  }, []);
  if (!info) {
    return null;
  }

  const confirmEvaluation = async (e) => {
    try {
      const response = await AuthConnect.post("/confirmeval", {
        stdid: stdid,
      });
      if (response) {
        setConfirmed(true);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const push = () => {
    router.push("/departmentDashboard");
  };

  const rejectEvaluation = async (e) => {
    try {
      const response = await AuthConnect.post("/rejecteval", {
        stdid: stdid,
      });
      if (response) {
        setRejected(true);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const formToggle = () => {
    setForm(!form);
  };

  return (
    <main>
      {form ? (
        <div>
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
                    <div class="  flex justify-center dark:text-white">
                      Poor
                    </div>
                    <div class=" flex justify-center dark:text-white">
                      Fair{" "}
                    </div>
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
                        checked={info.interest === 1}
                      />
                    </div>
                    <div class="flex justify-center">
                      <input
                        type={"radio"}
                        name="interest"
                        id="2"
                        checked={info.interest === 2}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="interest"
                        id="3"
                        checked={info.interest === 3}
                      />
                    </div>
                    <div class="flex justify-center">
                      <input
                        type={"radio"}
                        name="interest"
                        id="4"
                        checked={info.interest === 4}
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
                        checked={info.attendance === 1}
                      />
                    </div>
                    <div class="flex justify-center">
                      <input
                        type={"radio"}
                        name="attendance"
                        id="2"
                        checked={info.attendance === 2}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="attendance"
                        id="3"
                        checked={info.attendance === 3}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="attendance"
                        id="4"
                        checked={info.attendance === 4}
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
                        checked={info.technicalablilty === 1}
                      />
                    </div>
                    <div class="flex justify-center">
                      <input
                        type={"radio"}
                        name="technicalAbility"
                        id="2"
                        checked={info.technicalablilty === 2}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="technicalAbility"
                        id="3"
                        checked={info.technicalablilty === 3}
                      />
                    </div>
                    <div class="  flex justify-center">
                      <input
                        type={"radio"}
                        name="technicalAbility"
                        id="4"
                        checked={info.technicalablilty === 4}
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
                        checked={info.generalbehaviour === 1}
                      />
                    </div>
                    <div class="flex justify-center">
                      <input
                        type={"radio"}
                        name="generalBehavior"
                        id="2"
                        checked={info.generalbehaviour === 2}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="generalBehavior"
                        id="3"
                        checked={info.generalbehaviour === 3}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="generalBehavior"
                        id="4"
                        checked={info.generalbehaviour === 4}
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
                        checked={info.overalleval === 1}
                      />
                    </div>
                    <div class="flex justify-center">
                      <input
                        type={"radio"}
                        name="overallEvaluation"
                        id="2"
                        checked={info.overalleval === 2}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="overallEvaluation"
                        id="3"
                        checked={info.overalleval === 3}
                      />
                    </div>
                    <div class=" flex justify-center">
                      <input
                        type={"radio"}
                        name="overallEvaluation"
                        id="4"
                        checked={info.overalleval === 4}
                      />
                    </div>
                  </div>
                  <div class="font-medium  lg:mx-4 py-3 text-xs lg:text-lg rounded">
                    <div class="pl-1 dark:text-white">
                      Summary of the work done during the Internship:
                    </div>

                    <div class="pl-1 dark:text-white">{info.summary}</div>
                  </div>
                  <div class="font-medium  lg:mx-4 py-3 text-xs lg:text-lg rounded">
                    <div class="pl-1 dark:text-white">General Comments:</div>

                    <div class="pl-1 dark:text-white">
                      {info.generalcomments}
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button
                      type="button"
                      className="bg-blue text-white px-3 py-1 mt-2 justify-start rounded"
                      onClick={() => formToggle()}
                    >
                      Back
                    </button>
                    <div>
                      <button
                        type="button"
                        className="bg-red text-white px-3 py-1 mt-2 mr-5 justify-start rounded"
                        onClick={() => setReject(true)}
                      >
                        Reject
                      </button>
                      <button
                        type="button"
                        className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                        onClick={() => setConfirm(true)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <LogView formToggle={formToggle} stdid={stdid} />
      )}

      {confirm && (
        <Modal onClose={() => setConfirm(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>Are you sure you want to confirm this Trainee Evaluation?</p>
            </div>
            <div className="flex justify-between mt-2 w-10/12">
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => setConfirm(false)}
              >
                No
              </button>
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={confirmEvaluation}
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
      )}
      {confirmed && (
        <Modal onClose={() => push()}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>Evaluation Confirmed</p>
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
      {reject && (
        <Modal onClose={() => setReject(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>Are you sure you want to reject this Trainee Evaluatiom?</p>
            </div>
            <div className="flex justify-between mt-2 w-10/12">
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => setReject(false)}
              >
                No
              </button>
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={rejectEvaluation}
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
      )}
      {rejected && (
        <Modal onClose={() => push()}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>Evaluation Rejected</p>
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
