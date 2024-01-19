const KeyFeatures1 = ({
  joinCommunity,
  facebookFacebook,
  heading,
  headerGroup,
  textContainer,
}) => {
  return (
    <div className="rounded-xl [backdrop-filter:blur(26px)] w-[314px] h-[398px] flex flex-col items-center justify-start relative text-center text-xl text-white font-body-md-regular">
      <img
        className="absolute my-0 mx-[!important] top-[10.9px] left-[2.5px] w-[103.3px] h-[103.3px] overflow-hidden shrink-0 object-contain"
        alt=""
        src={joinCommunity}
      />
      <img
        className="absolute my-0 mx-[!important] top-[272.3px] left-[206.3px] w-[108.3px] h-[108.3px] overflow-hidden shrink-0 object-contain"
        loading="eager"
        alt=""
        src={facebookFacebook}
      />
      <div className="self-stretch flex-1 rounded-xl bg-gray1-500 [backdrop-filter:blur(26px)] flex flex-col items-center justify-end py-14 px-[5px] relative gap-[8px] z-[1] border-[3px] border-solid border-gold-400">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-6 gap-[12px]">
          <b className="self-stretch relative tracking-[0.39px] mq450:text-base">
            {heading}
          </b>
          <img className="relative w-[169px] h-0.5" alt="" src={headerGroup} />
          <div className="self-stretch relative text-base leading-[140%] text-lightgray">{`Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada `}</div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[16px] left-[calc(50%_-_80.5px)] w-[159px] h-[159px] object-cover"
          alt=""
          src={textContainer}
        />
      </div>
    </div>
  );
};

export default KeyFeatures1;
