import { motion } from "framer-motion";
import Button from "../basicui/Button.tsx";

function SubscribeBlock() {
  return (
    <section className="flex flex-col gap-y-8 justify-between items-center px-[var(--sides-offset)] relative py-20">
      <motion.h1
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{once: true}}
        className="text-5xl text-white font-bold text-center leading-16"
      >Subscribe to get the Latest News</motion.h1>
      <motion.h2
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{once: true}}
        className="text-xl font-light text-white text-center"
      >Don’t miss out on our latest news, updates, tips and special</motion.h2>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{once: true}}
        className="flex flex-row bg-white rounded overflow-hidden w-full max-w-[450px]"
      >
        <input className="w-full px-4" type="text" placeholder="Enter your email"/>
        <Button className="rounded-sm rounded-r-none font-bold text-xl">
          Subscribe
        </Button>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img className="h-full w-full object-cover" src="./coffee-image-bg.png" alt="coffee-image-bg"/>
      </div>

      <motion.div
        initial={{opacity: 0, y: -100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{once: true}}
        className="absolute bottom-0 left-0 z-10"
      >
        <img className="h-32 md:h-64 lg:h-72 translate-y-1/3" src="./coffee-burst-left.png" alt="coffee-burst-left"/>
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{once: true}}
        className="absolute bottom-0 right-0 z-10"
      >
        <img className="h-32 md:h-64 lg:h-72 translate-y-1/3" src="./coffee-burst-right.png" alt="coffee-burst-right"/>
      </motion.div>
      <div className="w-full h-full bg-coffee/80 absolute top-0 left-0 -z-10"/>
    </section>
  )
}

export default SubscribeBlock;