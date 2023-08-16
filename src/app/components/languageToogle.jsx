'use client'

import {BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";
import {AnimatePresence, motion} from "framer-motion";
import {show} from "@/app/styleVariants";
import {useState} from "react";

export const LanguageToogle = () => {

    const [visible, setVisible] = useState(false)

  //   functions
    const showOptions = () => {
      setVisible(!visible);
    }

  return(
      <main className={"prevent-select flex items-end ml-2 relative cursor-pointer"}>

          <div onClick={showOptions} className={"flex"}>
            EN
              {visible  ? <BsFillCaretUpFill className={"mt-1 text-yellow"}/> : <BsFillCaretDownFill className={"mt-1 text-yellow"}/>}
          </div>

          {/*language options*/}

          <AnimatePresence>
              { visible && (
              <motion.div
                  variants={show}
                  initial={"initial"}
                  animate={"animate"}
                  exit={"exit"}
                  className={"absolute  text-center rounded bg-white border-background_shade border"}>

                  <ul className={"list-none"}>
                    <li className={"cursor-pointer m-1 px-3 py-1 hover:bg-yellow_2 rounded"}>EN</li>
                    <li className={"cursor-pointer m-1 px-3 py-1 hover:bg-yellow_2 rounded"}>TR</li>
                  </ul>

              </motion.div>
              )}
          </AnimatePresence>
      </main>
  );
}