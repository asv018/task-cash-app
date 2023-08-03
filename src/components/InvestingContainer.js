import { useCallback } from "react";

const InvestingContainer = () => {
  const onDownButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="absolute w-full top-[2942px] right-[0px] left-[0px] bg-cash-app-green h-[750px] overflow-hidden text-left text-3xl text-black font-hero-text"
      data-scroll-to="section5Investing"
    >
      <img
        className="absolute top-[452px] left-[0px] w-[2336px] h-[496px] overflow-hidden"
        alt=""
        src="/investingfloor-1.svg"
      />
      <img
        className="absolute h-[181.6%] w-full top-[0%] right-[0%] bottom-[-81.6%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/investingrays-1.svg"
      />
      <img
        className="absolute h-[54.8%] w-[62.15%] top-[16.4%] right-[-43.48%] bottom-[28.8%] left-[81.33%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/investinggraph2@2x.png"
      />
      <img
        className="absolute h-[37.73%] w-[47.14%] top-[58.13%] right-[52.86%] bottom-[4.13%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/investinggraph1@2x.png"
      />
      <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_588px)] w-[352px] h-[136px] flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[40px] inline-block w-[336px]">
          Stocks
        </div>
        <div className="flex-1 relative text-base tracking-[0.3px] leading-[22px] font-body-1-regular-16-22-03px inline-block w-[352px]">
          Whether you’re an expert or just getting started, Cash App is the
          fastest and most accessible way to invest in stocks. Start now with as
          little as $1.
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_+_260px)] w-[336px] h-[136px] flex flex-col items-center justify-start gap-[8px]">
        <div className="relative leading-[40px] inline-block w-[336px]">
          Bitcoin
        </div>
        <div className="flex-1 relative text-base tracking-[0.3px] leading-[22px] font-body-1-regular-16-22-03px inline-block w-[336px]">
          Cash App is the fastest way to convert dollars to bitcoin. From your
          home screen, six taps are all it takes to stack sats, buy an entire
          bitcoin, or just see what it’s all about.
        </div>
      </div>
      <div className="absolute top-[131px] left-[calc(50%_-_129px)] text-21xl leading-[40px] text-light-white inline-block w-[258px]">
        Investing
      </div>
      <div className="absolute w-[calc(100%_-_968px)] top-[252px] right-[484px] left-[484px] flex flex-row items-center justify-center gap-[78px]">
        <img
          className="relative w-40 h-[344px] object-cover"
          alt=""
          src="/investingstocks@2x.png"
        />
        <img
          className="relative w-40 h-[346.89px] object-cover"
          alt=""
          src="/investingbitcoin@2x.png"
        />
      </div>
      <div className="absolute w-[calc(100%_-_94px)] top-[677px] right-[47px] left-[47px] h-[65px] overflow-hidden text-center text-xs text-light-white">
        <div className="absolute top-[calc(50%_-_24.5px)] left-[14px] w-[360px] flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="rounded-6xs bg-black box-border w-[170px] h-[50px] flex flex-row p-[25px] items-center justify-between border-[1px] border-solid border-light-white">
              <img
                className="relative w-[19.22px] h-[22.82px]"
                alt=""
                src="/vector9.svg"
              />
              <div className="relative tracking-[0.5px] leading-[18px] uppercase">
                APP STORE
              </div>
            </div>
            <div className="rounded-6xs bg-black box-border w-[170px] h-[50px] flex flex-row p-3 items-center justify-between border-[1px] border-solid border-light-white">
              <img
                className="relative w-[19.45px] h-[21.22px]"
                alt=""
                src="/vector10.svg"
              />
              <div className="relative tracking-[0.5px] leading-[18px] uppercase">
                GOOGLE PLAY
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_+_15.5px)] left-[calc(50%_-_5px)] w-[18px] h-10 overflow-hidden [transform:_rotate(-180deg)] [transform-origin:0_0]"
          onClick={onDownButtonClick}
        >
          <img
            className="absolute h-3/4 w-full top-[-100%] right-[100%] bottom-[125%] left-[-100%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector11.svg"
          />
        </button>
        <div className="absolute top-[-5px] right-[178px] w-[364px] flex flex-col items-center justify-start text-left text-3xs text-silver font-body-1-regular-16-22-03px">
          <div className="self-stretch relative leading-[13px]">
            <p className="m-0">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            </p>
            <p className="m-0">
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </p>
          </div>
        </div>
        <div className="absolute top-[21px] right-[15.5px] flex flex-row items-center justify-center gap-[30px]">
          <a
            className="[text-decoration:none] relative w-6 h-6 overflow-hidden shrink-0"
            href="https://www.twitch.tv/"
          >
            <img
              className="absolute h-full w-[95.53%] top-[0%] right-[2.24%] bottom-[0%] left-[2.24%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector12.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-[21px] h-[17px] overflow-hidden shrink-0"
            href="https://www.twitch.tv/"
          >
            <img
              className="absolute h-[99.67%] w-[99.27%] top-[0%] right-[0.73%] bottom-[0.33%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector13.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative bg-black w-[21px] h-[21px] overflow-hidden shrink-0"
            href="instagram.com"
          >
            <img
              className="absolute h-[95.03%] w-[95.05%] top-[2.4%] right-[2.26%] bottom-[2.57%] left-[2.69%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector6.svg"
            />
            <img
              className="absolute h-[48.81%] w-[48.81%] top-[25.5%] right-[25.4%] bottom-[25.69%] left-[25.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector7.svg"
            />
            <img
              className="absolute h-[11.39%] w-[11.39%] top-[18.85%] right-[18.74%] bottom-[69.76%] left-[69.87%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector8.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvestingContainer;
