import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import AuthConnect from "@/auth";

export const LogView = ({ formToggle, stdid }) => {
  const t = useTranslations("logbook");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [logbook, setLogbook] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [reject, setReject] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [msg, setMsg] = useState("");

  // const stdid = searchParams.get("stdid");
  // const id = searchParams.get("id");

  useEffect(() => {
    const fetchStudentLogbook = async () => {
      const response = await AuthConnect.post("/viewlogdept", {
        stdid: stdid,
      });
      console.log(response.data);
      setLogbook(response.data);
    };
    fetchStudentLogbook();
  }, []);
  if (!logbook) {
    return null;
  }

  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="border-x-[0.4rem] text-2xl border-yellow">
          <p className="px-2">{t("title")}</p>
        </div>
      </div>
      <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
        <div className="from-left bg-white dark:bg-dark_2 p-5 rounded shadow-xl dark:border-none border border-background_shade_2 w-[50rem] lg:w-[50rem] h-fit pb-10">
          <div className="w-full">
            <table
              className={
                " p-2 text-xs sm:text-sm md:text-base xl:text-lg w-full mt-4 z-0 table-fixed"
              }
            >
              <thead>
                <tr>
                  <th
                    className={
                      "bg-blue text-white p-[1rem] border border-white"
                    }
                  >
                    {t("day")}
                  </th>
                  <th
                    className={
                      "bg-blue text-white p-[1rem] border border-white"
                    }
                  >
                    {t("date")}
                  </th>
                  <th
                    className={
                      "bg-blue text-white p-[1rem] border border-white"
                    }
                  >
                    {t("dept")}
                  </th>
                  <th
                    className={
                      "bg-blue text-white p-[1rem] border border-white w-5/12"
                    }
                  >
                    {t("desc")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {logbook.map((entry) => (
                  <tr
                    className={
                      "odd:bg-yellow_2 even:text-black dark:odd:bg-background_shade_2 dark:even:text-white"
                    }
                    key={entry.logid}
                  >
                    <td className={"text-center p-[0.875rem]"}>{entry.day}</td>
                    <td className={"text-center p-[0.875rem]"}>
                      {entry.date.split("T")[0]}
                    </td>
                    <td className={"text-center p-[0.875rem]"}>
                      {entry.department}
                    </td>
                    <td className={"text-center p-[0.875rem]"}>
                      {entry.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-2">
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-right rounded ml-auto"
                onClick={formToggle}
              >
                {t("CSEval")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LogView;
