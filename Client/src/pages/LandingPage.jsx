import NavBar from "../components/nav-bar";
import HeroTopSection from "../components/HeroTopSection";
import OurProducts1 from "../components/our-products1";
import Roadmap from "../components/roadmap";
import OurProducts from "../components/our-products";
import SocialMediaFrames from "../components/social-media-frames";
 

const LandingPage = () => {
  return (
    <div className="relative bg-gray1-700 w-full h-[4943px] overflow-y-auto flex flex-col items-end justify-start gap-[260px] tracking-[normal] mq450:gap-[65px] mq950:gap-[130px] mq1875:h-auto">
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full shrink-0">
        <div className="w-[1544px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-[107%] shrink-0">
          <div className="w-[1649px] flex flex-col items-center justify-start gap-[48px] max-w-[107%] shrink-0 mq950:gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start pt-10 pb-[100px] pr-[21px] pl-5 box-border gap-[12px] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-5 mq450:pb-[42px] mq450:box-border mq950:pt-[26px] mq950:pb-[65px] mq950:box-border">
              <div className="relative w-[1649px] h-[887px] bg-[url('/public/gradient@3x.png')] bg-cover bg-no-repeat bg-[top] hidden max-w-full" />
              <header className="w-[1360px] flex flex-row items-start justify-start sticky top-[0] z-[99] max-w-full">
                <img
                  className="absolute my-0 mx-[!important] bottom-[-138.7px] left-[-139.7px] w-[248.4px] h-[248.4px] overflow-hidden shrink-0 object-contain z-[1]"
                  alt=""
                  src="/logo-frame@2x.png"
                />
                <NavBar />
              </header>
              <HeroTopSection />
            </div>
            <div className="w-[1480px] flex flex-col items-start justify-start py-0 px-5 box-border max-w-full">
              <OurProducts1 />
              <Roadmap />
              <OurProducts />
            </div>
          </div>
        </div>
      </div>
      <main className="absolute my-0 mx-[!important] top-[107px] left-[-634px] w-[2580px] h-[3795px] shrink-0">
        <div className="absolute top-[2575px] left-[176px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.09),_rgba(254,_204,_0,_0.02))] [filter:blur(118.3px)] w-[1220px] h-[1220px]" />
        <section className="absolute top-[1394px] left-[964px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.15),_rgba(254,_204,_0,_0.03))] [filter:blur(118.3px)] w-[1616px] h-[1616px] z-[1]" />
        <section className="absolute top-[872px] left-[0px] w-[1571px] h-[1571px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.12),_rgba(254,_204,_0,_0.02))] [filter:blur(118.3px)] w-full h-full" />
          <img
            className="absolute top-[465px] left-[276.1px] w-[696.7px] h-[696.7px] overflow-hidden object-contain opacity-[0.7] z-[3]"
            alt=""
            src="/empty-frame@2x.png"
          />
        </section>
        <div className="absolute top-[0px] left-[1353px] w-[1125px] h-[1125px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.06),_rgba(254,_204,_0,_0.01))] [filter:blur(118.3px)] w-full h-full z-[3]" />
          <img
            className="absolute top-[466.6px] left-[416.6px] w-[559.8px] h-[559.8px] overflow-hidden object-contain z-[6]"
            alt=""
            src="/blank-frame@2x.png"
          />
        </div>
      </main>
      <SocialMediaFrames /> 
      <div className="relative rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(254,_204,_0,_0.12),_rgba(254,_204,_0,_0.02))] [filter:blur(118.3px)] w-[823px] h-[803px] shrink-0 max-w-full" />
    </div>
  );
};

export default LandingPage;
