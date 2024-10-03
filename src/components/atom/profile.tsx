import Image from 'next/image';

export const Profile = () => (
  <div className="w-[255px] h-[69px] relative flex-col justify-start items-start flex">
    <div className="w-[39px] h-[39px] rounded-full justify-center items-center inline-flex">
      <Image className="w-[39px] h-[39px]" src="/friend/نورين.jpg" alt="Profile Picture" width={39} height={39} />
    </div>
    <div className="text-[#0f1419] text-base font-bold font-['SF Compact Display']">Jerome Bell</div>
    <div className="w-[33px] h-[33px] px-[7.91px] justify-center items-center inline-flex">
      <div className="w-[17.19px] h-[4.81px] relative"></div>
    </div>
    <div className="text-[#5b7083] text-base font-medium font-['SF Compact Display']">@afonsoinocente</div>
  </div>
);
