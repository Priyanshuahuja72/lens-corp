"use client";
import React, { useState } from "react";
import styles from "./Custom/MyComponent.module.css"
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
// AI Image Component 
import GreenAI from "../public/image/greenAI.webp";
import BlueAI from "../public/image/blueAI.webp";
import RedAI from "../public/image/redAI.webp";
import YellowAI from "../public/image/yellowAI.webp"
const Home = () => {
  const [hover, setHover] = useState(false);
  
  return (
    <div>
      <Hero />
      <div className="mt-[40px]">
        <h1 className="text-center text-[70px] font-semibold">About Us</h1>
        <div
          className="w-40 h-2 rounded-full bg-gradient-to-r mx-auto"
          style={{
            backgroundImage: `linear-gradient(54deg, #0091ff, #9cfeff)`,
          }}
        ></div>
        {/* the cart div comes here */}
        <div className={`my-[30px] mx-[60px] ${styles.MainCart428}`}>
          {/* this is the entire div */}
          <div 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`transition-all duration-200 ease-in-out flex xl:flex-row lg:flex-col  lg:items-center md:flex-col md:items-center w-[90%] mx-auto bg-[#1b1c1e] p-[40px] rounded-xl ${styles.flexAt248} ${hover ? 'transform scale-105 transition-all duration-200 ease-in-out': ''}`}>
            {/*--left-section---*/}
            <div className={`w-[80%] text-center md:w-[100%] ${styles.welComeAt428}`}>
              <div className={`w-[70%] lg:mx-auto md:w-[100%] ${styles.welComeAt428}`}>
                <h1 className="text-primary-color text-4xl font-extrabold mb-8">
                  Welcome to LENS
                </h1>
              </div>
              <div className={`w-[80%] mb-[30px] md:mx-auto md:w-[100%] ${styles.welComeAt428}`}>
                <span className="text-aboutPara text-[1rem] font-light mt-1 opacity-80 p-1 w-3/4 leading-loose">
                  We put our hearts, souls and sweat into designing and
                  developing custom AI - powered solutions for your business so
                  you do not have to.
                </span>
              </div>
             <Button text= {"Learn More"}/>
            </div>
            {/* --right-section---*/}
            <div className={` bg-white p-4 rounded-lg max-h-[100%] w-[55%] md:w-[100%] ${styles.welComeAt428}`}>
              <Image
                alt="Team-Image"
                src={teamImg}
                className={`w-[450px] h-[351px] md:w-[100%] rounded-10 transition duration-300 ease-in-out overflow-hidden object-cover rounded-[20px]`}
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
        <div className="w-[70%] ml-auto mr-auto text-center md:w-[100%]">
          <p className="my-[80px] mx-auto text-center text-5xl font-medium">
            We provide Artificial Intelligence Services
          </p>
        </div>
        {/* Now this is the card section */}
        <div className={`xl:mx-[250px] lg:mx-[80px] grid xl:grid-cols-2 grid-rows-2 gap-x-12 gap-y-12 md:mx-[100px] md:grid-cols-1 md:grid-rows-1 ${styles.gridAt428}`}>
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
            <div className="xl:w-[56%] lg:w-[90%] mx-auto">
              <div className={`text-[#fff] text-center text-[60px] font-medium leading-normal mb-0 ${styles.fontAt428}`}>
                AI-driven solutions backed by science
              </div>
              {/* content para */}
              <p className="text-[#8a8a8a] text-center text-[20px] leading-normal mb-[2rem]">
                Every piece of AI technology shipped from LENS is thoroughly
                benchmarked via rigorous evaluations. With a global network of
                experts and academicians, we guarantee the most accurate and
                robust solutions in the market.
              </p>
              {/* list section */}
              <div className={`flex items-center justify-around w-[80%] mx-auto ${styles.flexAt248}`}>
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
          <div className="xl:mx-[50px] lg:mx-[20px] flex justify-center">
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
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-[30px]">
              AI for Social Good
            </div>
            {/* paragraph section */}
            <p className="text-[#8a8a8a] text-center text-[25px] leading-normal my-16 xl:w-[60%] lg:w-[100%] mx-auto">
              Explainable AI (XAI) is an emerging subject of machine learning
              research that refers to strategies that try to provide
              transparency to typically opaque AI models and their predictions.
            </p>
          </div>
          <div className="w-[80%] ml-auto">
            <Vision />
          </div>
        </section>
        {/* Get in Touch */}
        <section className="mt-[100px]">
          <div className={`flex xl:items-center xl:flex-row lg:flex-col md:flex-col md:items-center ${styles.flexAt248}`}>
            <div className={`bg-[#1b1c1e] pt-[5rem] pr-[5rem] pb-[7rem] pl-[5rem] ${styles.paddingAt428}`}>
              <div>
                <div className="mb-[40px]">
                  <h2 className={`text-[64px] w-[80%] font-semibold leading-none ${styles.fontAt428}`}>Get in touch with us</h2>
                </div>
                <p className="text-[18px] mb-[40px]">Send your enquiry now!</p>
              </div>
              {/* input section */}
              <div className="bg-[#0b0b0b] rounded-[26px] px-[10px] py-[10px] flex justify-center">
                <input type="text" placeholder="Enter Your Email" className="w-[80%] px-[8px] py-[8px] text-[14px] border-[1px] border-solid border-transparent bg-[#000]" />
                <button className="px-4 py-2 text-base font-medium rounded-full bg-semiblue text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer w-40">Request Demo</button>
              </div>
            </div>
            {/* image section */}
            <div className="lg:mx-auto lg:mt-[20px]">
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
  );
};

export default Home;
