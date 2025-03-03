import React from 'react';

const HeroSection = () => {
  return (
    <div className="mt-4 md:mt-8 w-s">
      <div className="md:p-4">
        <div
          className="
            flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat 
            md:gap-8 md:rounded-xl items-start justify-end px-4 pb-10 md:px-10
          "
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/173148b8-3f5e-4fd0-ae95-8a36a3aa89a4.png")',
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
            "Your fall, our call .!"
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal md:text-base">
              The BalanceGuard device is an AI-powered solution that can detect falls, notify
              family members, and call for help if needed.
            </h2>
          </div>
          <button
            className="
              flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center 
              overflow-hidden rounded-xl h-10 px-4 md:h-12 md:px-5 bg-[#18191a] text-white 
              text-sm font-bold leading-normal tracking-[0.015em] md:text-base
            "
          >
            <span className="truncate">Learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
