import Landing from "./Landing";
import "./App.css";
import Header from "./Header";
import ProgressBar from 'react-progressbar-on-scroll'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import AOS from "aos";
import "aos/dist/aos.css"

import twitter from "./assests/twitter.svg";
import link from "./assests/link.svg";
import github from "./assests/github.svg";
import diamond from "./assests/diamond.svg";
import education from "./assests/education.svg";
import stat_up from "./assests/stat-up.svg";
import arrow_right from "./assests/arrow-right.svg";
import arrow_left from "./assests/arrow-left.svg";
import call from "./assests/call.svg";
import email from "./assests/email.svg";
import location from "./assests/location.svg";
import { useEffect } from "react";
function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./assests/sample", false, /\.(png|jpe?g|svg)$/)
  );

  const skillsImage = importAll(
    require.context("./assests/skills", false, /\.(png|jpe?g|svg)$/)
  );
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 10,
    });
  },[])
  return (
    <div className="relative">
    <ProgressBar color="#2563eb" />
      <div className="w-full sm:max-w-[65rem] m-auto ">
        <Header />
      </div>
      <div data-aos="zoom-out-up" className=" grid lg:grid-cols-[1fr_60px] max-w-max m-auto space-x-6 relative">
        <Landing />
        <div className="transform lg:rotate-90 items-center h-max mt-4 flex justify-between lg:space-x-8 lg:py-8">
          <p className="whitespace-nowrap text-blue-600 text-lg font-semibold">
            Follow me:
          </p>
          <a href="https://www.linkedin.com/in/kheersagar-parja-02302b1b8/" target="_blank" className="contents">
            <img src={link} className="w-10 h-10 " />
          </a>
          <a href="https://twitter.com/KheersagarParj2" target="_blank" className="contents">
            <img src={twitter} className="w-10 h-10" />
          </a>
          <a href="https://github.com/kheersagar" target="_blank" className="contents">
            <img src={github} className="w-10 h-10" />
          </a>
        </div>

        <div className="rounded-full bg-green-500 w-1 h-1 absolute left-20 top-12 "></div>
        <div className="rounded-full bg-red-500 w-1 h-1 absolute left-16 top-24"></div>
        <div className="rounded-full bg-gray-500 w-2 h-2 absolute left-12 top-52"></div>
        <div className="rounded-full bg-violet-500 w-2 h-2 absolute left-32 top-48"></div>
        <div className="rounded-full bg-yellow-500 w-1 h-1 absolute left-36 top-68"></div>
        <div className="rounded-full bg-green-500 w-2 h-2 absolute left-42 top-48"></div>
        <div className="rounded-full bg-green-500 w-2 h-2 absolute left-72 top-52"></div>
        <div className="rounded-full bg-green-500 w-2 h-2 absolute left-80 top-62"></div>
        <div className="rounded-full bg-red-500 w-2 h-2 absolute left-16 top-24"></div>
        <div className="rounded-full bg-gray-500 w-2 h-2 absolute left-12 top-52"></div>
        <div className="rounded-full bg-violet-500 w-1 h-1 absolute left-40 top-56"></div>
        <div className="rounded-full bg-yellow-500 w-1 h-1 absolute left-44 top-52"></div>
        <div className="rounded-full bg-green-500 w-2 h-2 absolute left-64 top-48"></div>
        <div className="rounded-full bg-green-500 w-2 h-2 absolute left-72 top-24"></div>
        <div className="rounded-full bg-green-500 w-1 h-1 absolute left-80 top-20"></div>
      </div>
      {/* overview */}
      <div data-aos="zoom-out-up" className="  max-w-[65rem] m-auto mt-8 grid grid-cols-3 lg:gap-28 px-2">
        <div className="border-r border-r-green-600 text-left transform hover:scale-110 transition-all cursor-pointer">
          <p className="font-bold lg:text-5xl text-green-600">10+</p>
          <p className="font-semibold text-gray-500 mt-1">Satisfied clients</p>
        </div>
        <div className="border-r border-r-green-600 pl-10 transform hover:scale-110 transition-all cursor-pointer">
          <p className="font-bold lg:text-5xl text-green-600">20+</p>
          <p className="font-semibold text-gray-500 mt-1">Projects completed</p>
        </div>
        <div className="pl-10 transform hover:scale-110 transition-all cursor-pointer">
          <p className="font-bold lg:text-5xl text-green-600 ">10+</p>
          <p className="font-semibold text-gray-500 mt-1">Review given</p>
        </div>
      </div>
      {/* hire */}
      <div data-aos="zoom-in-up"  className=" max-w-[65rem] m-auto mt-20 mb-20 grid md:grid-cols-2 gap-12 px-2" id="portfolio">
        <div className="self-center justify-self-center" >
          <p className="text-5xl font-bold">Why Hire Me For Your</p>
          <p className="text-5xl font-bold">
            Next <span className="text-green-600">Project?</span>
          </p>
          <p className="text-md text-gray-600 mt-8">
            loqbas ia onaos bnfobnas fabnsfob a fabsfaobsf oasf afahfobanf
            oanbga sgn agnaonba sgbna sgnasgbnasgas g{" "}
          </p>

          <button className="bg-green-600 text-white px-4 p-2 px- rounded-lg mt-8 text-lg font-semibold cursor-pointer shadow-lg hover:scale-105 transition-all">
            Hire Me
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div data-aos="slide-left" data-aos-delay="700" className="p-4 transform hover:scale-110 transition-all cursor-pointer hover:shadow-xl  rounded-lg">
            <img src={diamond} className="w-10 h-10 mb-2" />
            <p className="font-bold">Visual Design</p>
            <p className="text-gray-600 font-medium">
              asd ia fba a osfba aga gaog ba goa g oagop agoisa
            </p>
          </div>
          <div data-aos="slide-right" data-aos-delay="700" className="row-start-1 row-end-3 col-start-2 justify-self-center self-center p-4 transform hover:scale-110 transition-all cursor-pointer hover:shadow-xl shadow-xl rounded-lg">
            <img src={stat_up} className="w-10 h-10 mb-2" />
            <p className="font-bold">Design Prototype</p>
            <p className="text-gray-600 font-medium">
              asd ia fba a osfba aga gaog ba goa g oagop agoisa
            </p>
          </div>
          <div data-aos="slide-up" data-aos-delay="700" className="p-4 transform hover:scale-110 transition-all cursor-pointer hover:shadow-xl rounded-lg">
            <img src={education} className="w-10 h-10 mb-2" />
            <p className="font-bold">UX Research</p>
            <p className="text-gray-600 font-medium">
              asd ia fba a osfba aga gaog ba goa g oagop agoisa
            </p>
          </div>
        </div>
      </div>
      {/* work */}
      <div data-aos="zoom-out-up" className=" max-w-[65rem] m-auto mt-20 mb-20 grid md:grid-cols-2 gap-12 px-2">
        <div className="self-center justify-self-center">
          <p className="text-5xl font-bold">My Creative Works</p>
          <p className="text-5xl font-bold">
            Latest <span className="text-green-600">Projects</span>
          </p>
          <p className="text-md text-gray-600 mt-8">
            loqbas ia onaos bnfobnas fabnsfob a fabsfaobsf oasf afahfobanf
            oanbga sgn agnaonba sgbna sgnasgbnasgas g{" "}
          </p>

          <button className="bg-green-600 text-white px-4 p-2 rounded-lg mt-8 text-lg font-semibold cursor-pointer shadow-lg hover:scale-105 transition-all">
            Hire Me
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={images.length}
            isPlaying
            visibleSlides={1}
            infinite
            dragEnabled
            hasMasterSpinner={images.length > 0 ? false : true}
            className="relative"
          >
            <Slider>
              {images.map((item, index) => {
                return (
                  <Slide index={index} className="mx-4 w-full h-full ">
                    <Image src={item} className="object-contain object-top" />
                  </Slide>
                );
              })}
            </Slider>
            <DotGroup className="dot-group mt-10 " />
            {/* <div className="mt-4 hidden md:block">
           <ButtonBack>
              <img src={arrow_left}  className="w-10 "/>
            </ButtonBack>
            <ButtonNext className="absolute right-0">
              {" "}
              <img src={arrow_right}  className="w-10 "/>
            </ButtonNext>
           </div> */}
          </CarouselProvider>
        </div>
      </div>
      {/* skills */}
      <div data-aos="zoom-out-down" className=" max-w-[65rem] m-auto mt-20 mb-20 grid md:grid-cols-1 gap-12 px-2" id="skills">
        <div className="self-center justify-self-center">
          <p className="text-5xl font-bold text-green-600 text-center">Skills
          </p>
          <p className="text-md text-gray-600 mt-8">
            loqbas ia onaos bnfobnas fabnsfob a fabsfaobsf oasf afahfobanf
            oanbga sgn agnaonba sgbna sgnasgbnasgas g
          </p>
        </div>
        <div className="flex flex-wrap space-x-4 justify-center items-center">
          {skillsImage.map((item,index)=>{
            return(
              <div data-aos="zoom-out-up" data-aos-delay={600 + 50* index} className="cursor-pointer shadow-xl p-4 rounded-xl hover:scale-125 transition-all hover:z-20 ">
                <img src={item} className="w-20"/>
              </div>
            )
          })}
        </div>
        </div>
      {/* contact */}
      <div data-aos="zoom-out-up" data-aos-offset="200" data-aos-delay="800" className="max-w-[65rem] m-auto mt-20 mb-20 grid px-2 gap-y-10" id="contact">
        <div className="justify-center items-center grid ">
          <p className="text-5xl font-bold">
            Let's Discuss Your <span className="text-green-600">Project</span>
          </p>
          <p className="text-md text-gray-600 mt-8 max-w-xl text-center self-center justify-self-center">
            asdasdf asf uab fua f afaos fsafba fabf a fbaof abf ab aofba faisf
            fas fsbafo as9f asofpsf afahfobanfaf saf as f as9fsaf
          </p>
        </div>
        <div className="grid md:grid-cols-[0.5fr_1fr]">
          <div className="h-full grid grid-cols-1 ">
            <div className="grid grid-cols-[50px_1fr] gap-x-4 gap-y-8 mb-6 md:mb-16  justify-center  items-center transform hover:scale-110 transition-all">
              <div className="bg-green-600 rounded-2xl p-3 h-12">
                <img src={call} className="w-10" />
              </div>
              <div>
              <a href="tel:+916264168520">

                <p className="text-gray-400 font-semibold">Call me</p>
                <p className="font-bold mt-1">+91 6264168520</p>
              </a>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] gap-x-4 gap-y-8 mb-6 md:mb-16  justify-center  items-center transform hover:scale-110 transition-all">
              <div className="bg-green-600 rounded-2xl p-3 h-12">
                <img src={email} className="w-10" />
              </div>
              <div>
              <a href="mailto:santparja@gmail.com">
                <p className="text-gray-400 font-semibold">Email me</p>
                <p className="font-bold mt-1">santparja@gmail.com</p>
              </a>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] gap-x-4 gap-y-8  justify-center  items-center transform hover:scale-110 transition-all">
              <div className="bg-green-600 rounded-2xl p-3 h-12">
                <img src={location} className="w-10" />
              </div>
              <div>
                <p className="text-gray-400 font-semibold">Address</p>
                <p className="font-bold mt-1">Raigarh, Chhattisgarh, India</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-10 md:m-0">
            <input
              placeholder="Full name"
              className="border rounded-lg py-2 px-4 h-16"
            />
            <input
              placeholder="Your email"
              className="border rounded-lg py-2 px-4 h-16"
            />
            <input
              placeholder="Phone number"
              className="border rounded-lg py-2 px-4 h-16"
            />
            <input
              placeholder="Budget"
              className="border rounded-lg py-2 px-4 h-16"
            />
            <input
              placeholder="Message"
              className="border rounded-lg py-2 px-4 col-start-1 col-end-3 h-32"
            />
          </div>
        </div>
        <div className="w-full  text-right">
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-all">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
