import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Modal from "../../globalComponents/modal";
import Loading from "../../globalComponents/loading";

export const SifView = () => {
  const t = useTranslations("sif");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [info, setInfo] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

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

  const confirmInsurance = async (e) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/confirmins", {
        stdid: stdid,
      });
      if (response) {
        setLoading(false);
        setConfirmed(true);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
  };

  const push = () => {
    router.push("/departmentDashboard");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="border-x-[0.4rem] text-2xl border-yellow">
          <p className="px-2">{t("title")}</p>
        </div>
      </div>
      <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
        <div className="from-left bg-white dark:bg-dark_2 p-5 rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-fit pb-10">
          <div className=" w-full">
            <div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("name")}: {info.stdfname} {info.stdlname}
                  </span>
                </div>

                <div className="w-1/2">
                  <span>
                    {t("idpass")}: {info.idpassno}{" "}
                  </span>
                </div>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("stdid")}: {info.stdid}{" "}
                  </span>
                </div>

                <div className="w-1/2">
                  <span>
                    {t("ayear")}: {info.ayear}
                  </span>
                </div>
              </div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("dept")}: {info.dept}{" "}
                  </span>
                </div>

                <div className="w-1/2">
                  <span>
                    {t("fac")}: {info.faculty}
                  </span>
                </div>
              </div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("email")}: {info.stdemail}{" "}
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
            <div className={"pt-5"}>
              <p
                className={
                  " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                }
              >
                {t("subtitle")}
              </p>
            </div>
            <div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("sdate")}:{" "}
                    {info.startdate ? info.startdate.split("T")[0] : ""}
                  </span>
                </div>
                <div className="w-1/2">
                  <span>
                    {t("days")}: {info.duration}
                  </span>
                </div>
              </div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("edate")}: {info.enddate ? info.enddate.split("T")[0] : ""}
                </span>
              </div>
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
                  {t("orgemail")}: {info.compemail}
                </span>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("website")}: {info.website}
                </span>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("address")}: {info.compaddress}
                </span>
              </div>

              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <span>
                  {t("phone")}: {info.compphone}
                </span>
              </div>
            </div>
            <div className={"pt-5"}>
              <p
                className={
                  " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                }
              >
                {t("sub")}
              </p>
            </div>

            <div>
              <div className="mt-2 md:mt-4 relative flex space-x-2">
                <div className="w-1/2">
                  <span>
                    {t("name")}: {info.supfname} {info.suplname}
                  </span>
                </div>
                <div className="w-1/2">
                  <span>
                    {t("pos")}: {info.position}
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
                    {t("sgk")}: {info.sgk}
                  </span>
                </div>
              </div>

              <div className={"pt-5"}>
                <p
                  className={
                    " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("stdinfo")}
                </p>
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
                      {t("fname")}: {info.fname}{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div className="w-1/2">
                    <span>
                      {t("mname")}: {info.mname}
                    </span>
                  </div>

                  <div className="w-1/2">
                    <span>
                      {t("pob")}: {info.pob}{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div className="w-1/2">
                    <span>
                      {t("dob")}: {info.dob.split("T")[0]}
                    </span>
                  </div>
                  <div className="w-1/2">
                    <span>
                      {t("idpass")}: {info.idpassno}{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div className="w-1/2">
                    <span>
                      {t("doi")}: {info.doi.split("T")[0]}{" "}
                    </span>
                  </div>

                  <div className="w-1/2">
                    <span>
                      {t("validity")}: {info.validity}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex align-right mt-2">
                <button
                  className="bg-blue text-white px-3 py-1 mt-2 rounded"
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
                Have you recieved the hard copy of this form and all necessary
                attached documents?
              </p>
            </div>
            <div className="flex justify-between mt-2 w-10/12">
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => push()}
              >
                No
              </button>
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={confirmInsurance}
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
              <p>Social Insurance Confirmed</p>
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
