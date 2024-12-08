import bannerImg from "../../public/banner-sofa.png";
import lampImg from "../../public/lamp.png";
import dotImg from "../../public/dot.png";
import Image from "next/image";

export default function Banner(){
  return (
    <main id="banner" className="w-full bg-[#F2F0FF]">
      <div className="wrapper relative py-[55px]">
        {/* --- banner main content start --- */}
        <div className="flex items-center justify-center py-10">
          <div className="w-[1000px] px-[10px] lg:px-0">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2">
              {/* --- left side start --- */}
              <div className="text-center lg:text-left">
                <p className="text-[14px] text-[#FB2E86] font-normal leading-5">
                  Best Furniture For Your Castle....
                </p>
                <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-[48px] py-7">
                  New Furniture Collection Trends in 2024
                </h1>
                <p className="text-[16px] text-[#8A8FB9] font-normal leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo
                </p>
                <button className="bg-[#FB2E86] text-white mt-10 px-6 py-2 rounded-[3px] border-[1px] border-[#FB2E86] hover:bg-white hover:text-[#FB2E86] hover:border-[1px] hover:border-pink-600">
                  Shop Now
                </button>
              </div>
              {/* --- left side end --- */}

              {/* --- right side start --- */}
              <div className="hidden lg:flex justify-center lg:justify-end">
                {/* <img
                  className="max-w-[450px] h-full"
                  src={bannerImg}
                  alt="Sofa"
                /> */}

                <Image
                className="max-w-[450px] h-full"
                src={bannerImg}
                alt="Sofa"
                width={450}
                height={450}

                />
               
              </div>
              {/* --- right side end --- */}
            </div>
          </div>
        </div>
        {/* --- banner main content end --- */}

        {/* --- lamp image & Dot circle image --- */}
        <div className="hidden xl:block xl:absolute xl:top-0 xl:left-[-70px] 2xl:left-[-80px] xl:z-10">
         <Image className="max-w-[280px]" src={lampImg} alt="lamp image" />
        </div>
        <div className="hidden xl:block xl:absolute xl:left-2 2xl:left-0 xl:bottom-20">
          <Image src={dotImg} alt="" />
        </div>
        {/* --- lamp image & Dot circle image --- */}
      </div>
    </main>
  );
};