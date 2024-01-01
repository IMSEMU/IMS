import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import DocumentViewer from "../../globalComponents/docViewer";
import { CoordinatorEvaluation } from "./coordinatorEvaluation";

export const ReportView = () => {
  const t = useTranslations("reportview");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [info, setInfo] = useState(null);
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
    </main>
  );
};
