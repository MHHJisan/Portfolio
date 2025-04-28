"use client";

import { Calendar } from "lucide-react";
import { EducationItem, ExperienceItem } from "@/types";

export default function Education() {
  const educationData: EducationItem[] = [
    {
      period: "2027 - 2019",
      title: "Bachelor Degree",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia dignissimos ipsa tenetur, non reiciendis assumenda fuga soluta impedit? Commodi alias enim placeat voluptas dolore incidunt. Atque id accusantium expedita?",
    },
    {
      period: "2027 - 2019",
      title: "College/HSC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia dignissimos ipsa tenetur, non reiciendis assumenda fuga soluta impedit? Commodi alias enim placeat voluptas dolore incidunt. Atque id accusantium expedita?",
    },
    {
      period: "2027 - 2019",
      title: "School/SSC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia dignissimos ipsa tenetur, non reiciendis assumenda fuga soluta impedit? Commodi alias enim placeat voluptas dolore incidunt. Atque id accusantium expedita?",
    },
  ];

  const experienceData: ExperienceItem[] = [
    {
      period: "2027 - 2019",
      title: "Bioforge Healthcare System LTD.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia dignissimos ipsa tenetur, non reiciendis assumenda fuga soluta impedit? Commodi alias enim placeat voluptas dolore incidunt. Atque id accusantium expedita?",
    },
    {
      period: "2027 - 2019",
      title: "Octagon Learning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia dignissimos ipsa tenetur, non reiciendis assumenda fuga soluta impedit? Commodi alias enim placeat voluptas dolore incidunt. Atque id accusantium expedita?",
    },
    {
      period: "2027 - 2019",
      title: "ISZTECHS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia dignissimos ipsa tenetur, non reiciendis assumenda fuga soluta impedit? Commodi alias enim placeat voluptas dolore incidunt. Atque id accusantium expedita?",
    },
  ];

  return (
    <section
      id="education"
      className="flex justify-center items-center flex-col min-h-auto pb-20 pl-8"
    >
      <h2 className="text-5xl text-center my-12">
        My <span className="text-[#00abf0]">Journey</span>
      </h2>
      <div className="flex flex-wrap gap-20">
        <div className="flex-1 min-w-[40rem]">
          <h3 className="text-2xl ml-8 mb-6">Education</h3>
          <div className="border-l-2 border-[#00abf0]">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute top-0 left-[-1.1rem] w-8 h-8 bg-[#00abf0] rounded-full"></div>
                <div className="relative p-6 border-2 border-[#00abf0] rounded-lg mb-8 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-0 h-full bg-[#112e42] z-[-1] transition-all duration-500 group-hover:w-full"></div>
                  <div className="text-lg text-[#00abf0] pb-2 flex items-center">
                    <Calendar className="mr-2" size={18} />
                    {item.period}
                  </div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-base pt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 min-w-[40rem]">
          <h3 className="text-2xl ml-8 mb-6">Experience</h3>
          <div className="border-l-2 border-[#00abf0]">
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute top-0 left-[-1.1rem] w-8 h-8 bg-[#00abf0] rounded-full"></div>
                <div className="relative p-6 border-2 border-[#00abf0] rounded-lg mb-8 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-0 h-full bg-[#112e42] z-[-1] transition-all duration-500 group-hover:w-full"></div>
                  <div className="text-lg text-[#00abf0] pb-2 flex items-center">
                    <Calendar className="mr-2" size={18} />
                    {item.period}
                  </div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-base pt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
