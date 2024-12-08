import bannerImg from "../../public/banner-sofa.png";
import lampImg from "../../public/lamp.png";
import dotImg from "../../public/dot.png";
import Image from "next/image";

export default function Banner(){
  return (
    <main id="banner" className="w-full bg-[#f2f0ff] font-lato">
      <div className="wrapper relative py-[55px]">
        {/* --- banner main content start --- */}
        <div className="flex items-center justify-center py-10">
          <div className="w-[1000px] px-[10px] lg:px-0">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2">
              {/* --- left side start --- */}
              <div className="text-center lg:text-left">
                <p className="text-[14px] text-pink font-normal font-josefin leading-5">
                  Buy The Best For Your Palace...
                </p>
                <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-josefin font-bold leading-[48px] py-7">
                  New Furniture Collection Trends in 2024
                </h1>
                <p className="text-[16px] text-pantone-purple font-normal font-lato leading-6">
                  All you need to design the Best and Cozy interior for your comfy Home. Happy Shopping.!
                </p>
                <button className="bg-pink text-white mt-10 px-6 py-2 rounded-[3px] border-[1px] border-pink hover:bg-white hover:text-pink hover:border-[1px] hover:border-pink transition-all duration-300">
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