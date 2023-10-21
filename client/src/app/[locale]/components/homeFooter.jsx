"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HomeFooter = () => {
  const t = useTranslations("Home Footer");
  const sitemap = [
    { name: t("Homepage"), link: "/" },
    { name: t("News and Announcements"), link: "/" },
    { name: t("Completed Internships"), link: "/completedInternship" },
    { name: t("Available Internship Positions"), link: "/internshipPositions" },
  ];
  const usefulLinks = [
    { name: t("EMU Official Website"), link: "https://www.emu.edu.tr/" },
    { name: t("Student Portal"), link: "https://students.emu.edu.tr/" },
    {
      name: t("LMS"),
      link: "https://lms22-23spring.emu.edu.tr/login/index.php",
    },
    { name: t("Staff Portal"), link: "https://staff.emu.edu.tr/" },
  ];
  return (
    <>
      <main
        className={
          "remove-highlight text-xs sm:text-sm md:text-md  w-full bg-background_shade_2 "
        }
      >
        <div
          className={
            "px-3 py-6 w-full max-w-[70.75rem] mx-auto flex-col md:flex-row flex justify-evenly gap-6"
          }
        >
          {/*sitemap*/}
          <div className={"flex-col flex text-center"}>
            <p
              className={
                "text-sm sm:text-md md:text-lg text-blue my-2 md:my-1 font-bold"
              }
            >
              {t("sitemap")}
            </p>

            {sitemap.map((sitemap, index) => {
              return (
                <>
                  <Link
                    href={sitemap.link}
                    key={index}
                    className={"my-2 hover:text-yellow"}
                  >
                    {sitemap.name}
                  </Link>
                </>
              );
            })}
          </div>

          {/*sitemap*/}
          <div className={"flex-col flex text-center"}>
            <p
              className={
                "my-2 md:my-1 font-bold text-sm sm:text-md md:text-lg text-blue "
              }
            >
              {t("useful links")}
            </p>

            {usefulLinks.map((usefulLinks, index) => {
              return (
                <>
                  <Link
                    href={usefulLinks.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className={"my-2 hover:text-yellow"}
                  >
                    {usefulLinks.name}
                  </Link>
                </>
              );
            })}
          </div>

          {/*sitemap*/}
          <div
            className={"flex-col flex justify-center items-center text-center"}
          >
            {/*<p className={"my-2 md:my-1 font-bold"}>Contact</p>*/}
            <Image
              className={"w-[2.2rem] md:w-[2.8rem]"}
              src={"/logo.svg"}
              alt={"logo"}
              height={100}
              width={100}
              priority
            />
            <p className={"font-semibold"}>{t("EMU")}</p>
            <p className={"font-normal"}>{t("address1")}</p>
            <p className={"font-normal"}>{t("address2")}</p>

            <div className={"my-2 flex flex-col"}>
              <a
                href="tel:+903926301111"
                className={"font-normal text-blue hover:text-yellow"}
              >
                Tel: +90 392 630 11 11
              </a>
              <a
                href="mailto:info@emu.edu.tr"
                className={"font-normal text-blue hover:text-yellow"}
              >
                E-mail: info@emu.edu.tr
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
