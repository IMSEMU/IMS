'use client'
import {FaArrowRight} from "react-icons/fa6";
import {motion} from "framer-motion";
import { useTranslations } from "next-intl";

export const AnimatedButton = () => {
  const t = useTranslations("globalComponents");
  return(
      <main className={'inline-flex'}>

          <motion.div
              className={'flex bg-blue p-2  items-center rounded gap-2'}
              initial={{scale:0}}
              whileInView={{scale:1}}
              viewport={{ once: true }}
              transition={{duration:.6}}
          >
            <motion.span initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{delay:.8,duration:.9,}} className={'text-sm md:text-md text-white dark:text-background_shade_2 font-semibold'}>
            {t("ShowMore")}
            </motion.span>

            <motion.button
                className={'p-1.5 bg-white text-blue dark:bg-background_shade_2  rounded text-md'}
              initial={{x:-85}}
              whileInView={{x:0}}
              viewport={{ once: true }}
              transition={{delay:.6,duration:1, type:'spring'}}
            >
                <FaArrowRight />
            </motion.button>

          </motion.div>

      </main>
  )
}