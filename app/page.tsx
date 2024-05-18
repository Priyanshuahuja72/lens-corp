"use client";
import React, { useState } from "react";
import Hero from "./components/Hero";
import Image from "next/image";
import teamImg from "../public/image/team-image.png";
import Card from "./components/Card";
import TrueAI from "./components/TrueAI";
import TickIcon from "./components/TickIcon";
import AICard from "./components/AICard";
import Vision from "./components/Vision";
import Map from "../public/image/Map.webp"
import Footer from "./components/Footer";
import Button from "./components/Button";
import CardData from "../app/data/CardData";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import BlogCardData from "./data/BlogCardData";
// AI Image Component 
import GreenAI from "../public/image/greenAI.webp";
import BlueAI from "../public/image/blueAI.webp";
import RedAI from "../public/image/redAI.webp";
import YellowAI from "../public/image/yellowAI.webp";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [NavbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
    <Navbar setNavbarOpen={setNavbarOpen} NavbarOpen={NavbarOpen}/>
    <SideBar NavbarOpen={NavbarOpen}/>
    <div>
      <Hero />
      <div className="mt-[40px]">
        <h1 className={`text-center xl:text-[70px] lg:text-[70px] md:text-[64px] sm:text-[50px] font-semibold`}>About Us</h1>
        <div
          className="w-40 h-2 rounded-full bg-gradient-to-r mx-auto"
          style={{
            backgroundImage: `linear-gradient(54deg, #0091ff, #9cfeff)`,
          }}
        ></div>
        {/* the cart div comes here */}
        <div className={`my-[30px] xl:mx-[60px] lg:mx-[60px] md:mx-[60px] sm:mx-[20px]`}>
          {/* this is the entire div */}
          <div 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`transition-all duration-200 ease-in-out flex xl:flex-row xl:items-start lg:flex-col-reverse lg:items-center md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[100%] mx-auto bg-[#1b1c1e] p-[40px] rounded-xl ${hover ? 'transform scale-105 transition-all duration-200 ease-in-out': ''}`}>
            {/*--left-section---*/}
            <div className={`xl:w-[80%] xl:text-left xl:mt-0 lg:mt-6 lg:w-[100%] lg:text-center md:mt-6 md:w-[100%] sm:mt-6 md:text-center sm:text-center `}>
              <div>
                <h1 className={`text-primary-color text-4xl font-extrabold mb-8`}>
                  Welcome to LENS
                </h1>
              </div>
              <div className={`mb-[30px] xl:w-[70%] lg:w-full`}>
                <span className="text-aboutPara text-[1rem] font-light mt-1 opacity-80 p-1 w-3/4 leading-loose">
                  We put our hearts, souls and sweat into designing and
                  developing custom AI - powered solutions for your business so
                  you do not have to.
                </span>
              </div>
             <Button text= {"Learn More"}/>
            </div>
            {/* --right-section---*/}
            <div className={` bg-white p-4 rounded-lg max-h-[100%] xl:w-[55%] lg:w-[60%]`}>
              <Image
                alt="Team-Image"
                src={teamImg}
                className={`xl:w-[450px] xl:h-[351px] lg:w-[450px] lg:h-[400px]  rounded-10 transition duration-300 ease-in-out overflow-hidden object-cover rounded-[20px]`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* this is the sevices section */}
      <div className="mt-[50px]">
        <h1 className="text-center text-[30px] font-semibold">SERVICES</h1>
        <div
          className="w-20 h-2 rounded-full bg-gradient-to-r mx-auto"
          style={{
            backgroundImage: `linear-gradient(54deg, #0091ff, #9cfeff)`,
          }}
        ></div>
        {/* the para testing */}
        <div className={`xl:w-[70%] lg:w-[70%] md:w-[100%] ml-auto mr-auto text-center`}>
          <p className={`my-[80px] mx-auto text-center xl:text-5xl xl:font-medium lg:text-[58px] lg:leading-normal lg:font-medium md:text-[58px] sm:text-[45px] md:leading-normal md:font-medium`}>
            We provide Artificial Intelligence Services
          </p>
        </div>
        {/* Now this is the card section */}
        <div className={`grid xl:grid-rows-2 xl:grid-cols-2 lg:grid-rows-2 lg:grid-cols-2 md:grid-rows-1 gap-x-12 gap-y-12 xl:mx-60 lg:mx-20 xl:w-[70%] lg:w-[85%] md:mx-auto md:w-[60%]`}>
          {CardData.map((CardItem, id) => (
            <Card
              CardNumber={CardItem.CardNumber}
              CardHeading={CardItem.heading}
              CardContent={CardItem.CardContent}
              CardBorderColor={CardItem.CardBorderColor}
              CardTextColor={CardItem.CardTextColor}
              key={id}
            />
          ))}
        </div>
        {/* Meet truAI section */}
        <TrueAI />
        {/* Why Choose Lens */}
        <section>
          <div className="text-center">
            {/* heading section */}
            <div className="mb-[20px]">
              <div className="text-[#fff] text-center text-[20px] font-semibold tracking-wider uppercase">
                WHY CHOOSE LENS
              </div>
              <div
                className="w-20 h-[4px] rounded-full bg-gradient-to-r mx-auto"
                style={{
                  backgroundImage: `linear-gradient(54deg, #0091ff, #9cfeff)`,
                }}
              ></div>
            </div>
            {/* content heading section */}
            <div className="mx-auto">
              <div className={`text-[#fff] text-center xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[50px] font-medium leading-normal mb-0 xl:w-[80%] lg:w-[65%] mx-auto`}>
                AI-driven solutions backed by science
              </div>
              {/* content para */}
              <p className="text-[#8a8a8a] text-center text-[20px] leading-normal my-[2rem] xl:w-[80%] lg:w-[65%] mx-auto">
                Every piece of AI technology shipped from LENS is thoroughly
                benchmarked via rigorous evaluations. With a global network of
                experts and academicians, we guarantee the most accurate and
                robust solutions in the market.
              </p>
              {/* list section */}
              <div className={`flex xl:items-center lg:items-center md:items-center sm:items-start justify-around w-[80%] mx-auto xl:flex-row lg:flex-row md:flex-row sm:flex-col`}>
                {/* first list */}
                <div>
                  <ul>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">
                        State-of-the-art solutions
                      </div>
                    </li>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">Fast & Efficient</div>
                    </li>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">
                        No extra computation fee
                      </div>
                    </li>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">No licensing fee</div>
                    </li>
                  </ul>
                </div>
                {/* second list */}
                <div>
                  <ul>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">
                        Lifetime support & upgrades
                      </div>
                    </li>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">Plug-and-Play</div>
                    </li>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">
                        24x7 Progress Monitoring
                      </div>
                    </li>
                    <li className="flex items-center mb-[20px]">
                      <div className="mr-[10px]">
                        <TickIcon />
                      </div>
                      <div className="text-[20px]">Incremental Updates</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* driven Card section */}
        <section className="mt-[80px]">
          <div className={`flex xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap xl:justify-between md:justify-center lg:justify-between`}>
            {/* here the Card comes */}
            <AICard 
              AIheading="Exclusive Rights"
              AImage={GreenAI}
              AIData="Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you."
              AIAnimation="animate-animate-substance-1"
              borderColor="border-green"
              gradient="bg-gradient-custom-green"
            />
            <AICard 
            AIheading="Research Driven"
            AImage={BlueAI}
            AIData="We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer."
            AIAnimation="animate-animate-substance-2"
            borderColor="border-blue"
            gradient="bg-gradient-custom-blue"
            />
            <AICard 
             AIheading="Plug-and-Play"
             AImage={RedAI}
             AIData="We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice."
             AIAnimation="animate-animate-substance-3"
             borderColor="border-red"
             gradient="bg-gradient-custom-red"
            />
            <AICard 
              AIheading="LifeTime Support"
              AImage={YellowAI}
              AIData="Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options."
              AIAnimation="animate-animate-substance-4"
              borderColor="border-yellow"
              gradient="bg-gradient-custom-yellow"
            />
          </div>
        </section>
        {/* our Vision Section */}
        <section className="mt-[80px]">
          <div className="text-center">
            {/* heading section */}
            <div className="text-[30px] font-[600] leading-normal uppercase">
              Our Vision
            </div>
            <div
              className="w-20 h-[4px] rounded-full bg-gradient-to-r mx-auto"
              style={{
                backgroundImage: `linear-gradient(54deg, #0091ff, #9cfeff)`,
              }}
            ></div>
            {/* AI for Social Good */}
            <div className="text-4xl md:text-5xl mt-[30px] xl:w-[80%] lg:w-[65%] mx-auto">
              AI for Social Good
            </div>
            {/* paragraph section */}
            <p className="text-[#8a8a8a] text-center text-[25px] leading-normal my-16 xl:w-[70%] lg:w-[65%] mx-auto">
              Explainable AI (XAI) is an emerging subject of machine learning
              research that refers to strategies that try to provide
              transparency to typically opaque AI models and their predictions.
            </p>
          </div>
          <div className="xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[90%] ml-auto">
            <Vision />
          </div>
        </section>
        {/* our blog section */}
        <section>
          <div className="my-40">
            {/* heading section */}
            <div className="text-center mb-9">
            <div className="text-[30px] font-semibold leading-normal uppercase">
              Our Blogs
            </div>
            <div
              className="w-20 h-[4px] rounded-full bg-gradient-to-r mx-auto"
              style={{
                backgroundImage: `linear-gradient(54deg, #0091ff, #9cfeff)`,
              }}
            ></div>
            </div>
            {/* Blog Card heading section */}
              <div className="text-center xl:w-[65%] lg:w-[65%] md:w-[50%] mx-auto">
                  <h1 className="text-[58px] font-[500]">Inhouse Mindscape</h1>
              </div>
            {/* Bog Card heading section */}
            <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] sm:w-[80%] mx-auto my-9 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {BlogCardData.map((item, i) => (
              <BlogCard
                isNew={item.Date}
                heading={item.heading}
                para={item.para}
                isLast={i === BlogCardData.length - 1}
              />
            ))}
            </div>
            {/* button of Explore More */}
            <div className="text-center">
            <Button text="Explore More"/>
            </div>
          </div>
        </section>
        {/* Get in Touch */}
        <section className="mt-[100px]">
          <div className={`flex xl:flex-row lg:flex-row md:flex-col sm:flex-col md:items-center`}>
            <div className={`bg-[#1b1c1e] pt-[5rem] xl:pr-[5rem] pb-[7rem] xl:pl-[5rem] lg:px-[5rem] md:px-[5rem] sm:px-[2rem]`}>
              <div>
                <div className="mb-[40px]">
                  <h2 className={`xl:text-[64px] lg:text-[64px] md:text-[64px] sm:text-[50px] xl:w-[80%] lg:w-[100%] md:w-[80%] sm:w-[100%] font-semibold leading-none`}>Get in touch with us</h2>
                </div>
                <p className="text-[18px] mb-[40px]">Send your enquiry now!</p>
              </div>
              {/* input section */}
              <div className="bg-[#0b0b0b] rounded-[26px] px-[10px] py-[10px] flex justify-center">
                <input type="text" placeholder="Enter Your Email" className="xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] xl:px-[8px] xl:py-[8px] lg:px-[8px] lg:py-[8px] sm:px-[4px] sm:py-[4px] text-[14px] border-[1px] border-solid border-transparent bg-[#000]" />
                <button className="xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] px-4 py-2 text-base font-medium rounded-full bg-semiblue text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer w-40">Request Demo</button>
              </div>
            </div>
            {/* image section */}
            <div>
              <Image
                src={Map}
                alt="Map"
              />
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer/>
      </div>
    </div>
    </>
  );
};

export default Home;
