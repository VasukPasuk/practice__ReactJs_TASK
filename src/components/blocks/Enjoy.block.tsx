import {motion} from "framer-motion";
import OrderCard from "../basicui/OrderCard.tsx";

const CoffeeItemsList = [
  {
    imageUrl: 'coffee-image-item-1.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50',
  },
  {
    imageUrl: 'coffee-image-item-2.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50',
  },
  {
    imageUrl: 'coffee-image-item-3.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50',
  },
  {
    imageUrl: 'coffee-image-item-4.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50',
  }
]

function EnjoyBlock() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-6 mx-[var(--sides-offset)] my-20">
      <motion.h1
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
        className="font-bold text-5xl text-coffee text-center"
      >
        Enjoy a new blend of coffee style
      </motion.h1>
      <motion.h2
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.75}}
        viewport={{once: true}}
        className="text-xl text-common-text text-center"
      >
        Explore all flavours of coffee with us. There is always a new cup worth experiencing
      </motion.h2>
      <ul className="flex flex-row items-center justify-center gap-x-5 gap-y-10 flex-wrap">
        {
          CoffeeItemsList.map((item, index) => <OrderCard {...item} delay={(0.85 + ((index + 1) * 0.1))}/>)
        }
      </ul>
    </section>
  )
}

export default EnjoyBlock;