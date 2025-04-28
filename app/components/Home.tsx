"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[10%] pt-24 bg-cover bg-right bg-no-repeat"
    >
      <div className="max-w-[80%]">
        <h1 className="relative text-5xl font-bold leading-tight animate-fadeIn">
          Hi, I'm Jisan
        </h1>
        <h3 className="relative text-3xl font-bold text-[#00abf0] animate-fadeIn delay-100">
          Software Developer
        </h3>
        <p className="relative text-base my-5 mx-0 animate-fadeIn delay-200">
          I am eager to take challenges and tackle them using knowledge,
          perception and innovation to pursue long term success career in
          dynamic and professional environment of any organization through my
          attitude, hard work, dedication and determination.
        </p>
        <div className="relative flex justify-between w-[345px] h-[46px] animate-fadeIn delay-300">
          <Link
            href="#"
            className="relative flex justify-center items-center w-[150px] h-full border-2 border-[#00abf0] rounded-lg text-lg text-[#00abf0] font-semibold tracking-wider z-10 transition-colors hover:bg-[#00abf0] hover:text-[#112e42]"
          >
            Hire Me
          </Link>
          <Link
            href="#"
            className="relative flex justify-center items-center w-[150px] h-full border-2 border-[#00abf0] rounded-lg text-lg text-[#00abf0] font-semibold tracking-wider z-10 transition-colors hover:bg-[#00abf0] hover:text-[#112e42]"
          >
            Let's Talk
          </Link>
        </div>
      </div>
      <div className="absolute bottom-12 w-[170px] flex justify-between">
        <a
          href="#"
          className="relative flex justify-center items-center w-8 h-8 border-2 border-[#00abf0] rounded-full text-[#00abf0] z-10 transition-colors hover:bg-[#00abf0] hover:text-[#112e42]"
        >
          <Facebook size={20} />
        </a>
        <a
          href="#"
          className="relative flex justify-center items-center w-8 h-8 border-2 border-[#00abf0] rounded-full text-[#00abf0] z-10 transition-colors hover:bg-[#00abf0] hover:text-[#112e42]"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#"
          className="relative flex justify-center items-center w-8 h-8 border-2 border-[#00abf0] rounded-full text-[#00abf0] z-10 transition-colors hover:bg-[#00abf0] hover:text-[#112e42]"
        >
          <Youtube size={20} />
        </a>
        <a
          href="#"
          className="relative flex justify-center items-center w-8 h-8 border-2 border-[#00abf0] rounded-full text-[#00abf0] z-10 transition-colors hover:bg-[#00abf0] hover:text-[#112e42]"
        >
          <Instagram size={20} />
        </a>
      </div>
      {/* <div className="absolute top-0 right-[30px] w-[500px] h-full bg-transparent border-2 border-red-500 transition-all duration-300 bg-[url('/self.jpeg')] bg-no-repeat"></div> */}
    </section>
  );
}
