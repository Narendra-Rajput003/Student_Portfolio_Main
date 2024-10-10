import { Card } from "@/components/ui/card";
import { getApps } from "@/services/apis";
import React, { useEffect, useState } from "react";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getMyApps = async () => {
      getApps()
        .then((data) => setApps(data.softwareApplications))
        .catch(console.error);
    };
    getMyApps();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 px-2 md:px-4 lg:px-6">
      {/* Title Section */}
      <h1
        className="text-tubeLight-effect text-[1.25rem] sm:text-[1.75rem] 
        md:text-[2rem] lg:text-[2.25rem] tracking-[8px] 
        mx-auto w-fit font-bold uppercase"
        style={{
          background: "linear-gradient(90deg, #ff6f61, #de6fff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        My Apps
      </h1>

      {/* Apps Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {apps &&
          apps.map((element) => (
            <Card
              key={element._id}
              className="h-auto p-2 flex flex-col justify-center items-center gap-2 
              bg-white/60 backdrop-blur-lg rounded-lg shadow-lg 
              transition-transform transform hover:scale-105 hover:shadow-2xl 
              hover:bg-white/80 duration-300 ease-in-out"
            >
              {/* App Icon */}
              <img
                src={element.svg?.url}
                alt="app-icon"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-opacity hover:opacity-90"
              />

              {/* App Title */}
              <h2 className="text-xs font-semibold text-center text-gray-800 hover:text-gray-900 transition-colors">
                {element.name}
              </h2>

              {/* App Description */}
              <p className="text-[10px] text-center text-gray-600">
                {element.description}
              </p>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Apps;
