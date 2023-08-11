import {motion} from "framer-motion";
import {bounce} from "@/app/styleVariants";

export const Loading = () => {
  return(
      <>
        <main className={"flex justify-center w-[25rem]"}>
            <div className={"bg-yellow h-4 w-4 rounded m-2"}></div>
            <motion.div
                variants={bounce}
                initial={"initial"}
                animate={"animate"}
                className={"bg-blue h-4 w-4 rounded m-2"}>
            </motion.div>
            <div className={"bg-yellow h-4 w-4 rounded m-2"}></div>
        </main>
      </>
  )
}