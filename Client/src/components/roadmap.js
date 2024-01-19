import RoadmapCard from "./roadmap-card";
 

const Roadmap = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="w-full [background:linear-gradient(180deg,_#fecc00,_#fecc00_67.23%,_#0e0e0e_67.34%,_rgba(14,_14,_14,_0))] flex flex-col items-end justify-start py-[60px] px-0 box-border relative gap-[169px] max-w-[1600px] z-[2] text-left text-37xl text-black font-kanit mq450:gap-[21px] mq950:gap-[42px] mq950:pt-[39px] mq950:pb-[39px] mq950:box-border mq1400:gap-[84px] mq1875:max-w-full">
   
      
      <div className="w-[1300px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full text-center text-5xl text-white font-body-md-regular">
        <div className="w-[1200px] flex flex-row items-start justify-between gap-[20px] max-w-[141%] shrink-0 mq450:flex-wrap mq950:flex-wrap mq1400:flex-wrap mq1875:flex-wrap">
          <div className="w-[1200px] flex flex-row items-center justify-center [row-gap:20px] max-w-full mq1400:flex-wrap">
            
            <div className="overflow-hidden flex flex-row items-center justify-start py-5 px-0">
             
              <div className="relative rounded-[50%] bg-palegoldenrod w-7 h-7 [transform:_rotate(180deg)]" />
              <img
                className="relative w-[29.5px] h-[5px]"
                alt=""
                src="/vector-90-1.svg"
              />
            </div>
            <RoadmapCard
              title="Initial Design and Development"
              title1="Q4 2023"
              socialFrames="01"
              rectangle2753="/rectangle-2753.svg"
              rectangle2752="/rectangle-2752.svg"
              pHASE1="PHASE-1"
              propPadding="0rem 1.75rem"
              propWidth="21.94rem"
              propAlignSelf="stretch"
              propPadding1="1.44rem 0rem 0rem"
              propPadding2="1rem 3.81rem 0.94rem 3.63rem"
            />

            <div className="overflow-hidden flex flex-row items-center justify-start py-5 px-0">
              <div className="h-0 flex flex-col items-start justify-start py-0 px-0 box-border">
                <img
                  className="relative w-[29.5px] h-[5px]"
                  alt=""
                  src="/vector-91-1.svg"
                />
              </div>
              <div className="relative rounded-[50%] bg-palegoldenrod w-7 h-7 [transform:_rotate(180deg)]" />
              <img
                className="relative w-[29.5px] h-[5px]"
                alt=""
                src="/vector-90-1.svg"
              />
            </div>
            <RoadmapCard
              title={`Release and Testing of  Bita Market & Bridge`}
              title1="Q1 2024"
              socialFrames="02"
              rectangle2753="/rectangle-2753.svg"
              rectangle2752="/rectangle-2752.svg"
              pHASE1="PHASE-2"
              propHeight="360px"
              propFlex="1"
              propPadding="unset"
              propWidth="unset"
              propAlignSelf="unset"
              propPadding1="23px 57px 0px 56px"
              propPadding2="16px 60px 15px 56px"
            />
            <div className="overflow-hidden flex flex-row items-center justify-start py-5 px-0">
              <div className="h-0 flex flex-col items-start justify-start py-0 px-0 box-border">
                <img
                  className="relative w-[29.5px] h-[5px]"
                  alt=""
                  src="/vector-91-1.svg"
                />
              </div>
              <div className="relative rounded-[50%] bg-palegoldenrod w-7 h-7 [transform:_rotate(180deg)]" />
              <img
                className="relative w-[29.5px] h-[5px]"
                alt=""
                src="/vector-90-1.svg"
              />
            </div>
            <RoadmapCard
              title={`Release and Testing of  Bita Market & Bridge`}
              title1="Q1 2024"
              socialFrames="02"
              rectangle2753="/rectangle-2753.svg"
              rectangle2752="/rectangle-2752.svg"
              pHASE1="PHASE-2"
              propHeight="360px"
              propFlex="1"
              propPadding="unset"
              propWidth="unset"
              propAlignSelf="unset"
              propPadding1="23px 57px 0px 56px"
              propPadding2="16px 60px 15px 56px"
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
