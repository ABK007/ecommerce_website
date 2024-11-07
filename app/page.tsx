import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Sora } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={sora.className}>
      <Navbar />

      {/* Hero Section */}
      <div className="container w-full flex flex-row pl-[7%] pr-[4%] pt-[48px]">
        <div className="w-[60%] flex items-start flex-col pb-[16px] space-y-5">
          <div className="text-[#0000FF] w-fit text-[16px] leading-5 font-semibold bg-[#E1EDFF] px-3 py-1 rounded-sm">
            Sale 70%
          </div>
          <h2 className=" text-black text-[56px] font-[700] leading-[3.5rem] tracking-normal">
            An Industrial Take on <br /> Streetwear
          </h2>
          <p className="text-[16px] leading-6 font-normal text-[#666666]">
            Anyone can beat you but no one can beat your outfit as long as you
            <br />
            wear dine outfits.
          </p>

          <Button />

          <div className="flex items-center space-x-14 pt-[80px]">
            <Image
              src="/bazaar.png"
              alt="bazaar logo"
              width={100}
              height={60}
            />
            <Image
              src="/bustle.png"
              alt="bazaar logo"
              width={100}
              height={60}
            />
            <Image
              src="/versace.png"
              alt="bazaar logo"
              width={100}
              height={60}
            />
            <Image
              src="/instyle.png"
              alt="bazaar logo"
              width={100}
              height={60}
            />
          </div>
        </div>

        <div className="w-[40%] items-center ">
          <div className="bg-[#FFECE3] rounded-full h-[100%] z-0">
            <Image
              src="/woman.png"
              alt="woman"
              width={650}
              height={650}
              className="z-10"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
