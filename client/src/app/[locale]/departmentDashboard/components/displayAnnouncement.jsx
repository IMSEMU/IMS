"use client";
import { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { GiPencil, GiTrashCan } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { Empty } from "antd";
import Modal from "../../globalComponents/modal";
import AuthConnect from "@/auth";

export const DisplayAnnouncement = ({ announcements, updateAnnouncements }) => {
  const t = useTranslations("dashDep");
  const [hideOptions, setHideOptions] = useState(
    Array(announcements.length).fill(false)
  );
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [announcementToShow, setAnnouncementToShow] = useState(null);
  const [editAnnouncement, setEditAnnouncement] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [announcementID, setAnnouncementID] = useState("");
  const [edited, setEdited] = useState(false);
  const [deleteAnnouncement, setDeleteAnnouncement] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [msg, setMsg] = useState("");

  const toggleOptions = (index) => {
    setHideOptions((prevHideOptions) => {
      const newHideOptions = [...prevHideOptions];
      newHideOptions[index] = !newHideOptions[index];
      return newHideOptions;
    });

    setSelectedAnnouncement(hideOptions[index] ? null : index);
  };

  const closeOptions = () => {
    if (selectedAnnouncement !== null) {
      setHideOptions((prevHideOptions) => {
        const newHideOptions = [...prevHideOptions];
        newHideOptions[selectedAnnouncement] = false;
        return newHideOptions;
      });

      setSelectedAnnouncement(null);
    }
  };

  const ShowAnnouncement = (announcement) => {
    setAnnouncementToShow(announcement);
  };

  const EditAnnouncement = (announcement) => {
    setEditAnnouncement(true);
    setAnnouncementID(announcement.announcementid);
    setAnnouncementTitle(announcement.title);
    setAnnouncementContent(announcement.content);
  };

  const DeleteAnnouncement = (announcement) => {
    setDeleteAnnouncement(true);
    setAnnouncementID(announcement.announcementid);
  };

  const SendEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/editannouncement", {
        id: announcementID,
        title: announcementTitle,
        content: announcementContent,
      });
      if (response) {
        const updatedAnnouncements = announcements.map((announcement) =>
          announcement.announcementid === announcementID
            ? {
                ...announcement,
                title: announcementTitle,
                content: announcementContent,
              }
            : announcement
        );

        updateAnnouncements(updatedAnnouncements);
        setEditAnnouncement(false);
        setAnnouncementToShow(null);
        setEdited(true);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.msg === "1") {
          setMsg(t("err1"));
        }
        if (error.response.data.msg === "2") {
          setMsg(t("err2"));
        }
      }
    }
  };

  const SendDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/deleteannouncement", {
        id: announcementID,
      });
      if (response) {
        const updatedAnnouncements = announcements.filter(
          (announcement) => announcement.announcementid !== announcementID
        );

        updateAnnouncements(updatedAnnouncements);
        setDeleteAnnouncement(false);
        setAnnouncementToShow(null);
        setDeleted(true);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.msg === "1") {
          setMsg(t("err1"));
        }
        if (error.response.data.msg === "2") {
          setMsg(t("err2"));
        }
      }
    }
  };

  return (
    <main onClick={closeOptions}>
      <div className="m-4 rounded h-fit overflow-hidden">
        <div className=" flex justify-center flex-wrap">
          {announcements.length === 0 ? (
            <div className=" font-semibold text-lg text-center text-white">
              <Empty />
            </div>
          ) : (
            announcements.map((announcement, index) => (
              <div
                key={announcement.announcementid}
                className="cursor-pointer mx-1 py-2 my-1 bg-white drop-shadow-md border-background_shade_2 hover:bg-blue hover:text-white border text-black dark:bg-dark_4 dark:text-black w-full flex items-center justify-between rounded"
                onClick={() => {
                  ShowAnnouncement(announcement);
                }}
              >
                <div className="ml-2  flex flex-wrap gap-1 w-fit">
                  <div className="p-3 text-white bg-blue text-xl rounded">
                    <BsMegaphoneFill />
                  </div>
                </div>

                <div
                  className={"truncate justify-start items-center gap-1 pl-3"}
                >
                  <p className={"font-semibold capitalize "}>
                    {announcement.title}
                  </p>
                  <span className={"truncate text-sm lg:text-md"}>
                    {announcement.content}
                  </span>
                </div>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOptions(index);
                  }}
                  className="relative text-black text-xl mr-2.5"
                >
                  <FaEllipsisV className=" cursor-pointer" />

                  {/* options */}
                  {hideOptions[index] && (
                    <div className="from-left absolute text-black -right-2 -top-[1.1rem] h-fit border border-background_shade_2 rounded w-[5rem] bg-white">
                      <div className="relative">
                        <div
                          className="m-0.5 p-0.5 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5 hover:bg-b hover:bg-background_shade"
                          onClick={() => DeleteAnnouncement(announcement)}
                        >
                          <GiTrashCan className="text-xl text-yellow" />
                          <p>{t("Delete")}</p>
                        </div>

                        <div
                          className="m-0.5  p-0.5 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5  hover:bg-background_shade"
                          onClick={() => EditAnnouncement(announcement)}
                        >
                          <GiPencil className="text-xl text-yellow" />
                          <p>{t("Edit")}</p>
                        </div>
                        <span
                          className="absolute p-[0.1rem] cursor-pointer text-lg top-[1rem] bg-white rounded -left-6"
                          onClick={() => {
                            closeOptions();
                          }}
                        >
                          <BiChevronsRight className="text-yellow" />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {announcementToShow && (
        <Modal onClose={() => setAnnouncementToShow(null)}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className="w-full flex justify-end">
                <button
                  className={
                    "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                  }
                  onClick={() => EditAnnouncement(announcementToShow)}
                >
                  <GiPencil className={"text-white text-md"} />
                  <div>{t("Edit")}</div>
                </button>
                <button
                  className={
                    "ml-5 px-2 py-1 bg-red text-white rounded inline-flex items-center justify-center gap-1"
                  }
                  onClick={() => DeleteAnnouncement(announcementToShow)}
                >
                  <GiTrashCan className="text-md text-white" />
                  <div>{t("Delete")}</div>
                </button>
              </div>
              <div className={"w-full mb-3"}>
                <p
                  className={
                    " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {announcementToShow.title}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/*  description section */}
                  <div className="w-[90%]">
                    <p className="rounded p-3 outline-none w-full border border-dark_4 dark:bg-background_shade_2 text-dark_2">
                      {announcementToShow.content}
                    </p>
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={() => setAnnouncementToShow(null)}
                    >
                      <div>{t("Close")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {editAnnouncement && (
        <Modal onClose={() => setEditAnnouncement(false)}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className={"w-full mb-3"}>
                <p
                  className={
                    " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("EditAnnouncement")}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={t("Title")}
                      type="text"
                      value={announcementTitle}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setAnnouncementTitle(e.target.value)}
                    />
                  </div>
                  {/*  description section */}
                  <div className="w-[90%]">
                    <textarea
                      placeholder={t("AnnouncementContent")}
                      value={announcementContent}
                      className=" resize-none rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[10rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setAnnouncementContent(e.target.value)}
                    />
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={SendEdit}
                    >
                      <GiPencil className={"text-white text-xl"} />
                      <div>{t("Edit")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {edited && (
        <Modal onClose={() => setEdited(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("EditAnnouncementMsg")}</p>
            </div>
            <button
              onClick={() => setEdited(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {deleteAnnouncement && (
        <Modal onClose={() => setDeleteAnnouncement(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("delAnn")}</p>
            </div>
            <div className="flex justify-between mt-2 w-10/12">
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => setDeleteAnnouncement(false)}
              >
                {t("No")}
              </button>
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={SendDelete}
              >
                {t("Yes")}
              </button>
            </div>
          </div>
        </Modal>
      )}
      {deleted && (
        <Modal onClose={() => setDeleted(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("delAnnMsg")}</p>
            </div>
            <button
              onClick={() => setDeleted(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {msg && (
        <Modal onClose={() => setMsg("")}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{msg}</p>
            </div>
            <button
              onClick={() => setMsg("")}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
