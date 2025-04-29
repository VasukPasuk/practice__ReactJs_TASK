import { motion } from "framer-motion";
import Button from "./Button.tsx";

interface OrderCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  delay: number;
}


export default function OrderCard({description, imageUrl, price , title, delay}: OrderCardProps) {
  return (
    <motion.li
      initial={{opacity: 0, y: -100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 2, type: "spring", delay: delay}}
      viewport={{once: true}}
      className="flex flex-col relative"
    >
      <div>
        <img src={`./${imageUrl}`} alt="coffee-image-item"/>
      </div>
      <div
        className="flex flex-col items-center pt-4 pb-8 gap-y-2 border border-[#F9C06A]/40 border-t-0 bg-[#FFF9F1] text-coffee">
        <span className="font-bold text-[1.4rem]">{title}</span>
        <span>{description}</span>
        <span className="font-bold text-[1.25rem]">${price}</span>
      </div>
      <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 flex justify-center">
        <Button className="font-bold">Order Now</Button>
      </div>
    </motion.li>
  )
}