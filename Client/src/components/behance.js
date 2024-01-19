import { useMemo } from "react";

const Behance = ({ behance, socialIcon, propBackground, propGap }) => {
  const behanceStyle = useMemo(() => {
    return {
      background: propBackground,
      gap: propGap,
    };
  }, [propBackground, propGap]);

  return (
    <div
      className="rounded-30xl [background:linear-gradient(134.64deg,_#9c530f,_#cfaf06)] w-[80.2px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-[18px] px-0 pb-[17px] box-border gap-[22px] text-left text-9xl-6 text-white font-pp-telegraf"
      style={behanceStyle}
    >
      <div className="relative shrink-0 mq450:text-4xl">{behance}</div>
      <div className="rounded-[57.29px] w-[45.8px] h-[45.8px] flex flex-row items-center justify-center p-[8.59375px] box-border">
        <img
          className="relative w-[28.6px] h-[28.6px] overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src={socialIcon}
        />
      </div>
    </div>
  );
};

export default Behance;
