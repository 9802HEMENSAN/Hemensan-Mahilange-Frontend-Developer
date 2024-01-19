import Behance from "./behance";

const SocialMediaFrames = () => {
  return (
    <footer className="self-stretch   shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-[417px] box-border max-w-full text-center text-5xl text-white font-body-md-regular mq450:pb-44 mq450:box-border mq950:pb-[271px] mq950:box-border">
      <div className="self-stretch flex-1 bg-gray1-300 flex flex-col items-center justify-start pt-0 pb-[60px] pr-5 pl-[21px] box-border relative gap-[8px] max-w-full">
        <div className="flex flex-col items-center justify-start gap-[22.46px] max-w-full">
          <img
            className="relative w-[146px] h-[146px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/logo-yellow-1-1@2x.png"
          />
          <div className="flex flex-row items-center justify-start max-w-full">
            <div className="flex flex-row items-center justify-start py-0 pr-[15px] pl-[14.976537704467773px] box-border max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[1.05px] font-normal font-inherit opacity-[0.7] mq450:text-lgi">
                2023 All rights reserved
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute my-0 mx-[!important] top-[-320px] left-[-280px] w-[651px] h-[651px] overflow-hidden shrink-0">
          <img
            className="absolute h-[56.01%] w-[72%] top-[22%] right-[14.01%] bottom-[22%] left-[13.99%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/ovals.svg"
          />
          <img
            className="absolute top-[182.3px] left-[286.4px] w-[78.1px] h-[78.1px] z-[1]"
            loading="eager"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="absolute top-[286.4px] left-[286.4px] w-[78.1px] h-[78.1px] z-[1]"
            loading="eager"
            alt=""
            src="/star-3.svg"
          />
          <img
            className="absolute top-[390.6px] left-[286.4px] w-[78.1px] h-[78.1px] z-[1]"
            loading="eager"
            alt=""
            src="/star-4.svg"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[-120px] left-[calc(50%_-_585px)] rounded-9xl bg-gray1-600 box-border w-[1171px] flex flex-row items-center justify-between py-14 pr-[94px] pl-[86px] gap-[20px] max-w-full z-[2] text-left text-25xl font-kanit border-[4px] border-solid border-gold-500 mq950:flex-wrap">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block w-[264px] shrink-0 mq450:text-7xl mq950:text-16xl">
            <span>{`Join our `}</span>
            <span className="text-gold-200">Community</span>
          </h1>
          <div className="flex flex-row items-start justify-start gap-[17px] text-9xl-6 font-pp-telegraf mq950:flex-wrap">
            <div className="rounded-30xl [background:linear-gradient(135deg,_#9c530f,_#cfaf06)] w-[80.2px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-[18px] px-0 pb-[17px] box-border gap-[23px]">
              <div className="relative shrink-0 mq450:text-4xl">Facebook</div>
              <div className="rounded-[57.29px] w-[46px] h-[46px] flex flex-row items-center justify-center pt-2 px-2 pb-[9px] box-border">
                <div className="rounded-25xl-4 w-[30px] h-[28.6px] flex flex-row items-center justify-center">
                  <img
                    className="relative w-[28.6px] h-[28.6px] overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/email.svg"
                  />
                </div>
              </div>
            </div>
            <Behance
              behance="Behance"
              socialIcon="/social-icon.svg"
              propBackground="linear-gradient(134.64deg, #9c530f, #cfaf06)"
              propGap="1.38rem"
            />
            <Behance
              behance="Instagram"
              socialIcon="/social-icon-1.svg"
              propBackground="linear-gradient(135deg, #9c530f, #cfaf06)"
              propGap="24px"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialMediaFrames;
