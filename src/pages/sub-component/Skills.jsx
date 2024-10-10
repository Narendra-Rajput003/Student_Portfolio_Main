import React, { useEffect, useState } from 'react';
import { getSkills } from '@/services/apis';
import { Card } from '@/components/ui/card';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => setSkills(data.skills))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12 px-4 md:px-8 lg:px-12">
      {/* Title Section */}
      <h1
        className="text-tubeLight-effect text-[1.75rem] sm:text-[2.5rem] 
        md:text-[2.75rem] lg:text-[3.25rem] tracking-[10px] 
        dancing_text mx-auto w-fit font-bold"
        style={{
          background: "linear-gradient(90deg, #ff6f61, #6f61ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        SKILLS
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {skills &&
          skills.map((skill) => {
            return (
              <Card
                key={skill._id}
                className="h-fit p-3 flex flex-col justify-center items-center gap-2 
                bg-white shadow-md rounded-lg transform transition-all 
                duration-300 hover:scale-110 hover:shadow-xl hover:bg-gray-50 hover:border-t-4 
                hover:border-indigo-500"
              >
                {/* Skill Icon */}
                <img
                  src={skill.svg?.url}
                  alt={skill.title}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                />

                {/* Skill Title */}
                <h2 className="text-sm sm:text-base font-semibold text-center text-gray-800">
                  {skill.title}
                </h2>

                {/* Skill Description */}
                <p className="text-xs text-center text-gray-500">
                  {skill.description}
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Skills;
