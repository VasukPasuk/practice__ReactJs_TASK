import {motion} from "framer-motion";
import Button from "../basicui/Button.tsx";
import Header from "../widgets/Header.tsx";

function IntroBlock() {
  return (
    <main className="flex flex-col min-h-[768px] relative overflow-hidden">
      <Header/>
      <motion.div
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring"}}
        viewport={{once: true}}
        className="flex flex-col items-start justify-center gap-y-4 h-full text-white mx-[var(--sides-offset)] mt-32 mb-16">
        <h1 className="text-[1.38rem]">We’ve got your morning covered with</h1>
        <h1 className="clicker-script-font"
            style={{fontSize: 'clamp(6rem, 3.8983rem + 10.5085vw, 13.75rem)'}}>Coffee</h1>
        <h1 className="text-xl">It is best to start your day with a cup of coffee. Discover the <br/>
          best flavours coffee you will ever have. We provide <br/> the best
          for our customers.</h1>
        <Button>
          Order Now
        </Button>
      </motion.div>

      <motion.div
        initial={{scale: 1}}
        whileInView={{scale: 1.1}}
        transition={{duration: 2, type: "spring"}}
        viewport={{once: true}}
        className="absolute bottom-0 left-0 -z-10 h-full w-full"
      >
        <img src="coffee-image.png" alt="coffee-image" className="h-full w-full object-cover"/>
      </motion.div>
      <div className="absolute bottom-0 right-0 bg-linear-to-r from-[#1E1E1E] to-transparent w-full h-full -z-10"/>
    </main>
  )
}

export default IntroBlock;