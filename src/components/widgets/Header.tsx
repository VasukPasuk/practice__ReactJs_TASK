import {motion} from "framer-motion";
import Button from "../basicui/Button.tsx";
import {RxHamburgerMenu} from "react-icons/rx";

export default function Header() {
  return (
    <motion.header
      initial={{opacity: 0, y: -100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 2, type: "spring"}}
      viewport={{once: true}}
      className="flex justify-between items-center py-10 px-[var(--sides-offset)] w-full"
    >
      <a href="#" className="clicker-script-font text-4xl text-white">
        Bean Scene
      </a>

      <ul className="text-white hidden md:gap-x-6 lg:gap-x-10 xl:gap-x-14 md:flex">
        <motion.li
          whileHover={{y: -5}}
          transition={{duration: 2, type: "spring", bounce: 0.6, damping: 10, stiffness: 100}}
        >
          <a href="#">
            Home
          </a>
        </motion.li>
        <motion.li
          whileHover={{y: -5}}
          transition={{duration: 2, type: "spring", stiffness: 100}}
        >
          <a href="#">
            Menu
          </a>
        </motion.li>
        <motion.li
          whileHover={{y: -5}}
          transition={{duration: 2, type: "spring", stiffness: 100}}

        >
          <a href="#">
            About Us
          </a>
        </motion.li>
        <motion.li
          whileHover={{y: -5}}
          transition={{duration: 2, type: "spring", stiffness: 100}}
        >
          <a href="#">
            Contact Us
          </a>
        </motion.li>
      </ul>
      <div className="flex justify-center items-center gap-x-6">
        <Button btnType="ghost">
          Sign In
        </Button>
        <Button>
          SignUp
        </Button>
        <div className="cursor-pointer md:hidden">
          <RxHamburgerMenu className="text-4xl text-white"/>
        </div>
      </div>
    </motion.header>
  )
}