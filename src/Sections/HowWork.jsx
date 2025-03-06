import React from 'react';

const HowWork = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 py-10   ">
      <h1 className="text-[#111518] tracking-light text-[32px] shadow-2xl font-bold  leading-tight @[480px]:text-4xl max-w-[720px]">
        How it works
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] px-7 gap-3">
        {/* Card 1 */}
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/cc289d89-9290-49bc-93d0-6ad5a184f12d.png")',
            }}
          ></div>
          <div>
            <p className="text-[#111518] text-base font-medium leading-normal">
              How it works
            </p>
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              The BalanceGuard  uses a combination of sensors and AI to detect falls. It&apos;s designed to be easy to set up and use, and can be installed in any home.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/aaae4b96-af05-47ba-becb-9eda9b9bef03.png")',
            }}
          ></div>
          <div>
            <p className="text-[#111518] text-base font-medium leading-normal">
              Who it&apos;s for
            </p>
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              The  BalanceGuard is designed for seniors who want to live independently and their families. It can also be used in assisted living facilities and other care settings.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/0d3eaa36-7381-462f-ad61-6dbf5134e286.png")',
            }}
          ></div>
          <div>
            <p className="text-[#111518] text-base font-medium leading-normal">
              Why it matters
            </p>
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              Falls are a leading cause of injury and death among older adults. The InCare Home Monitor can help prevent falls and provide peace of mind for seniors and their families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
