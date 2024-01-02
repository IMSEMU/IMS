import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import AuthConnect from "@/auth";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  FailedToast,
  SuccessToast,
} from "../../globalComponents/toastNotifications";
import Modal from "../../globalComponents/modal";

export const SignupSection = ({ loginToogle }) => {
  const t = useTranslations("Signup Page");
  const [stdid, setStdid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [toastStatus, setToastStatus] = useState();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupnewuser = async (e) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/register", {
        stdid: stdid,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confPassword: confPassword,
      });

      if (response) {
        setSuccess(true);
        setToastStatus(true);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.msg === "1") {
          setMsg(t("err1"));
        }
        if (error.response.data.msg === "2") {
          setMsg(t("err2"));
        }
        if (error.response.data.msg === "3") {
          setMsg(t("err3"));
        }
        if (error.response.data.msg === "4") {
          setMsg(t("err4"));
        }
      }
      setLoading(false);
      setToastStatus(false);
    }
  };

  return (
    <>
      <main className="w-full md:w-1/2 px-8 md:px-6 ">
        {/* div section */}
        <div className="from-left">
          <div className={"flex justify-center items-center"}>
            <Image
              width={90}
              height={90}
              src="/logo.svg"
              className="rounded-lg w-[4.5rem] h-[4.5rem] object-cover"
              alt="page img"
            />
          </div>

          <h2 className="mt-0.5 text-sm md:text-md lg:text-lg xl:text-xl font-bold text-center text-black dark:text-white">
            {t("title")}
          </h2>

          <div className="mt-2  text-sm md:text-md">
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={t("stdid")}
                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow border-x-0 border-t-0 mt-1 border-2 focus:outline-none"
                  value={stdid}
                  onChange={(e) => setStdid(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder={t("email")}
                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow border-x-0 border-t-0 mt-1 border-2 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <input
                  type={"text"}
                  name=""
                  id=""
                  placeholder={t("fname")}
                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>

              <div className="w-1/2">
                <input
                  type={"text"}
                  name=""
                  id=""
                  autoComplete="off"
                  placeholder={t("lname")}
                  className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-2 md:mt-4 relative">
              <input
                type={"password"}
                name=""
                id=""
                placeholder={t("Password")}
                className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-2 md:mt-4 relative">
              <input
                type={"password"}
                name=""
                id=""
                placeholder={t("confpass")}
                className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                required
              />

              <span
                className={
                  "bg-white dark:bg-dark_2 absolute p-0.5 md:p-1.5 text-[green] cursor-pointer bottom-2 right-4 text-xl"
                }
              >
                {password != "" && password === confPassword ? (
                  <MdVerifiedUser />
                ) : (
                  <div></div>
                )}
              </span>
            </div>

            <div
              className={
                "flex flex-wrap flex-row-reverse md:flex-row  justify-between my-2 text-center w-full"
              }
            >
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full md:w-fit  bg-blue hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded px-3 py-2 mt-5 ml-auto "
                onClick={signupnewuser}
              >
                <span>{t("Register")}</span>
              </button>
            </div>
          </div>

          <div className={"flex justify-center my-3 text-"}>
            <button
              onClick={() => loginToogle()}
              className="flex items-center gap-2 w-fit md:w-full justify-center  bg-blue text-white font-semibold rounded px-3 py-2 hover:scale-105  duration-300 ease-in-out"
            >
              <span className={"flex items-center gap-1"}>
                <VscSignIn /> {t("Loginbtn")}
              </span>
            </button>
          </div>
        </div>
        {toastStatus ? (
          <SuccessToast errorMssg={msg} setErrorMssg={setMsg} />
        ) : (
          <FailedToast errorMssg={msg} setErrorMssg={setMsg} />
        )}
{success && (
          <Modal onClick={() => loginToogle()}>
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold">
                <p>{t("success")}</p>
              </div>
              <button
                onClick={() => loginToogle()}
                className="bg-blue text-white px-3 py-1 mt-2"
              >
                {t("GoToLogin")}
              </button>
            </div>
          </Modal>
        )}
      </main>
    </>
  );
};
