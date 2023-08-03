import { useCallback } from "react";

const FilteredForm = () => {
  const onDownButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='section5Investing']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute w-[calc(100%_-_94px)] top-[611px] right-[34px] left-[60px] h-[65px] overflow-hidden text-center text-xs text-light-white font-hero-text">
      <div className="absolute top-[calc(50%_-_24.5px)] left-[14px] w-[360px] flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="rounded-6xs bg-black box-border w-[170px] h-[50px] flex flex-row p-[25px] items-center justify-between border-[1px] border-solid border-light-white">
            <img
              className="relative w-[19.22px] h-[22.82px]"
              alt=""
              src="/vector1.svg"
            />
            <div className="relative tracking-[0.5px] leading-[18px] uppercase">
              APP STORE
            </div>
          </div>
          <div className="rounded-6xs bg-black box-border w-[170px] h-[50px] flex flex-row p-3 items-center justify-between border-[1px] border-solid border-light-white">
            <img
              className="relative w-[19.45px] h-[21.22px]"
              alt=""
              src="/vector2.svg"
            />
            <div className="relative tracking-[0.5px] leading-[18px] uppercase">
              GOOGLE PLAY
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_24.5px)] left-[calc(50%_-_23px)] w-[18px] h-10 overflow-hidden"
        onClick={onDownButtonClick}
      >
        <img
          className="absolute h-3/4 w-full top-[25%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
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
            src="/vector4.svg"
          />
        </a>
        <a
          className="[text-decoration:none] relative w-[21px] h-[17px] overflow-hidden shrink-0"
          href="https://www.twitch.tv/"
        >
          <img
            className="absolute h-[99.67%] w-[99.27%] top-[0%] right-[0.73%] bottom-[0.33%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
        </a>
        <a
          className="[text-decoration:none] relative w-[21px] h-[21px] overflow-hidden shrink-0"
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
  );
};

export default FilteredForm;
