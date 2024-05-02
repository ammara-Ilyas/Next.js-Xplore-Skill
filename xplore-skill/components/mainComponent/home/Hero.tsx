import React from "react";
import Link from "next/link";
import bg from "@/images/background/back1.png";

function Hero() {
  return (
    <div
      className="font-extrabold	flex items-center pt-5 flex-col gap-5 h-screen justify-center mb-20"
      style={{
        backgroundImage: `linear-gradient(#517e86c4, #949fdf1a), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-8xl text-customColor-primary">GET READY</h1>
      <h2 className="text-5xl text-emerald-200">TO DISCOVER CAMPUS</h2>
      <p className=" w-2/3 text-center text-xl font-normal text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        consequuntur corrupti sapiente aut porro esse blanditiis in quae
        perspiciatis quo.
      </p>
      <Link href="/">
        <button className="border-white text-white border p-3 px-4 rounded-md transition  ease-out hover:border-emerald-400 duration-300	 hover:bg-emerald-400 font-normal ">
          Visit us to know More
        </button>
      </Link>
    </div>
  );
}

export default Hero;