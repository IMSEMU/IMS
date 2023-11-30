import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Modal from "../../globalComponents/modal";
import jwtDecode from "jwt-decode";

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

  const confirmApplication = async (e) => {
    try {
      const response = await AuthConnect.post("/confirmapp", {
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

  const rejectApplication = async (e) => {
    try {
      const response = await AuthConnect.post("/rejectapp", {
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

  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="border-x-[0.4rem] text-2xl border-yellow">
          <p className="px-2">{t("title")}</p>
        </div>
      </div>
      <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
        <div className="from-left bg-white dark:bg-dark_2 p-5 rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-fit pb-10">
          <div className="w-full"></div>
          <div className=" w-full">
            <p
              className={
                " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("stdinfo")}
            </p>
            <div className="w-full flex justify-center mt-1">
              <Image
                src={info.photo}
                width={1000}
                height={1000}
                alt=""
                priority
                className="h-[7rem] w-[7rem] rounded-2xl"
              />
            </div>
            <div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("name")}: {info.stdfname} {info.stdlname}
                  </span>
                </div>

                <div className="w-1/2">
                  <span>
                    {t("stdid")}: {stdid}{" "}
                  </span>
                </div>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("email")}: {info.stdemail}
                  </span>
                </div>

                <div className="w-1/2">
                  <span>
                    {t("phone")}: {info.stdphone}
                  </span>
                </div>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("address")}: {info.stdaddress}
                </span>
              </div>
            </div>
            <div className={"pt-10"}>
              <p
                className={
                  " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                }
              >
                {t("compinfo")}
              </p>
            </div>
            <div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("compname")}: {info.compname}
                </span>
              </div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("work")}: {info.fields}
                </span>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("website")}: {info.website}
                </span>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("orgemail")}: {info.compemail}
                </span>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("address")}: {info.compaddress}
                </span>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("phone")}: {info.compphone}
                  </span>
                </div>
                {info.compfax != "" ? (
                  <div className="w-1/2">
                    <span>
                      {t("fax")}: {info.compfax}
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-full">
                  <span>
                    {t("desc")}: {info.workdesc}
                  </span>
                </div>
              </div>
            </div>
            <div className={"pt-10"}>
              <p
                className={
                  " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                }
              >
                {t("cis")}
              </p>
            </div>

            <div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("fname")}: {info.supfname}{" "}
                  </span>
                </div>
                <div className="w-1/2">
                  <span>
                    {t("lname")}: {info.suplname}
                  </span>
                </div>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("email")}: {info.supemail}
                  </span>
                </div>
                <div className="w-1/2">
                  <span>
                    {t("pos")}: {info.position}
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <button
                  className="bg-red text-white px-3 py-1 mt-2 justify-start rounded"
                  onClick={() => setReject(true)}
                >
                  Reject
                </button>
                <button
                  className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                  onClick={() => setConfirm(true)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {confirm && (
        <Modal onClose={() => setConfirm(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>
                Are you sure you want to confirm this Internship Application?
              </p>
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
                onClick={confirmApplication}
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
              <p>Internship Application Confirmed</p>
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
              <p>
                Are you sure you want to reject this Internship Application?
              </p>
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
                onClick={rejectApplication}
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
              <p>Internship Application Rejected</p>
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
