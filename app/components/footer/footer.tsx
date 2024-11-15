import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="container pl-[7%] pr-[4%] w-full pb-[100px] grid grid-cols-5 grid-rows-1 text-[#666666]">
      <div className="flex flex-col gap-10 col-span-2 items-start pr-10">
        <Image src="/dine_logo.png" alt="" width={180} height={30} />
        <p className="text-[400] text-[16px] leading-[22px] ">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex  gap-5">
          <Image
            src="/twitter.svg"
            alt=""
            width={50}
            height={50}
            className="px-4 py-3 bg-slate-200 rounded-lg"
          />
          <Image
            src="/facebook.svg"
            alt=""
            width={50}
            height={50}
            className="px-5 py-3 bg-slate-200 rounded-lg"
          />
          <Image
            src="/linkedin.svg"
            alt=""
            width={50}
            height={50}
            className="px-4 py-3 bg-slate-200 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-[700] text-xl">Company</h2>
        <h2>About</h2>
        <h2>Terms of Use</h2>
        <h2>Privacy Policy</h2>
        <h2>How It Works</h2>
        <h2>Contact Us</h2>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-[700] text-xl">Support</h2>
        <h2>Support Carrier</h2>
        <h2>24h Service</h2>
        <h2>Quick Chat</h2>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-[700] text-xl">Contact</h2>
        <h2>Whatsapp</h2>
        <h2>24h Service</h2>
      </div>
    </div>
  );
}

export default Footer;
