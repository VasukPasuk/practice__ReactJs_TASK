import Footer from "./components/widgets/Footer.tsx";
import AmazingBlock from "./components/blocks/Amazing.block.tsx";
import DiscoverBlock from "./components/blocks/Discover.block.tsx";
import DifferenceBlock from "./components/blocks/Difference.block.tsx";
import FeedbacksBlock from "./components/blocks/Feedbacks.block.tsx";
import IntroBlock from "./components/blocks/Intro.block.tsx";
import SubscribeBlock from "./components/blocks/Subscribe.block.tsx";
import EnjoyBlock from "./components/blocks/Enjoy.block.tsx";


export default function App() {
  return (
    <>
      <section className="bg-amber-100 flex flex-col gap-y-4 justify-center items-center py-8">
        <h1 className="text-3xl font-bold text-center text-coffee">
          Bean Scene Coffee landing page
        </h1>
        <a className="rounded bg-amber-300 hover:bg-amber-200 transition-colors duration-500 px-4 py-2" target="_blank"
           href="https://www.figma.com/design/OjQKBROXSbI6ezC0wr9oEM/Bean-Scene-Coffee-Landingpage--Community-?node-id=0-1&p=f&t=hS6ylHvTkdvqlN6R-0">
          Посилання на оригінал
        </a>
        <p className="text-center text-common-text">
          Мета: Створення односторінкового лендінгу з використанням React, React Icons, Framer Motion, Tailwind CSS
        </p>
      </section>

      <IntroBlock/>
      <DiscoverBlock/>
      <EnjoyBlock/>
      <DifferenceBlock/>
      <AmazingBlock/>
      <FeedbacksBlock/>
      <SubscribeBlock/>

      <Footer/>
      <section className="flex justify-end bg-amber-100 py-8 px-4">
        <h1 className="rounded bg-amber-300 px-4 py-2 text-coffee">
          Автор: Пашківський Василь Васильович
        </h1>
      </section>
    </>
  )
}