import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthConnect from "@/auth";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ConfirmationModal from "./confimationModal";
import Modal from "../../globalComponents/modal";

export const AppForm = (props) => {
  const t = useTranslations("iaf");
  const [stdphoneno, setStdPhone] = useState("");
  const [stdaddress, setStdAddress] = useState("");
  const [companyname, setCompname] = useState("");
  const [fields, setFields] = useState("");
  const [website, setWebsite] = useState("");
  const [compemail, setCompEmail] = useState("");
  const [compaddress, setCompAddress] = useState("");
  const [compphone, setCompPhone] = useState("");
  const [compfax, setCompFax] = useState("");
  const [workdesc, setWorkdesc] = useState("");
  const [supfname, setFname] = useState("");
  const [suplname, setLname] = useState("");
  const [supemail, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [hasValidationError, setHasValidationError] = useState(false);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    stdid: "",
    stdphoneno: "",
    stdaddress: "",
    companyname: "",
    fields: "",
    website: "",
    compemail: "",
    compaddress: "",
    compphone: "",
    compfax: "",
    workdesc: "",
    supfname: "",
    suplname: "",
    supemail: "",
    position: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      stdphoneno === "" ||
      stdaddress === "" ||
      companyname === "" ||
      fields === "" ||
      website === "" ||
      compemail === "" ||
      compaddress === "" ||
      compphone === "" ||
      compfax === "" ||
      workdesc === "" ||
      supfname === "" ||
      suplname === "" ||
      supemail === "" ||
      position === ""
    ) {
      setHasValidationError(true);
      return;
    }

    setFormData({
      fname: props.firstname,
      lname: props.lastname,
      email: props.email,
      stdid: props.stdid,
      stdphoneno: stdphoneno,
      stdaddress: stdaddress,
      companyname: companyname,
      fields: fields,
      website: website,
      compemail: compemail,
      compaddress: compaddress,
      compphone: compphone,
      compfax: compfax,
      workdesc: workdesc,
      supfname: supfname,
      suplname: suplname,
      supemail: supemail,
      position: position,
    });
    setIsConfirmationModalOpen(true);
  };

  const handleBackToForm = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleInputChange = (event) => {
    setCompname(event.target.value);
    setIsDropdownOpen(true);
  };

  const handleSelectOption = (company) => {
    setCompname(company);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setImageSrc("/avatar.png");
    }
  };

  const submitApplication = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/createapp", {
        stdphoneno: stdphoneno,
        stdaddress: stdaddress,
        companyname: companyname,
        fields: fields,
        website: website,
        compemail: compemail,
        compaddress: compaddress,
        compphone: compphone,
        compfax: compfax,
        workdesc: workdesc,
        supfname: supfname,
        suplname: suplname,
        supemail: supemail,
        position: position,
      });
      alert("Application Successful");
      router.push("/internDashboard");
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
        <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-fit pb-10">
          {/* LOgbook Add section */}
          <div className=" w-full">
            <p
              className={
                " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("stdinfo")}
            </p>
            {/* profile pic */}
            <div className="w-full flex justify-center mt-1">
              <Image
                src={imageSrc ? imageSrc : "/avatar.png"}
                width={1000}
                height={1000}
                alt=""
                priority
                className="h-[7rem] w-[7rem] rounded-2xl"
              />
            </div>

            {/* forms */}
            <form>
              <div className="mx-4 lg:mx-16">
                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div className="w-1/2">
                    <span>
                      {t("name")}: {props.firstname} {props.lastname}{" "}
                    </span>
                  </div>

                  <div className="w-1/2">
                    <span>
                      {t("stdid")}: {props.stdid}{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div>
                    <span>
                      {t("email")}: {props.email}{" "}
                    </span>
                  </div>
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("phone")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    value={stdphoneno}
                    onChange={(e) => setStdPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("address")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    value={stdaddress}
                    onChange={(e) => setStdAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <input
                    type={"file"}
                    name=""
                    accept=".png, .jpg, .jpeg"
                    onChange={handleFileChange}
                    id=""
                    placeholder="profile Picture"
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white file:text-blue file:font-bold file:bg-white file:border file:rounded dark:bg-dark_2 pr-4 py-0.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    required
                  />
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
              <div className="mx-4 lg:mx-16">
                <div className="mt-2">
                  <div className="relative flex">
                    <input
                      type="text"
                      value={companyname}
                      onChange={handleInputChange}
                      placeholder={t("compname")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className={"mt-1 text-yellow"}
                    >
                      ▼
                    </button>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-[30rem] mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                      <ul className="py-1">
                        {props.companies
                          .filter((company) =>
                            company.name.includes(companyname)
                          )
                          .map((company) => (
                            <li
                              key={company.name}
                              className="px-4 py-2 hover:bg-black/25 cursor-pointer"
                              onClick={() => handleSelectOption(company.name)}
                            >
                              {company.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("work")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    value={fields}
                    onChange={(e) => setFields(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("website")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <input
                    type={"email"}
                    name=""
                    id=""
                    placeholder={t("orgemail")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    value={compemail}
                    onChange={(e) => setCompEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("address")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    value={compaddress}
                    onChange={(e) => setCompAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div className="w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("phone")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                      value={compphone}
                      onChange={(e) => setCompPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("fax")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                      value={compfax}
                      onChange={(e) => setCompFax(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div className="w-full">
                    <textarea
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("desc")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow rounded mt-1 border-2  focus:outline-none h-[8rem]"
                      value={workdesc}
                      onChange={(e) => setWorkdesc(e.target.value)}
                      required
                    />
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

              <div className="mx-4 lg:mx-16 ">
                <div className="mt-2 md:mt-4 relative flex space-x-2">
                  <div className="w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("fname")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                      value={supfname}
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("lname")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                      value={suplname}
                      onChange={(e) => setLname(e.target.value)}
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
                      placeholder={t("email")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                      value={supemail}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("pos")}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-end text-white pt-10">
                  <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="bg-blue py-2 px-3.5 rounded "
                  >
                    {t("submit")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {isConfirmationModalOpen && (
        <ConfirmationModal
          onClose={handleBackToForm}
          onConfirm={submitApplication}
          formData={formData} // Pass the form data to the modal
        />
      )}
      {hasValidationError && (
        <Modal onClose={() => setHasValidationError(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>Please fill in all required fields.</p>
            </div>
            <button
              onClick={() => setHasValidationError(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
