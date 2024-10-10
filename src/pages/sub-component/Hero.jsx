import { useState, useEffect } from "react";
import { getPortfolio } from "@/services/apis";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { ExternalLink, Github, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    getPortfolio()
      .then((data) => setPortfolio(data.user))
      .catch(console.error);
  }, []);

  if (!portfolio) return <div>Loading...</div>;

  return (
    <div className="w-full p-4 md:p-8 lg:p-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2 animate-pulse" />
        <p>Online</p>
      </div>
      <h1 className="overflow-x-hidden text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] tracking-[2px] mb-4 font-bold">
        Hey, {portfolio.fullName}
      </h1>
      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.5rem] 
      sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] tracking-[15px] font-extrabold">
        <Typewriter
          words={["FULLSTACK DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER", "CODER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <div className="w-fit px-5 py-2 bg-white bg-opacity-20 rounded-[20px] flex gap-5 items-center mt-4 md:mt-8 lg:mt-10">
        {portfolio.instagramURL && (
          <a href={portfolio.instagramURL} target="_blank" rel="noopener noreferrer">
            <Instagram className="text-pink-500 w-7 h-7 hover:scale-110 transition-transform" />
          </a>
        )}
        {portfolio.facebookURL && (
          <a href={portfolio.facebookURL} target="_blank" rel="noopener noreferrer">
            <Facebook className="text-blue-800 w-7 h-7 hover:scale-110 transition-transform" />
          </a>
        )}
        {portfolio.linkedInURL && (
          <a href={portfolio.linkedInURL} target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-sky-500 w-7 h-7 hover:scale-110 transition-transform" />
          </a>
        )}
        {portfolio.twitterURL && (
          <a href={portfolio.twitterURL} target="_blank" rel="noopener noreferrer">
            <Twitter className="text-blue-800 w-7 h-7 hover:scale-110 transition-transform" />
          </a>
        )}
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10 flex gap-3">
        {portfolio.githubURL && (
          <a href={portfolio.githubURL} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row bg-black text-white hover:bg-gray-800 transition-colors">
              <Github />
              <span>Github</span>
            </Button>
          </a>
        )}
        {portfolio.resume?.url && (
          <a href={portfolio.resume.url} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <ExternalLink />
              <span>Resume</span>
            </Button>
          </a>
        )}
      </div>
      <p className="mt-8 text-xl tracking-[2px] bg-white bg-opacity-20 p-4 rounded-lg">
        {portfolio.aboutMe}
      </p>
      <hr className="my-8 md:my-10 border-white border-opacity-50" />
    </div>
  );
}

export default Hero;