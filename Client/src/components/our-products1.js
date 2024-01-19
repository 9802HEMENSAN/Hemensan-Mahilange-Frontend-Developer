import { memo } from "react";
import KeyFeatures1 from "./key-features1";

const OurProducts1 = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[60px] px-0 box-border gap-[60px] max-w-full z-[2] text-center text-37xl text-white font-kanit mq950:gap-[30px] mq950:pt-[25px] mq950:pb-[25px] mq950:box-border mq1400:pt-[39px] mq1400:pb-[39px] mq1400:box-border">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full">
        <div className="flex flex-row items-center justify-start p-2 box-border relative gap-[8px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[60px] font-semibold font-inherit [transform:_rotate(-0.17deg)] mq450:text-15xl mq450:leading-[36px] mq950:text-26xl mq950:leading-[48px]">
            <span>Our</span>
            <span className="text-gold-200"> Products</span>
          </h1>
          <img
            className="absolute my-0 mx-[!important] top-[61.7px] right-[-1.2px] w-[176.7px] h-[21.7px] object-contain"
            alt=""
            src="/vector-1-2.svg"
          />
        </div>
        <div className="relative text-xl leading-[169.43%] font-body-md-regular inline-block w-[1200px] mq450:text-base mq450:leading-[27px]">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-16 box-border gap-[48px] min-h-[856px] text-xl font-body-md-regular mq950:gap-[24px] mq1400:pl-8 mq1400:pr-8 mq1400:box-border">
        <KeyFeatures1
          joinCommunity="/join-community@2x.png"
          facebookFacebook="/105@2x.png"
          heading="Bita Marketplace"
          headerGroup="/header-group.svg"
          textContainer="/text-container@2x.png"
        />
        <KeyFeatures1
          joinCommunity="/join-community@2x.png"
          facebookFacebook="/105@2x.png"
          heading="Bitadex"
          headerGroup="/header-group.svg"
          textContainer="/4-1@2x.png"
        />
        <KeyFeatures1
          joinCommunity="/join-community@2x.png"
          facebookFacebook="/105@2x.png"
          heading="Bitabridge"
          headerGroup="/header-group.svg"
          textContainer="/4-2@2x.png"
        />
        <KeyFeatures1
          joinCommunity="/106-3@2x.png"
          facebookFacebook="/105@2x.png"
          heading="Bitapad"
          headerGroup="/header-group.svg"
          textContainer="/4-3@2x.png"
        />
        <KeyFeatures1
          joinCommunity="/106-3@2x.png"
          facebookFacebook="/105@2x.png"
          heading="BitaLend"
          headerGroup="/header-group.svg"
          textContainer="/4-4@2x.png"
        />
      </div>
    </div>
  );
});

export default OurProducts1;
