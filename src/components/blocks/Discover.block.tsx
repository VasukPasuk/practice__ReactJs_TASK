import {motion} from "framer-motion";
import Button from "../basicui/Button.tsx";

function DiscoverBlock() {
  return (
    <section
      className="relative flex flex-row justify-between my-20 w-full pt-[var(--top-offset)] px-[var(--sides-offset)] pb-32 md:pb-12"
      style={{margin: '0 auto'}}>
      <div

        className="flex flex-col items-start justify-center gap-y-7"
      >
        <motion.h1
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.5}}
          viewport={{once: true}}
          className="font-bold text-5xl text-coffee text-center leading-16"
        >
          Discover the best coffee
        </motion.h1>
        <motion.h3
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.6}}
          viewport={{once: true}}
          className="text-xl text-common-text "
        >
          Bean Scene is a coffee shop that provides you with quality
          coffee <br/> that helps boost your productivity and
          helps build your mood. <br/> Having a cup of coffee is good, but having a cup of real coffee
          is <br/> greater. There is
          no doubt that you will enjoy this coffee more <br/> than others you have ever tasted.
        </motion.h3>
        <motion.span
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.7}}
          viewport={{once: true}}
        >
          <Button>
            Learn More
          </Button>
        </motion.span>
      </div>
      <motion.div
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.8}}
        viewport={{once: true}}
        className="w-[40%] aspect-square hidden lg:block"
      >
        <img className="w-full h-full" src="./stylized-cup-coffee-out-coffee-beans-flat-lay 1.png"
             alt="stylized-cup-coffee-out-coffee-beans-flat-lay"/>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 2, type: "spring", delay: 0.9}}
        viewport={{once: true}}
        className="absolute bottom-0 left-0  translate-y-1/2 w-48 md:w-96"
      >
        <img src="./coffee-river-left.png" alt="coffee-river-left"/>
      </motion.div>
    </section>
  )
}

export default DiscoverBlock;