import Button from "../basicui/Button.tsx";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {motion} from "framer-motion";
import {useState} from "react";
import FeedBackItem, {FeedBackItemProps} from "../basicui/FeedbackItem.tsx";

const list: FeedBackItemProps[] = [
  {
    feedbackText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    name_surname: 'Jonny Thomas',
    position: 'Project Manager',
    imageUrl: 'johny-tomas.png',
  },
  {
    feedbackText: 'Working with this team has been a truly exceptional experience. From the initial planning stages to final delivery, their professionalism and attention to detail have been unmatched. They were able to understand the specific needs of our HR department and tailor a solution that streamlined our internal processes significantly. I especially appreciated their timely communication and the ability to adapt quickly to our feedback during development.',
    name_surname: 'Tom Black',
    position: 'HR-Manager',
    imageUrl: 'johny-tomas.png',
  },
  {
    feedbackText: 'As a designer, I often find it challenging to work with development teams who don’t fully grasp the importance of visual integrity. However, this team understood exactly what I envisioned and brought it to life with precision and flair. The collaboration was smooth, and they showed great enthusiasm for delivering a product that not only functions well but also looks stunning. Their ability to maintain pixel-perfect UI while optimizing for performance was genuinely impressive.',
    name_surname: 'Elise White',
    position: 'Web-designer',
    imageUrl: 'johny-tomas.png',
  },
  {
    feedbackText: 'Data is at the core of our decision-making process, and finding a team capable of handling large-scale analysis with both technical expertise and strategic insight is rare. They provided a comprehensive solution that allowed us to visualize patterns and predict trends with remarkable accuracy. The dashboards they built were intuitive, scalable, and tailored to our specific KPIs. Their grasp of both data science and user experience played a crucial role in improving our operational efficiency.',
    name_surname: 'Robert Brown',
    position: 'BigData-analyst',
    imageUrl: 'johny-tomas.png',
  }
];



function FeedbacksBlock() {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  return (
    <section className="flex flex-col gap-y-6 items-center justify-center pt-24 pb-36 px-[var(--sides-offset)]">
      <motion.h1
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.5}}
        viewport={{once: true}}
        className="text-5xl font-bold text-center leading-16"
      >
        Our coffee perfection feedback
      </motion.h1>
      <motion.h2
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2, type: "spring", delay: 0.6}}
        viewport={{once: true}}
        className="text-xl font-light text-common-text text-center leading-16"
      >
        Our customers has amazing things to say about us
      </motion.h2>
      <ul className="flex flex-row relative items-center w-full">
        {
          list.slice(feedbackIndex, feedbackIndex + 1).map((data) => (
            <FeedBackItem {...data}/>
          ))
        }
        <motion.span
          initial={{opacity: 0, rotateZ: 15, x: -30}}
          whileInView={{opacity: 1, rotateZ: 0, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.5}}
          viewport={{once: true}}
          className="absolute left-0 -translate-x-1/2"
        >
          <Button
            className="rounded-lg md:h-16 md:w-16"
            onClick={() => setFeedbackIndex(prev => prev - 1 < 0 ? list.length - 1 : prev - 1)}
          >
            <FaArrowLeft/>
          </Button>
        </motion.span>
        <motion.span
          initial={{opacity: 0, rotateZ: 15, x: 30}}
          whileInView={{opacity: 1, rotateZ: 0, x: 0}}
          transition={{duration: 2, type: "spring", delay: 0.5}}
          viewport={{once: true}}
          className="absolute right-0 translate-x-1/2"
        >
          <Button
            className="rounded-lg md:h-16 md:w-16"
            onClick={() => setFeedbackIndex(prev => prev === (list.length - 1) ? 0 : prev + 1)}
          >
            <FaArrowRight/>
          </Button>
        </motion.span>


        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 2, type: "spring", delay: 0.5}}
          viewport={{once: true}}
          className="absolute bottom-0 left-0 -translate-x-[var(--sides-offset)] translate-y-1/2 w-48 md:w-96"
        >
          <img src="./coffee-river-left.png" alt="coffee-river-left"/>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 2, type: "spring", delay: 0.7}}
          viewport={{once: true}}
          className="absolute top-0 right-0 translate-x-[var(--sides-offset)] -translate-y-1/2 w-48 md:w-96"
        >
          <img src="./coffee-river-right.png" alt="coffee-river-right"/>
        </motion.div>


      </ul>
    </section>
  )
}


export default FeedbacksBlock;