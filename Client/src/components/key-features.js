const KeyFeatures = ({ headerGroup, frameA, prop, arrowChevronRightMD }) => {
  return (
    <div className="rounded-xl [backdrop-filter:blur(26px)] w-[314px] shrink-0 flex flex-col items-center justify-start relative text-left text-base text-lightgray font-body-md-regular">
      <img
        className="absolute my-0 mx-[!important] top-[10.9px] left-[2.5px] w-[103.3px] h-[103.3px] overflow-hidden shrink-0 object-contain"
        alt=""
        src={headerGroup}
      />
      <img
        className="absolute my-0 mx-[!important] top-[272.3px] left-[206.3px] w-[108.3px] h-[108.3px] overflow-hidden shrink-0 object-contain"
        alt=""
        src={frameA}
      />
      <div className="self-stretch rounded-xl bg-gray1-500 [backdrop-filter:blur(26px)] flex flex-col items-center justify-start pt-[184px] px-[5px] pb-10 relative gap-[24px] z-[1] border-[3px] border-solid border-gold-400 mq950:pt-[120px] mq950:pb-[26px] mq950:box-border">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-6 gap-[12px]">
          <h3 className="m-0 self-stretch relative text-5xl tracking-[0.39px] font-bold font-inherit text-white mq450:text-lgi">
            Bitcoin
          </h3>
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] mq450:flex-wrap">
            <div className="flex-1 relative leading-[140%] font-semibold inline-block min-w-[79px]">
              Symbol
            </div>
            <div className="flex-1 relative leading-[140%] inline-block min-w-[79px]">
              BTC
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] mq450:flex-wrap">
            <div className="flex-1 relative leading-[140%] font-semibold inline-block min-w-[79px]">
              Decimals
            </div>
            <div className="flex-1 relative leading-[140%] inline-block min-w-[79px]">
              18
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] mq450:flex-wrap">
            <div className="flex-1 relative leading-[140%] font-semibold inline-block min-w-[79px]">
              Market Cap
            </div>
            <div className="flex-1 relative leading-[140%] inline-block min-w-[79px] whitespace-nowrap">
              $100000
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] mq450:flex-wrap">
            <div className="flex-1 relative leading-[140%] font-semibold inline-block min-w-[79px]">
              Chain
            </div>
            <div className="flex-1 relative leading-[140%] inline-block min-w-[79px]">
              Bitcoin
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[40px] left-[calc(50%_-_56.5px)] w-[111px] h-[111px] object-cover"
          alt=""
          src={prop}
        />
        <div className="rounded-xl w-[139px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-81xl [background:linear-gradient(94.2deg,_#fecc00,_#fea800)] shadow-[-2px_-2px_20px_rgba(254,_204,_0,_0),_2px_2px_20px_rgba(254,_204,_0,_0)] flex flex-col items-center justify-center p-1">
            <button className="cursor-pointer py-2.5 pr-[18px] pl-[22px] bg-[transparent] self-stretch rounded-81xl [background:linear-gradient(94.62deg,_#fecc00,_#fea800)] flex flex-row items-center justify-center gap-[8px] border-[2px] border-solid border-white hover:bg-gainsboro-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100">
              <b className="relative text-base leading-[169.43%] font-body-md-regular text-gray1-200 text-center">
                Details
              </b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={arrowChevronRightMD}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
