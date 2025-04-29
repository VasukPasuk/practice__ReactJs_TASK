import Button from "./components/basicui/Button.tsx";
import OrderCard from "./components/basicui/OrderCard.tsx";
import {PiCoffeeBeanLight} from "react-icons/pi";
import {SlBadge} from "react-icons/sl";
import {PiCoffeeLight} from "react-icons/pi";
import {MdOutlinePriceCheck} from "react-icons/md";
import Footer from "./components/widgets/Footer.tsx";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";


const CoffeeItemsList = [
  {
    imageUrl: 'coffee-image-item-1.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50'
  },
  {
    imageUrl: 'coffee-image-item-2.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50'
  },
  {
    imageUrl: 'coffee-image-item-3.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50'
  },
  {
    imageUrl: 'coffee-image-item-4.png',
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '8.50'
  }
]

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

export default function App() {
  return (
    <>
      <main className="flex flex-col min-h-[768px] relative">

        <header className="flex justify-between items-center py-10 px-[var(--sides-offset)] w-full">
          <a href="#" className="clicker-script-font text-4xl text-white">
            Bean Scene
          </a>

          <ul className="text-white hidden md:gap-x-6 lg:gap-x-10 xl:gap-x-14 md:flex">
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Menu
              </a>
            </li>
            <li>
              <a href="#">
                About Us
              </a>
            </li>
            <li>
              <a href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-x-6">
            <Button btnType="ghost">
              Sign In
            </Button>
            <Button>
              SignUp
            </Button>
            <div className="cursor-pointer">
              <RxHamburgerMenu className="text-4xl text-white"/>
            </div>
          </div>
        </header>
        <div
          className="flex flex-col items-start justify-center gap-y-4 h-full text-white mx-[var(--sides-offset)] mt-32 mb-16">
          <h1 className="text-[1.38rem]">We’ve got your morning covered with</h1>
          <h1 className="clicker-script-font" style={{fontSize: 'clamp(6rem, 3.8983rem + 10.5085vw, 13.75rem)'}}>Coffee</h1>
          <h1 className="text-xl">It is best to start your day with a cup of coffee. Discover the <br/>
            best flavours coffee you will ever have. We provide <br/> the best
            for our customers.</h1>
          <Button>
            Order Now
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 -z-10 h-full w-full">
          <img src="coffee-image.png" alt="coffee-image" className="h-full w-full object-cover"/>
        </div>
        <div className="absolute bottom-0 right-0 bg-linear-to-r from-[#1E1E1E] to-transparent w-full h-full -z-10"/>
      </main>
      <section className="flex flex-row justify-between my-20 w-full pt-[var(--top-offset)] px-[var(--sides-offset)]" style={{margin: '0 auto'}}>
        <div className="flex flex-col items-start justify-center gap-y-7">
          <h1 className="font-bold text-5xl text-coffee leading-16">Discover the best coffee</h1>
          <h3 className="text-xl text-common-text">Bean Scene is a coffee shop that provides you with quality
            coffee <br/> that helps boost your productivity and
            helps build your mood. <br/> Having a cup of coffee is good, but having a cup of real coffee
            is <br/> greater. There is
            no doubt that you will enjoy this coffee more <br/> than others you have ever tasted.</h3>
          <Button>
            Learn More
          </Button>
        </div>
        <div className="w-[40%] aspect-square hidden lg:block">
          <img className="w-full h-full" src="./stylized-cup-coffee-out-coffee-beans-flat-lay 1.png"
               alt="stylized-cup-coffee-out-coffee-beans-flat-lay"/>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-y-6 mx-[var(--sides-offset)] my-20">
        <h1 className="font-bold text-5xl text-coffee text-center">
          Enjoy a new blend of coffee style
        </h1>
        <h2 className="text-xl text-common-text text-center">
          Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </h2>
        <ul className="flex flex-row items-center justify-center gap-x-5 gap-y-10 flex-wrap">
          {
            CoffeeItemsList.map((item) => <OrderCard {...item}/>)
          }
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center gap-y-6 mx-[var(--sides-offset)] my-20">
        <h1 className="font-bold text-5xl text-coffee text-center leading-16">
          Why are we different?
        </h1>
        <h3 className="text-xl text-common-text text-center">
          We don’t just make your coffee, we make your day!
        </h3>

        <ul className="flex flex-row gap-8 flex-wrap items-center justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center border border-[#F9C06A]/40 border-t-0 p-6 rounded-md ${feature.bg} w-64 h-64`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-brown-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </ul>
        <h3 className="text-common-text">Great ideas start with great coffee, Lets help you achieve that</h3>
        <h2 className="text-coffee text-3xl font-bold">Get started today.</h2>
        <Button className="font-bold px-8">
          Join Us
        </Button>
      </section>
      <section
        className="flex flex-row justify-between items-center pl-[var(--sides-offset)] relative min-h-[574px] pt-16">
        <div className="flex flex-col gap-y-4 items-start">
          <h1 className="text-5xl text-white leading-16">Get a chance to have an <br/>
            Amazing morning</h1>
          <h2 className="text-xl text-white leading-10">
            We are giving you are one time opportunity to <br/>
            experience a better life with coffee.
          </h2>
          <Button>
            Order Now
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img className="h-full w-full object-cover" src="./coffee-image-bg.png" alt="coffee-image-bg"/>
        </div>
        <div className="w-full h-full bg-coffee/80 absolute top-0 left-0 -z-10"/>
        <div className="relative w-1/3 min-h-[574px] h-full hidden lg:block">
          <img className="absolute w-96 h-[550px] z-10 right-1/12" src="./coffee-plastic-cup.png"
               alt="coffee-plastic-cup"/>
          <img className="w-full absolute h-full bottom-0 right-0 object-cover" src="./coffee-beans.png"
               alt="coffee-image-bg"/>
        </div>
      </section>
      <section className="flex flex-col gap-y-6 items-center justify-center pt-24 pb-36 px-[var(--sides-offset)]">
        <h1 className="text-5xl font-bold text-center leading-16">
          Our coffee perfection feedback
        </h1>
        <h2 className="text-xl font-light text-common-text text-center leading-16">
          Our customers has amazing things to say about us
        </h2>
        <ul className="flex flex-row relative items-center">
          <li className="relative flex flex-col gap-y-4 items-center border border-[#F9C06A]/40 bg-[#FFF9F1] px-16 pt-4 pb-24">
            <RiDoubleQuotesL className="text-8xl self-start -translate-x-1/2"/>
            <span className="text-center text-common-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset.....
            </span>
            <span className="text-3xl font-bold text-coffee">
              Jonny Thomas
            </span>
            <span className="text-common-text">
              Project Manager
            </span>
            <div className="absolute aspect-square h-32 bottom-0 translate-y-1/2">
              <img className="w-full h-full" src="./johny-tomas.png" alt=""/>
            </div>
          </li>
          <Button className="rounded-lg md:h-16 md:w-16 absolute left-0 -translate-x-1/2">
            <FaArrowLeft/>
          </Button>
          <Button className="rounded-lg md:h-16 md:w-16 absolute right-0 translate-x-1/2">
            <FaArrowRight/>
          </Button>


          <div className="absolute bottom-0 left-0 -translate-x-[var(--sides-offset)] translate-y-1/2 w-48 md:w-96">
            <img src="./coffee-river-left.png" alt="coffee-river-left"/>
          </div>
          <div className="absolute top-0 right-0 translate-x-[var(--sides-offset)] -translate-y-1/2 w-48 md:w-96">
            <img src="./coffee-river-right.png" alt="coffee-river-right"/>
          </div>


        </ul>
      </section>
      <section className="flex flex-col gap-y-8 justify-between items-center px-[var(--sides-offset)] relative py-20">
        <h1 className="text-5xl text-white font-bold text-center leading-16">Subscribe to get the Latest News</h1>
        <h2 className="text-xl font-light text-white text-center">Don’t miss out on our latest news, updates, tips and special</h2>
        <div className="flex flex-row bg-white rounded overflow-hidden w-full max-w-[450px]">
          <input className="w-full px-4" type="text" placeholder="Enter your email"/>
          <Button className="rounded-sm rounded-r-none font-bold text-xl">
            Subscribe
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img className="h-full w-full object-cover" src="./coffee-image-bg.png" alt="coffee-image-bg"/>
        </div>

        <div className="absolute bottom-0 left-0">
          <img className="h-32 md:h-64 lg:h-72 translate-y-1/3" src="./coffee-burst-left.png" alt="coffee-burst-left"/>
        </div>
        <div className="absolute bottom-0 right-0">
          <img className="h-32 md:h-64 lg:h-72 translate-y-1/3" src="./coffee-burst-right.png" alt="coffee-burst-right"/>
        </div>
        <div className="w-full h-full bg-coffee/80 absolute top-0 left-0 -z-10"/>
      </section>
      <Footer/>
    </>
  )
}