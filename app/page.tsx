"use client"
import React from "react";
import Image from "next/image";
import { Sora } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";
import {useRouter} from "next/navigation";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const navigate=(name: string) => {
    router.push(name)
  }

  return (
    <main className={sora.className}>
      <Navbar />

      {/* Hero Section */}
      <div className="container w-full flex flex-row pl-[7%] pr-[4%] pt-[48px]">
        {/* Left Side of Hero Section  */}
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

          <Button text="Start Shopping" icon="yes" url="/productlist"/>

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

        {/* Right Side of Hero Section  */}
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

      {/* Promotion Section */}
      <div className="container pt-24 pl-[7%] pr-[4%] items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-[12px] text-[#0062F5] font-[700] leading-4">
            PROMOTIONS
          </h2>
          <h2 className="text-[32px] text-[#212121] font-[700] leading-10 pt-5">
            Our Promotions Events
          </h2>
        </div>

        {/* left section */}
        <div className="pt-16 grid grid-cols-2 items-center w-full gap-6">
          <div className="flex flex-col gap-6">
            <div className="bg-[#D6D6D8] px-20 grid grid-cols-2 items-center pt-2">
              <div className=" flex flex-col items-start">
                <h2 className="text-[#212121] text-3xl font-[600]">
                  GET UPTO <span className="text-4xl font-[800]">60%</span>
                </h2>
                <h2 className="text-[18px] text-[#212121] font-[400] leading-6">
                  For the summer season
                </h2>
              </div>
              <Image
                src="/promo-woman.png"
                alt="woman"
                width={260}
                height={200}
              />
            </div>

            <div className="bg-[#212121] flex flex-col items-center text-white py-11">
              <h2 className="text-4xl font-extrabold"> Get 30% off</h2>
              <h2 className="text-sm font-normal pt-2">use promo code</h2>
              <h2 className="bg-[#474747] text-[17px] px-2 py-1 mt-1 tracking-widest">
                DINEWEEKENDSALE
              </h2>
            </div>
          </div>
          {/* Right section */}
          <div className="flex flex-row gap-6">
            <div className="bg-[#EFE1C7] flex flex-col items-start px-4 pt-2">
              <h2 className="text-[15px] leading-6 font-[400]">
                Flex Sweatshirt
              </h2>
              <div className="flex gap-2 text-[16px] leading-6 font-[400] text-[#212121] pb-2">
                <h2 className="line-through ">$100.00</h2>
                <h2 className="font-[600]">$75.00</h2>
              </div>
              <Image src="/promo-man-1.png" alt="" width={280} height={340} />
            </div>

            <div className="bg-[#D7D7D9] flex flex-col items-start px-4 pt-2">
              <h2>Flex Plush Button Bomber</h2>
              <div className="flex gap-2 text-[16px] leading-6 font-[400] text-[#212121]">
                <h2 className="line-through">$225.00</h2>
                <h2 className="font-[600]">$190.00</h2>
              </div>
              <Image src="/promo-man-2.png" alt="" width={280} height={340} />
            </div>
          </div>
        </div>
      </div>
      {/* product section */}
      <div className="container pt-24 pl-[7%] pr-[4%] items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-[12px] text-[#0062F5] font-[700] leading-4">
            PRODUCTS
          </h2>
          <h2 className="text-[32px] text-[#212121] font-[700] leading-10 pt-5">
            Check What We Have
          </h2>
        </div>

        <div className="flex items-start pt-16 justify-between">
          <div className="items-start flex flex-col">
            <Image
              src="/full-black-woman.png"
              alt=""
              width={380}
              height={400}
            />
            <div className="items-start font-[600] tracking-[0.53px] gap-1 pt-2">
              <h2>Flex Plush Button Bomber</h2>
              <h2>$195</h2>
            </div>
          </div>
          <div className="items-start flex flex-col">
            <Image
              src="/full-cream-woman.png"
              alt=""
              width={380}
              height={400}
            />
            <div className="items-start font-[600] tracking-[0.53px] gap-1 pt-2">
              <h2>Cameryn Sash Tie Dress</h2>
              <h2>$545</h2>
            </div>
          </div>
          <div className="items-start flex flex-col">
            <Image src="/full-grey-woman.png" alt="" width={380} height={400} />
            <div className="items-start font-[600] tracking-[0.53px] gap-1 pt-2">
              <h2>Flex Sweatshirt</h2>
              <h2>$175</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits and feature Section */}
      <div className="pt-24 pl-[52%] pr-[4%] z-10 -mb-12">
        <h2 className="font-[700] text-4xl text-[#212121] text-left leading-[55px] ">
          Unique and Authentic Vintage <br /> Designer Jewellery
        </h2>
      </div>
      <div className=" pl-[7%] pr-[4%] grid grid-cols-2 bg-[#FBFCFF] py-24 gap-10 -z-20">
        <div className="grid grid-cols-2 grid-rows-2 items-center w-fit">
          <div className="absolute z-10">
            <h2 className="font-[800] text-[110px] leading-[110px] text-gray-200">
              Different <br /> from <br /> Others
            </h2>
          </div>

          <div className="flex flex-col items-start w-fit z-20">
            <h2 className="font-[600] text-lg tracking-[0.54px] text-[#212121] w-fit">
              Using Good Quality Materials
            </h2>
            <p className="font-[300] text-[16px] tracking-[0.8px] leading-[22px] text-[#212121] w-fit">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-start w-fit z-20">
            <h2 className="font-[600] text-lg tracking-[0.54px] text-[#212121] w-fit">
              Modern Fashion Design
            </h2>
            <p className="font-[300] text-[16px] tracking-[0.8px] leading-[22px] text-[#212121] w-fit">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-start w-fit z-20">
            <h2 className="font-[600] text-lg tracking-[0.54px] text-[#212121] w-fit">
              100% Handmade Products
            </h2>
            <p className="font-[300] text-[16px] tracking-[0.8px] leading-[22px] text-[#212121] w-fit">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-start w-fit z-20">
            <h2 className="font-[600] text-lg tracking-[0.54px] text-[#212121] w-fit">
              Discount For Bulk Orders
            </h2>
            <p className="font-[300] text-[16px] tracking-[0.8px] leading-[22px] text-[#212121] w-fit">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="-ml-20">
          <div className="flex flex-row items-center gap-6">
            <Image src="/full-grey-woman.png" alt="" width={284} height={350} />
            <div className="flex flex-col gap-10">
              <p className="text-[14px]">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Button text="See All Products" icon="no" url="/productlist" />
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Newsletter Section */}
      <div className="container pl-[7%] pr-[4%] py-28 w-full flex justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center w-full z-0">
            <h2 className="absolute font-[800] text-gray-200 text-[120px] leading-[110px] text-center">
              Newsletter
            </h2>
          </div>

          <h2 className="text-center font-[700] text-3xl z-10">
            Subscribe Our Newsletter
          </h2>
          <p className="text-center z-10 text-[16px] leading-5">
            Get latest information and promo offers directly
          </p>
          <div className="flex justify-center w-full gap-1 pt-6 z-10">
            <input
              type="text"
              placeholder="Input email address"
              className="w-[300px] px-4 py-1 rounded text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2"
            />
            <button onClick= {()=> navigate("/products")} className="font-semibold px-[20px] py-[5px] bg-[#212121] text-white flex items-center gap-2 w-fit">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* Footer Section */}

      <Footer />

      
    </main>
  );
}
