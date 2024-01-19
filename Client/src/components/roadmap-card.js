import { useMemo } from "react";

const RoadmapCard = ({
  title,
  title1,
  socialFrames,
  rectangle2753,
  rectangle2752,
  pHASE1,
  propHeight,
  propFlex,
  propPadding,
  propWidth,
  propAlignSelf,
  propPadding1,
  propPadding2
}) => {
  const contentGroupStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const paginationButtonStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const tokenomicsIconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding1,
    };
  }, [propAlignSelf, propPadding1]);

  const logoYellowStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border relative min-w-[259px] max-w-full text-center text-5xl text-white font-body-md-regular">
      <div
        className="self-stretch rounded-xl bg-gray1-400 overflow-hidden flex flex-col items-center justify-start p-6 mq450:pt-5 mq450:pb-5 mq450:box-border"
        style={contentGroupStyle}
      >
        <div
          className="self-stretch rounded-2xl bg-gray1-600 shadow-[2px_2px_32px_rgba(255,_255,_255,_0.15)] flex flex-col items-center justify-start py-9 px-3.5 gap-[24px] border-[2px] border-solid border-gold-400"
          style={paginationButtonStyle}
        >
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <h3 className="m-0 self-stretch relative text-inherit leading-[32px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
              {title}
            </h3>
            <div className="self-stretch relative text-xl leading-[32px] font-semibold text-gray1-900 mq450:text-base mq450:leading-[26px]">
              {title1}
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-start py-0 px-7 text-base text-lightgray"
            style={tokenomicsIconStyle}
          >
            <div className="flex-1 relative leading-[24px]">{`Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada `}</div>
          </div>
        </div>
      </div>
      <div
        className="my-0 mx-[!important] absolute top-[-129px] left-[23.75px] w-[351px] overflow-hidden flex flex-col items-center justify-start z-[1] text-181xl text-[transparent] font-kanit"
        style={frameDivStyle}
      >
        <div
          className="self-stretch overflow-hidden flex flex-row items-end justify-center pt-[23px] px-0 pb-0"
          style={frameDiv1Style}
        >
          <div className="h-[106px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <b className="relative [-webkit-text-stroke:7px_rgba(255,_255,_255,_0.4)] mq450:text-31xl mq950:text-61xl">
              {socialFrames}
            </b>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[61px] pl-[58px] bg-[transparent] overflow-hidden flex flex-row items-center justify-center relative z-[1] mt-[-20px]"
          style={logoYellowStyle}
        >
          <img
            className="absolute my-0 mx-[!important] w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-5"
            alt=""
            src={rectangle2753}
          />
          <div className="absolute my-0 mx-[!important] h-full w-[calc(100%_-_26px)] top-[0px] right-[13px] bottom-[0px] left-[13px] z-[1] flex items-center justify-center">
            <img
              className="h-full w-full max-w-full overflow-hidden max-h-full z-[1] object-contain absolute left-[0px] top-[3px] [transform:scale(1.266)]"
              alt=""
              src={rectangle2752}
            />
          </div>
          <b className="relative text-xl font-kanit text-gray1-200 text-center z-[2] mq450:text-base">
            {pHASE1}
          </b>
        </button>
      </div>
    </div>
  );
};

export default RoadmapCard;
