"use client";

import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { show } from "../styleVariants";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

export const LanguageToggle = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const t = useTranslations("LocaleSwitcher");

  //   functions
  const showOptions = () => {
    setVisible(!visible);
  };

  const pathName = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (locale) => {
    const segments = pathName.split("/");
    if (locale != currentLocale) {
      if (locale === "tr") {
        segments[2] = segments[1];
      }
      segments[1] = locale;
      const newPath = segments.join("/");
      router.push(newPath);
    }
    setVisible(false);
  };
  return (
    <main
      className={
        "text-black dark:text-white text-sm md:text-md  flex items-end ml-2 relative cursor-pointer"
      }
    >
      <div onClick={showOptions} className={"flex"}>
        {t("label")}
        {visible ? (
          <BsFillCaretUpFill className={"mt-1 text-yellow"} />
        ) : (
          <BsFillCaretDownFill className={"mt-1 text-yellow"} />
        )}
      </div>

      {/*language options*/}

      <AnimatePresence>
        {visible && (
          <motion.div
            variants={show}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            className={
              "absolute  text-center rounded bg-white dark:bg-dark_2 border-background_shade border text-black dark:text-white"
            }
          >
            <ul className={"list-none"}>
              <li
                onClick={() => switchLocale("en")}
                className={
                  "cursor-pointer m-1 px-2.5 py-0.5 sm:px-3 sm:py-1 hover:bg-yellow_2 dark:hover:bg-dark_4 dark:hover:text-black rounded"
                }
              >
                EN
              </li>
              <li
                onClick={() => switchLocale("tr")}
                className={
                  "cursor-pointer m-1 px-2.5 py-0.5 sm:px-3 sm:py-1 hover:bg-yellow_2 dark:hover:bg-dark_4 dark:hover:text-black rounded"
                }
              >
                TR
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
