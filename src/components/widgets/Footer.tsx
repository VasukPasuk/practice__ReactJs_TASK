import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {CiYoutube} from "react-icons/ci";
import {FaTwitter} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="relative flex flex-row flex-wrap gap-16 items-start justify-between px-[var(--sides-offset)] pt-40 pb-20 text-white">

      <div className="flex flex-col gap-y-4">
        <h1 className="clicker-script-font text-6xl">Bean Scene</h1>
        <h2>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry. Lorem Ipsum has been the
          industry's <br/> standard dummy text ever since the 1500s, when an <br/> unknown printer took a galley of type
          and
          scrambled it to <br/> make a type specimen book.</h2>
        <div className="flex flex-row gap-x-6">
          <a href="#"><FaFacebook size={32}/></a>
          <a href="#"><FaInstagram size={32}/></a>
          <a href="#"><CiYoutube size={32}/></a>
          <a href="#"><FaTwitter size={32}/></a>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-2xl font-bold mb-10">About</span>
        <a href="#">Menu</a>
        <a href="#">Features</a>
        <a href="#">News & Blogs </a>
        <a href="#">Help & Supports</a>
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-2xl font-bold mb-10">Company</span>
        <a href="#">How we work</a>
        <a href="#">Terms of service</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-2xl font-bold mb-5">Contact Us</span>
        <span>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
        <span>+1 202-918-2132</span>
        <span>beanscene@mail.com</span>
        <span>www.beanscene.com</span>
      </div>

      <div className="absolute opacity-80 w-full h-full bottom-0 left-0 -z-10">
        <img src="./footer-image.png" alt="footer-image" className="w-full h-full opacity-50 object-cover"
             style={{objectPosition: 'bottom center'}}/>
        <div className="bg-[#442808] -z-20 w-full h-full absolute top-0 left-0"/>
      </div>
    </footer>
  )
}