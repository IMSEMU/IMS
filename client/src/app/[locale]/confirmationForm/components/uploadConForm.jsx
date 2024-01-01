import React from "react";
import { useTranslations } from "next-intl";
import { CldUploadWidget } from "next-cloudinary";

const UploadConForm = ({ handleDocUploadSuccess }) => {
  const t = useTranslations("upConForm");

  return (
    <main>
      <div className="from-left bg-white dark:bg-dark_2 p-5 rounded shadow-xl dark:border-none border border-background_shade_2 mx-2 md:mx-auto w-full md:w-[30rem] lg:w-[40rem] h-fit pb-10">
        <div className="w-full">
          <h2
            className={
              " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center px-2"
            }
          >
            {t("sign")}
          </h2>
        </div>
        <div className="w-full">
          <div className="mt-2 md:mt-4 relative flex space-x-2">
            <span className="pt-2">{t("conform")}</span>
            <CldUploadWidget
              uploadPreset="p5tgbjfx"
              onSuccess={handleDocUploadSuccess}
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
                    {t("Upload")}
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        </div>
      </div>
    </main>
  );
};
export default UploadConForm;
