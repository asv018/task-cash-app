const BankingForm = () => {
  return (
    <div className="absolute w-[calc(100%_-_4px)] top-[1442px] right-[0px] left-[4px] bg-cash-app-green h-[750px] overflow-hidden text-left text-21xl text-light-white font-hero-text">
      <div className="absolute top-[16px] right-[33px] w-[515px] h-[621px] flex flex-row flex-wrap items-start justify-start gap-[92px]">
        <img
          className="relative w-[250px] h-[160.42px] object-cover z-[0]"
          alt=""
          src="/bankingtrack2@2x.png"
        />
        <img
          className="relative w-[280px] h-[187.35px] object-cover z-[1]"
          alt=""
          src="/bankingramp1@2x.png"
        />
        <img
          className="relative w-[90px] h-[247px] object-cover z-[2]"
          alt=""
          src="/bankingstairs1@2x.png"
        />
        <img
          className="relative w-60 h-[139.12px] object-cover z-[3]"
          alt=""
          src="/bankingcubes@2x.png"
        />
        <img
          className="relative w-[120px] h-[79.66px] object-cover z-[4]"
          alt=""
          src="/bankingmonster@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[690px] right-[74px] w-[380px] h-[159.92px] object-cover z-[5]"
          alt=""
          src="/bankinghole@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[699px] h-[784.92px]">
        <img
          className="absolute top-[165px] left-[414px] w-[270px] h-[166.38px] object-cover"
          alt=""
          src="/bankingtrack1@2x.png"
        />
        <img
          className="absolute top-[511px] left-[217px] w-[300px] h-[194.48px] object-cover"
          alt=""
          src="/bankingramp2@2x.png"
        />
        <img
          className="absolute top-[414px] left-[117px] w-20 h-[222.78px] object-cover"
          alt=""
          src="/bankingstairs2@2x.png"
        />
        <img
          className="absolute w-[calc(100%_-_549px)] top-[628px] right-[0px] left-[549px] max-w-full overflow-hidden h-[156.92px] object-cover"
          alt=""
          src="/bankingtube@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[380px] h-[159.92px] object-cover"
          alt=""
          src="/bankinghole@2x.png"
        />
        <img
          className="absolute top-[105px] left-[134px] w-[130px] h-[199.81px] object-cover"
          alt=""
          src="/bankingcolumn@2x.png"
        />
      </div>
      <img
        className="absolute w-[calc(100%_-_1058px)] top-[171px] right-[440px] left-[568px] max-w-full overflow-hidden h-[407.99px] "
        alt=""
        src="/bankingphone@2x.png"
      />
      <div className="absolute w-[calc(100%_-_1013px)] top-[calc(50%_-_68px)] right-[789px] left-[224px] h-[147px] flex flex-col pt-1.5 px-px pb-0 box-border items-start justify-start gap-[13px]">
        <div className="relative leading-[40px] inline-block w-[336px]">
          Banking
        </div>
        <div className="flex-1 relative text-base tracking-[0.3px] leading-[22px] font-body-1-regular-16-22-03px text-black inline-block w-[323px]">
          <p className="m-0">{`Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing `}</p>
          <p className="m-0">and account number.</p>
        </div>
      </div>
    </div>
  );
};

export default BankingForm;
