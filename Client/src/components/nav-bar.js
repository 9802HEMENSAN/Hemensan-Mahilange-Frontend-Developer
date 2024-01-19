const NavBar = () => {
  return (
    <div  className="flex-1 flex justify-between flex-wrap rounded-2xl bg-darkolivegreen-200 shadow-[0px_2px_19.5px_rgba(219,_184,_0,_0.2)] [backdrop-filter:blur(29px)] box-border sm:flex-row items-center   pt-[17px] px-8 pb-4 gap-[32px] max-w-full z-[4] text-left text-base text-gold-300 font-body-md-regular border-[1px] border-solid border-gray1-800 sm:mq950:gap-[16px]" >
      <div className="w-[471px] flex flex-row items-center justify-start gap-[8px] max-w-full">
        <img
          className="relative w-[55.3px] h-[55.3px] overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/logo-yellow-1@2x.png"
        />
        <div className="h-[25px] flex flex-col items-center justify-start gap-[7px]">
          <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-0 px-0.5">
            <b className="self-stretch relative tracking-[0.16em]">BITVERSE</b>
          </div>
          <b className="relative text-4xs-7 tracking-[1.17em] text-white">
            FINANCE
          </b>
        </div>
      </div>
      <div className="flex-1 flex   py-0 pr-[3px] pl-0 box-border gap-[7px] max-w-full text-lg text-white">
        <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-start py-0 pr-6 pl-0 gap-[25px]">
         
          <div className="relative leading-[16.5px] font-medium">About</div>
         
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[25px]">
         
          <div className="relative leading-[16.5px] font-medium whitespace-nowrap">
            Our Products
          </div>
          
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden flex flex-row items-center justify-start py-0 pr-[19px] pl-0 gap-[25px]">
           
          <div className="relative leading-[16.5px] font-medium whitespace-nowrap">
            Token Utility
          </div>
         
        </div>
        <div className="rounded-2xl overflow-hidden flex flex-row items-center justify-start py-0 pr-6 pl-0 gap-[24px]">
          
          <div className="relative leading-[16.5px] font-medium">Roadmap</div>
           
           
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[19px] pr-6 pl-7 bg-gold-100 rounded-3xs   whitespace-nowrap hover:bg-goldenrod">
        <div className="relative rounded-3xs bg-gold-100 w-[187px] h-[55px] hidden" />
        <div className="relative text-lg leading-[16.5px] font-medium font-body-md-regular text-black text-left z-[1]">
          Connect Wallet
        </div>
      </button>
    </div>
  );
};

export default NavBar;
