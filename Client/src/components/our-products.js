import KeyFeatures from "./key-features";

const OurProducts = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[60px] px-0 box-border gap-[60px] max-w-full z-[2] text-left text-37xl text-white font-body-md-regular mq950:gap-[30px] mq950:pt-[25px] mq950:pb-[25px] mq950:box-border mq1400:pt-[39px] mq1400:pb-[39px] mq1400:box-border">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-[24px] text-center font-kanit">
        <div className="flex flex-row items-center justify-start p-2 relative gap-[8px]">
          <h1 className="m-0 relative text-inherit leading-[60px] font-semibold font-inherit [transform:_rotate(-0.17deg)] mq450:text-15xl mq450:leading-[36px] mq950:text-26xl mq950:leading-[48px]">
            <span>Our</span>
            <span className="text-gold-200"> Tokens</span>
          </h1>
          <img
            className="absolute my-0 mx-[!important] top-[61.7px] right-[-1.2px] w-[176.7px] h-[21.7px] object-contain"
            alt=""
            src="/vector-1-4.svg"
          />
        </div>
        <div className="relative text-xl leading-[169.43%] font-body-md-regular inline-block w-[1200px] mq450:text-base mq450:leading-[27px]">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </div>
      </div>
      <div className="w-[1440px] overflow-x-auto flex flex-row flex-wrap items-start justify-center py-0 px-16 box-border gap-[48px] min-h-[996px] max-w-full text-base text-lightgray mq950:gap-[24px] mq1400:pl-8 mq1400:pr-8 mq1400:box-border">
        <KeyFeatures
          headerGroup="/106-5@2x.png"
          frameA="/105-5@2x.png"
          prop="/4-5@2x.png"
          arrowChevronRightMD="/arrow--chevron-right-md-1.svg"
        />
        <KeyFeatures
          headerGroup="/106-5@2x.png"
          frameA="/105-5@2x.png"
          prop="/4-5@2x.png"
          arrowChevronRightMD="/arrow--chevron-right-md-1.svg"
        />
        <KeyFeatures
          headerGroup="/106-5@2x.png"
          frameA="/105-5@2x.png"
          prop="/4-5@2x.png"
          arrowChevronRightMD="/arrow--chevron-right-md-1.svg"
        />
        <KeyFeatures
          headerGroup="/106-5@2x.png"
          frameA="/105-5@2x.png"
          prop="/4-5@2x.png"
          arrowChevronRightMD="/arrow--chevron-right-md-1.svg"
        />
        <KeyFeatures
          headerGroup="/106-5@2x.png"
          frameA="/105-5@2x.png"
          prop="/4-5@2x.png"
          arrowChevronRightMD="/arrow--chevron-right-md-1.svg"
        />
        <KeyFeatures
          headerGroup="/106-5@2x.png"
          frameA="/105-5@2x.png"
          prop="/4-5@2x.png"
          arrowChevronRightMD="/arrow--chevron-right-md-1.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center p-6 gap-[100px] text-sm mq450:gap-[25px] mq950:flex-wrap mq950:gap-[50px] mq950:justify-center">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg w-[100px] flex flex-row items-center justify-center">
          <div className="flex-1 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 border-[1px] border-solid border-gray-300">
            <div className="relative text-sm leading-[20px] font-medium font-body-md-regular text-gray-700 text-left">
              Previous
            </div>
          </div>
        </button>
        <div className="relative leading-[20px] font-medium">Page 1 of 10</div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg w-[100px] flex flex-row items-center justify-center">
          <div className="flex-1 rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 border-[1px] border-solid border-gray-300">
            <div className="relative text-sm leading-[20px] font-medium font-body-md-regular text-gray-700 text-left">
              Next
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
