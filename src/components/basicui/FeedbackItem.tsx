import {motion} from "framer-motion";
import {RiDoubleQuotesL} from "react-icons/ri";

export interface FeedBackItemProps {
  feedbackText: string;
  name_surname: string;
  position: string;
  imageUrl: string;
}

function FeedBackItem({feedbackText, imageUrl, name_surname, position}: FeedBackItemProps) {
  return (
    <li
      className="w-full relative flex flex-col gap-y-4 items-center border border-[#F9C06A]/40 bg-[#FFF9F1] px-16 pt-4 pb-24">
      <motion.div
        className="self-start"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring", delay: 0.7}}
        viewport={{once: true}}
      >
        <RiDoubleQuotesL className="text-8xl -translate-x-1/2"/>
      </motion.div>
      <motion.span
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring", delay: 0.8}}
        viewport={{once: true}}
        className="text-center text-common-text"
      >
        {feedbackText}
      </motion.span>
      <motion.span
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring", delay: 0.9}}
        viewport={{once: true}}
        className="text-3xl font-bold text-coffee"
      >
        {name_surname}
      </motion.span>
      <motion.span
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring", delay: 1}}
        viewport={{once: true}}
        className="text-common-text"
      >
        {position}
      </motion.span>
      <motion.div
        initial={{opacity: 0, rotateZ: 15, y: -30}}
        whileInView={{opacity: 1, rotateZ: 0, y: 0}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
        className="absolute aspect-square h-32 bottom-0 translate-y-1/2"
      >
        <img className="w-full h-full" src={`./${imageUrl}`} alt={`${imageUrl}`}/>
      </motion.div>
    </li>
  )
}

export default FeedBackItem;