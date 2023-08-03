const CashCardBoostContainer = () => {
  return (
    <div className="absolute w-[calc(100%_+_8px)] top-[2192px] right-[0px] left-[-8px] bg-black h-[750px] overflow-hidden text-left text-21xl text-cash-app-green font-hero-text">
      <div className="absolute top-[0px] right-[0px] flex flex-col items-start justify-start gap-[10px]">
        <img
          className="relative w-[957px] h-[760px] object-cover z-[0]"
          alt=""
          src="/booststairs1@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[208px] right-[332px] w-[88px] h-[134.49px] object-cover z-[1]"
          alt=""
          src="/boostcard@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[537px] right-[315px] w-[88px] h-[100.87px] object-cover z-[2]"
          alt=""
          src="/boostcoffee@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[115px] right-[232px] w-[83px] h-[93.46px] object-cover z-[3]"
          alt=""
          src="/boosthand@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[414px] right-[37px] w-[108px] h-[80.22px] object-cover z-[4]"
          alt=""
          src="/boostshoe@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[390px] right-[447px] w-[78px] h-[92.62px] object-cover z-[5]"
          alt=""
          src="/boostburger@2x.png"
        />
      </div>
      <img
        className="absolute top-[162px] left-[11px] w-[355px] h-[588px] object-cover"
        alt=""
        src="/booststairs2@2x.png"
      />
      <img
        className="absolute top-[149px] right-[558px] w-[258px] h-[508.93px] object-cover"
        alt=""
        src="/boostphone@2x.png"
      />
      <div className="absolute w-[calc(100%_-_1022px)] top-[calc(50%_-_149px)] right-[807px] left-[215px] h-[203px] flex flex-col pt-0 pb-[21px] pr-4 pl-0 box-border items-center justify-end gap-[14px]">
        <div className="relative leading-[40px] inline-block w-[336px]">
          <p className="m-0">Cash Card</p>
          <p className="m-0">{`& Boost`}</p>
        </div>
        <div className="flex-1 relative text-base tracking-[0.3px] leading-[22px] font-body-1-regular-16-22-03px text-light-white inline-block w-[336px]">
          The Cash Card is a free, customizable debit card that lets you pay
          online and in stores. It’s the only way to get Boosts—instant
          discounts that work at places where you want to spend.
        </div>
      </div>
    </div>
  );
};

export default CashCardBoostContainer;
