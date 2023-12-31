import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Modal from "../../globalComponents/modal";
import PdfViewer from "../../globalComponents/pdfViewer";
import Loading from "../../globalComponents/loading";

export const ConFormView = () => {
  const t = useTranslations("conformview");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [info, setInfo] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [reject, setReject] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

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

  const confirmConfirmation = async (e) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/confirmcon", {
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

  const rejectConfirmation = async (e) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/rejectcon", {
        stdid: stdid,
      });
      if (response) {
        setLoading(false);
        setRejected(true);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error"); // You can add a generic error message here
    }
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
            <div className="mt-2 md:mt-4">
              <PdfViewer docSrc={info.docsrc} />
            </div>

            <div className="flex justify-between mt-2">
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => setReject(true)}
              >
                {t("Reject")}
              </button>
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={() => setConfirm(true)}
              >
                {t("Confirm")}
              </button>
            </div>
          </div>
        </div>
      </section>
      {confirm && (
        <Modal onClose={() => setConfirm(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>
                {t("ConfirmMsg")}
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
              <p>{t("Confirmed")}</p>
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
                {t("RejectMsg")}
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
              <p>{t("Rejected")}</p>
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
