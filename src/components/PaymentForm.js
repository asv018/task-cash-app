const PaymentForm = () => {
  return (
    <div className="absolute w-full top-[692px] right-[0px] left-[0px] bg-whitesmoke h-[750px] overflow-hidden text-left text-21xl text-cash-app-green font-hero-text">
      <img
        className="absolute w-full top-[433px] right-[0px] left-[0px] max-w-full overflow-hidden h-[295.55px]"
        alt=""
        src="/paymentsfloor-1.svg"
      />
      <div className="absolute w-[calc(100%_-_1013px)] top-[calc(50%_-_147px)] right-[777px] left-[236px] flex flex-col pt-1.5 pb-0 pr-0 pl-px box-border items-start justify-start gap-[13px]">
        <div className="self-stretch relative leading-[40px]">Payments</div>
        <div className="flex-1 relative text-base tracking-[0.3px] leading-[22px] font-body-1-regular-16-22-03px text-black whitespace-pre-wrap inline-block w-[352px]">
          <p className="m-0">{`Send and receive money with anyone, donate  to an important cause, or tip professionals. `}</p>
          <p className="m-0">{`Just enter a $cashtag, phone number, or `}</p>
          <p className="m-0">scan their QR code to pay.</p>
        </div>
      </div>
      <img
        className="absolute w-[calc(100%_-_616px)] top-[116px] right-[310px] left-[306px] max-w-full overflow-hidden h-[431.54px] "
        alt=""
        src="/paymentsphone-1@2x.png"
      />
      <div className="absolute top-[349px] left-[0px] w-[394px] h-[497.54px]">
        <img
          className="absolute w-[34.26%] top-[211px] right-[0%] left-[65.74%] max-w-full overflow-hidden h-[131.32px] object-cover"
          alt=""
          src="/paymentspillarsmall@2x.png"
        />
        <img
          className="absolute w-[43.65%] top-[122px] right-[18.27%] left-[38.07%] max-w-full overflow-hidden h-[253.73px] object-cover"
          alt=""
          src="/paymentspillarmedium@2x.png"
        />
        <img
          className="absolute w-[47.46%] top-[0px] right-[52.54%] left-[0%] max-w-full overflow-hidden h-[497.54px] object-cover"
          alt=""
          src="/paymentscolumn1@2x.png"
        />
      </div>
      <div className="absolute top-[205px] right-[-17px] w-[1088px] h-[620.54px]">
        <img
          className="absolute w-[74.45%] top-[0px] right-[0%] left-[25.55%] max-w-full overflow-hidden h-[497.54px] object-cover"
          alt=""
          src="/paymentscolumn@2x.png"
        />
        <img
          className="absolute w-[19.3%] top-[127px] right-[49.17%] left-[31.53%] max-w-full overflow-hidden h-[333.31px] object-cover"
          alt=""
          src="/paymentspillarlarge@2x.png"
        />
        <img
          className="absolute w-[15.81%] top-[361px] right-[50.83%] left-[33.36%] max-w-full overflow-hidden h-[253.73px] object-cover"
          alt=""
          src="/paymentspillarmedium@2x.png"
        />
        <img
          className="absolute w-[15.81%] top-[122px] right-[21.69%] left-[62.5%] max-w-full overflow-hidden h-[253.73px] object-cover"
          alt=""
          src="/paymentspillarmedium@2x.png"
        />
        <img
          className="absolute w-[74.45%] top-[123px] right-[25.55%] left-[0%] max-w-full overflow-hidden h-[497.54px] object-cover"
          alt=""
          src="/paymentscolumn@2x.png"
        />
      </div>
      <img
        className="absolute w-[12.59%] top-[459px] right-[50%] left-[37.41%] max-w-full overflow-hidden h-[253.73px] object-cover"
        alt=""
        src="/paymentspillarmedium@2x.png"
      />
    </div>
  );
};

export default PaymentForm;
