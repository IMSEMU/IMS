"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { DarkModeButton } from "../../globalComponents/darkModeButton";
import AuthConnect from "@/auth";
import Modal from "../../globalComponents/modal";
import { useTranslations } from "next-intl";

export default function ResetPassword() {
  const t = useTranslations("resetpassword");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await AuthConnect.post("/forgotpassword", { email: email }).then(
        (response) => {
          if (response.data.status === "success") {
            setSuccess(true);
          }
        }
      );
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        setFailure(true);
      }
    }
  };

  return (
    <main className={"max-h-screen"}>
      <Link href="/">
        <div className="absolute bg-white p-2 shadow-md border border-background_shade_2 dark:border-dark_2 dark:border-0 dark:bg-dark_2 inline-flex items-center gap-1 text-blue dark:text-yellow top-4 rounded left-4 md:left-7">
          <FaHome />
        </div>
      </Link>

      <div className="absolute top-4 rounded right-1 md:right-7">
        <DarkModeButton />
      </div>

      <section className="p-2 bg-white dark:bg-dark_1 min-h-screen flex items-center justify-center">
        <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 max-w-[30rem] md:max-w-full w-[60rem] h-[35rem]">
          {/* Image section */}
          <div className="w-1/2 md:block hidden mr-2">
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className=" rounded-lg w-full h-full object-cover"
              alt="page img"
            />
          </div>

          {/* Form section */}
          <div className="w-full md:w-1/2 px-8 md:px-6 my-1 md:my-4">
            <div className="flex justify-center items-center my-2">
              <Image
                width={90}
                height={90}
                src="/logo.svg"
                className="rounded-lg w-[4.5rem] h-[4.5rem] object-cover"
                alt="page img"
              />
            </div>

            <h2 className="text-sm md:text-md lg:text-lg xl:text-xl font-bold text-center text-black dark:text-white">
            {t("ResetPassword")}
            </h2>

            <form className="mt-2 md:mt-6 text-sm md:text-md" onSubmit={Auth}>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder={t("emailexa")}
                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-2 border-2  focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div
                className={
                  "flex flex-wrap flex-row-reverse md:flex-row md:flex-nowrap justify-between my-3 text-center"
                }
              >
                <button
                  type="submit"
                  className="flex items-center gap-2 w-fit  bg-blue hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded px-3 py-2 mt-7"
                >
                  <span>{t("SendResetLink")}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {success && (
        <Modal onClose={() => setSuccess(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("linksent")}</p>
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {failure && (
        <Modal onClose={() => setFailure(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{error}</p>
            </div>
            <button
              onClick={() => setFailure(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}
