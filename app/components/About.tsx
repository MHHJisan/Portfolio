"use client";

import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center flex-col gap-8 bg-[#112e42] pb-24"
    >
      <h2 className="text-5xl mt-12 mb-12 text-center">
        About <span className="text-[#00abf0]">Me</span>
      </h2>
      <div className="relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
        <img
          src="/self.jpeg"
          alt="Jisan"
          className="w-[90%] h-[90%] rounded-full border-2 border-[#00abf0]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 w-full h-full rounded-full border-t-2 border-b-2 border-[#112e42] border-l-2 border-r-2 border-[#00abf0]"></div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold my-8">Software Engineer</h3>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          repudiandae perspiciatis impedit dolorum modi natus aliquam? Quasi,
          molestiae optio voluptas atque officia quod explicabo minus dicta,
          dolores, repellendus commodi perspiciatis?
        </p>
      </div>
      <div className="inline-block w-[15rem] h-[3rem]">
        <Link
          href="#"
          className="relative flex justify-center items-center w-full h-full border-2 border-[#00abf0] rounded-lg text-lg text-[#00abf0] font-semibold tracking-wider z-10 transition-colors hover:bg-[#00abf0] hover:text-[#112e42]"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
