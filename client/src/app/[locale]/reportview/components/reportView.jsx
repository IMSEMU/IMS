import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Modal from "../../globalComponents/modal";
import DocumentViewer from "../../globalComponents/docViewer";
import PdfViewer from "../../globalComponents/pdfViewer";
import { CoordinatorEvaluation } from "./coordinatorEvaluation";

export const ReportView = () => {
  const t = useTranslations("reportview");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [info, setInfo] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [reject, setReject] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState(true);

  const stdid = searchParams.get("stdid");
  const intid = searchParams.get("id");

  useEffect(() => {
    const fetchStudentById = async () => {
      const response = await AuthConnect.get(
        `/getinternship/${stdid}/${intid}`
      );
      console.log(response.data);
      setInfo(response.data);
    };
    fetchStudentById();
  }, []);
  if (!info) {
    return null;
  }
  const push = () => {
    router.push("/departmentDashboard");
  };

  const rejectConfirmation = async (e) => {
    try {
      const response = await AuthConnect.post("/rejectcon", {
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

  const downloadFile = (src) => {
    const link = document.createElement("a");
    link.href = src;
    const filename = src.substring(src.lastIndexOf("/") + 1);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formToggle = () => {
    setForm(!form);
  };

  return (
    <main>
      {form ? (
        <div>
          <div className="my-1 flex justify-center items-center font-bold pt-5">
            <div className="border-x-[0.4rem] text-2xl border-yellow">
              <p className="px-2">{t("Report")}</p>
            </div>
          </div>
          <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
            <div className="from-left bg-white dark:bg-dark_2 p-5 rounded shadow-xl dark:border-none border border-background_shade_2 w-[45rem] lg:w-[45rem] h-fit pb-10">
              <div className=" w-full ">
                <div className="mt-2 md:mt-4 justify-center pl-4">
                  <DocumentViewer docSrc={info.reportDocSrc} />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => downloadFile(info.reportDocSrc)}
                    className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                  >
                    {t("Download")}
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                    onClick={formToggle}
                  >
                    {t("DEvaluationForm")}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <CoordinatorEvaluation formToggle={formToggle} stdid={stdid} />
      )}
      {confirm && (
        <Modal onClose={() => setConfirm(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>
              {t("InternshipConfirmation")}
              </p>
            </div>
            <div className="flex justify-between mt-2 w-10/12">
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => setConfirm(false)}
              >
                {t("No")}
              </button>
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={confirmConfirmation}
              >
                {t("Yes")}
              </button>
            </div>
          </div>
        </Modal>
      )}
      {confirmed && (
        <Modal onClose={() => push()}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("InternshipConfirmed")}</p>
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
      {reject && (
        <Modal onClose={() => setConfirm(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>
              {t("rejectIC")}
              </p>
            </div>
            <div className="flex justify-between mt-2 w-10/12">
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => setReject(false)}
              >
                {t("No")}
              </button>
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={rejectConfirmation}
              >
                {t("Yes")}
              </button>
            </div>
          </div>
        </Modal>
      )}
      {rejected && (
        <Modal onClose={() => push()}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("ICRejected")}</p>
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
