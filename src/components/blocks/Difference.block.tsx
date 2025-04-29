import Button from "../basicui/Button.tsx";
import {PiCoffeeBeanLight, PiCoffeeLight} from "react-icons/pi";
import {SlBadge} from "react-icons/sl";
import {MdOutlinePriceCheck} from "react-icons/md";
import {motion} from "framer-motion";

const features = [
  {
    title: "Supreme Beans",
    description: "Beans that provides great taste",
    icon: <PiCoffeeBeanLight/>,
    bg: "bg-[#FFEED8]",
  },
  {
    title: "High Quality",
    description: "We provide the highest quality",
    icon: <SlBadge/>,
    bg: "bg-[#FFEED8]/40",
  },
  {
    title: "Extraordinary",
    description: "Coffee like you have never tasted",
    icon: <PiCoffeeLight/>,
    bg: "bg-[#FFEED8]/40",
  },
  {
    title: "Affordable Price",
    description: "Our Coffee prices are easy to afford",
    icon: <MdOutlinePriceCheck/>,
    bg: "bg-[#FFEED8]/40",
  },
];

function DifferenceBlock() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-y-6 mx-[var(--sides-offset)] mt-32 mb-20">
      <motion.h1
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
        className="font-bold text-5xl text-coffee text-center leading-16"
      >
        Why are we different?
      </motion.h1>
      <motion.h3
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.6}}
        viewport={{once: true}}
        className="text-xl text-common-text text-center"
      >
        We don’t just make your coffee, we make your day!
      </motion.h3>

      <ul className="flex flex-row gap-8 flex-wrap items-center justify-center">
        {features.map((feature, index) => (
          <motion.div
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 2, type: "spring", delay: 0.6 + ((index + 1) * 0.1)}}
            viewport={{once: true}}
            key={index}
            className={`flex flex-col items-center justify-center text-center border border-[#F9C06A]/40 border-t-0 p-6 rounded-md ${feature.bg} w-64 h-64`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-brown-700 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </ul>
      <motion.h3
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
        className="text-common-text text-center"
      >Great ideas start with great coffee, Lets help you achieve that
      </motion.h3>
      <motion.h2
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
        className="text-coffee text-3xl font-bold"
      >Get started today.
      </motion.h2>
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
      >
        <Button className="font-bold px-8">
          Join Us
        </Button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 2, type: "spring", delay: 0.7}}
        viewport={{once: true}}
        className="absolute top-0 right-0 translate-x-[var(--sides-offset)] -translate-y-1/2 w-32 md:w-96"
      >
        <img src="./coffee-river-right.png" alt="coffee-river-right"/>
      </motion.div>
    </section>
  )
}

export default DifferenceBlock;