import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";
import Modal from "../../globalComponents/modal";
import { useTranslations } from "next-intl";

export const CoordinatorEvaluation = ({ formToggle, stdid }) => {
  const t = useTranslations("reportview");
  const router = useRouter();
  const [quality, setQuality] = useState(null);
  const [itwork, setITWork] = useState(null);
  const [knowledge, setKnowledge] = useState(null);
  const [answeringquestions, setAnsweringQuestions] = useState(null);
  const [overallresult, setOverallResult] = useState(null);
  const [generalComments, setGeneralComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [msg, setMsg] = useState("");

  const submitEval = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/submitdepteval", {
        stdid: stdid,
        quality: quality,
        itwork: itwork,
        knowledge: knowledge,
        answeringQuestions: answeringquestions,
        grade: overallresult,
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
    router.push("/departmentDashboard");
  };

  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="border-x-[0.4rem] text-2xl border-yellow dark:text-white">
          <p className="px-2">{t("title")}</p>
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
              {t("evalOfINtern")}
            </p>

            <form>
              <div class=" max-[300px]:w-screen px-1 font-medium grid grid-cols-6 lg:grid-cols-10  text-black  lg:mx-4 py-1 text-xs lg:text-lg rounded">
                <div class=" col-span-2  lg:col-span-6 pl-1 dark:text-white font-medium">
                {t("EvaluationCriteria")}
                </div>
                <div class="   dark:text-white flex justify-center text-black">
                {t("Poor")}
                </div>
                <div class=" flex justify-center dark:text-white">{t("Fair")} </div>
                <div class="dark:text-white flex justify-center">{t("Good")}</div>
                <div class="  dark:text-white flex justify-center">
                {t("Excellent")}
                </div>
              </div>

              <div class=" grid grid-cols-6 lg:grid-cols-10 px-1   font-medium lg:mx-4 py-1 text-xs lg:text-lg rounded ">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white">
                {t("QualityOfReport")}
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="quality"
                    id="1"
                    onChange={() => setQuality(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="quality"
                    id="2"
                    onChange={() => setQuality(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="quality"
                    id="3"
                    onChange={() => setQuality(3)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="quality"
                    id="4"
                    onChange={() => setQuality(4)}
                  />
                </div>
              </div>

              <div class=" grid grid-cols-6 lg:grid-cols-10 font-medium px-1 lg:mx-4 py-1 text-xs lg:text-lg rounded">
                <div class=" col-span-2  lg:col-span-6 pl-1 dark:text-white">
                {t("q2")}
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="itwork"
                    id="1"
                    onChange={() => setITWork(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="itwork"
                    id="2"
                    onChange={() => setITWork(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="itwork"
                    id="3"
                    onChange={() => setITWork(3)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="itwork"
                    id="4"
                    onChange={() => setITWork(4)}
                  />
                </div>
              </div>
              <div class=" grid grid-cols-6 lg:grid-cols-10 font-medium px-1 lg:mx-4 py-1 text-xs lg:text-lg rounded">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white">
                {t("q3")}
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="knowledge"
                    id="1"
                    onChange={() => setKnowledge(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="knowledge"
                    id="2"
                    onChange={() => setKnowledge(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="knowledge"
                    id="3"
                    onChange={() => setKnowledge(3)}
                  />
                </div>
                <div class="  flex justify-center">
                  <input
                    type={"radio"}
                    name="knowledge"
                    id="4"
                    onChange={() => setKnowledge(4)}
                  />
                </div>
              </div>
              <div class=" grid grid-cols-6 lg:grid-cols-10  px-1 font-medium  lg:mx-4 py-1 text-xs lg:text-lg rounded ">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white">
                {t("q4")}
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="answeringquestions"
                    id="1"
                    onChange={() => setAnsweringQuestions(1)}
                  />
                </div>
                <div class="flex justify-center">
                  <input
                    type={"radio"}
                    name="answeringquestions"
                    id="2"
                    onChange={() => setAnsweringQuestions(2)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="answeringquestions"
                    id="3"
                    onChange={() => setAnsweringQuestions(3)}
                  />
                </div>
                <div class=" flex justify-center">
                  <input
                    type={"radio"}
                    name="answeringquestions"
                    id="4"
                    onChange={() => setAnsweringQuestions(4)}
                  />
                </div>
              </div>
              <div class=" grid grid-cols-6 lg:grid-cols-10 px-1 font-medium lg:mx-4 py-1 text-xs lg:text-lg rounded">
                <div class="col-span-2  lg:col-span-6 pl-1 dark:text-white  ">
                {t("OverEvalResult")}
                </div>
                <div class=" dark:text-white col-span-2 pl-5 text-xs lg:text-base ">
                  <input
                    type={"radio"}
                    name="overallresult"
                    id="S"
                    onChange={() => setOverallResult("S")}
                  />
                  {t("Satisfactory")}
                </div>
                <div class=" dark:text-white col-span-2 pl-3 text-xs lg:text-base">
                  <input
                    className=" "
                    type={"radio"}
                    name="overallresult"
                    id="U"
                    onChange={() => setOverallResult("U")}
                  />
                  {t("Unsatisfactory")}
                </div>
              </div>
              <div className="mx-4  space-y-2 ">
                <div className="flex pt-1">
                  <textarea
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("GeneralComments")}
                    className=" w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-white bg-white dark:bg-dark_2 px-2  border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  h-[8rem]"
                    onChange={(e) => setGeneralComments(e.target.value)}
                  />
                </div>

                <div className="w-full flex items-center justify-between text-white pt-10">
                  <button
                    type="button"
                    className="bg-blue py-2 px-3.5 rounded"
                    onClick={formToggle}
                  >
                    {t("Back")}
                  </button>
                  <button
                    type="button"
                    className="bg-blue py-2 px-3.5 rounded"
                    onClick={submitEval}
                  >
                    {t("Submit")}
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
              <p>{t("EvaluationSubmitted")}</p>
            </div>
            <button
              className="bg-blue text-white px-3 py-1 mt-2 justify-start rounded"
              onClick={() => push()}
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
