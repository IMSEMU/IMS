import { CldUploadWidget } from "next-cloudinary";
import AuthConnect from "@/auth";
import { useState } from "react";
import Modal from "../../globalComponents/modal";
import { useRouter } from "next/navigation";

export const ReportSubmit = () => {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [msg, setMsg] = useState("");

  const handleDocUploadSuccess = async (result) => {
    if (result.event === "success") {
      const url = result.info.secure_url;
      try {
        const response = await AuthConnect.post("/savereport", {
          docSrc: url,
        });

        if (response) {
          setConfirmed(true);
        }
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
          alert("Application Error"); // You can add a generic error message here
        }
      }
    }
  };

  const push = () => {
    router.push("/internDashboard");
  };
  return (
    <main className=" bg-white justify-center dark:bg-dark_1  ">
      <div className="justify-center flex my-5">
        <p className=" text-center border-x-[0.4rem] px-2 font-bold border-yellow justify-center text-2xl dark:text-white ">
          Report Submission
        </p>
      </div>

      <div className=" flex justify-center mx-5 ">
        <div className="from-left bg-white dark:bg-dark_2 p-5 rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-fit pb-10">
          <div className="w-full">
            <h2
              className={
                " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center px-2"
              }
            >
              Please upload your report here(.doc, .docx)
            </h2>
          </div>
          <div className="w-full">
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span className="pt-2">Report: </span>
              <CldUploadWidget
                uploadPreset="p5tgbjfx"
                onSuccess={handleDocUploadSuccess}
                resourceType="raw"
              >
                {({ open }) => {
                  function handleOnClick(e) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <button
                      className="bg-blue py-2 px-3.5 rounded text-white"
                      onClick={handleOnClick}
                    >
                      Upload Report
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
        </div>
      </div>
      {confirmed && (
        <Modal onClose={() => push()}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>Report Submitted</p>
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
