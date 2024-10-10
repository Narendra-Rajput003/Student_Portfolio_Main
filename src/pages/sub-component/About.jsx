import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden px-4 lg:px-0">
      {/* Heading Section */}
      <div className="relative mb-12">
        <h1
          className="text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] 
          leading-tight tracking-tight text-center font-extrabold mb-4"
          style={{
            background: "linear-gradient(90deg, #ff6f61, #de6fff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          ABOUT <span className="text-white font-extrabold">ME</span>
        </h1>
        {/* <span className="absolute w-full h-1 top-8 md:top-10 lg:top-12 z-[-1] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"></span> */}
      </div>

      {/* Introduction Text */}
      <div className="text-center mb-10">
        <p className="uppercase text-lg sm:text-xl md:text-2xl text-gray-600 tracking-wider">
          A Glimpse Into Who I Am
        </p>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="/me.jpg"
              alt="avatar"
              className="h-[240px] sm:h-[320px] md:h-[350px] lg:h-[400px] 
              w-auto object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left gap-6 px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
              Hello! I’m <span className="font-bold text-indigo-600">Jadon Narendra</span>, a dedicated Software Engineering student at{" "}
              <span className="font-bold text-indigo-600">Atmiya University</span>, set to graduate in 2025. I’m passionate about web development and specialize in creating seamless, user-centric digital experiences.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
              When I’m not immersed in coding, you’ll find me exploring new movies, indulging in video games, or experimenting with culinary creations in the kitchen.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
              My commitment to delivering high-quality work and embracing challenges with determination is what drives me. I’m always eager to learn, grow, and contribute meaningfully to every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
