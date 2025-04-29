import {motion} from "framer-motion";
import Button from "../basicui/Button.tsx";

function AmazingBlock() {
  return (
    <section
      className="flex flex-row justify-between items-center px-[var(--sides-offset)] lg:pr-0 relative min-h-[574px] pt-16 overflow-hidden">
      <div className="flex flex-col gap-y-4 items-start">
        <motion.h1
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.5}}
          viewport={{once: true}}
          className="text-5xl text-white leading-16 text-center sm:text-start w-full"
        >Get a chance to have an <br/>
          Amazing morning
        </motion.h1>
        <motion.h2
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.6}}
          viewport={{once: true}}
          className="text-xl text-white leading-10 text-center sm:text-start w-full"
        >
          We are giving you are one time opportunity to <br/>
          experience a better life with coffee.
        </motion.h2>
        <motion.div
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.7}}
          viewport={{once: true}}
          className="flex justify-center items-center w-full md:block"
        >
          <Button>
            Order Now
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{scale: 1}}
        whileInView={{scale: 1.125}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
        className="absolute top-0 left-0 w-full h-full -z-10"
      >
        <img className="h-full w-full object-cover" src="./coffee-image-bg.png" alt="coffee-image-bg"/>
      </motion.div>
      <div className="w-full h-full bg-coffee/80 absolute top-0 left-0 -z-10"/>
      <div className="relative w-1/3 min-h-[574px] h-full hidden lg:block">
        <motion.img
          initial={{opacity: 0, x: -100, rotateZ: 25}}
          whileInView={{opacity: 1, x: 0, rotateZ: 0}}
          transition={{duration: 2, type: "spring", delay: 0.9}}
          viewport={{once: true}}
          className="absolute w-96 h-[550px] z-10 right-1/12"
          src="./coffee-plastic-cup.png"
          alt="coffee-plastic-cup"
        />
        <motion.img
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 2, type: "spring", delay: 0.8}}
          viewport={{once: true}}
          className="w-full absolute h-full bottom-0 right-0 object-cover"
          src="./coffee-beans.png"
          alt="coffee-image-bg"
        />
      </div>
    </section>
  )
}

export default AmazingBlock;