import FilteredForm from "../components/FilteredForm";
import PaymentForm from "../components/PaymentForm";
import BankingForm from "../components/BankingForm";
import CashCardBoostContainer from "../components/CashCardBoostContainer";
import InvestingContainer from "../components/InvestingContainer";

const CashApp = () => {
  return (
    <div className="relative bg-light-white w-full h-[3695px] overflow-hidden text-center text-174xl text-light-white font-hero-text">
      <div
        className="absolute w-full top-[2px] right-[0px] left-[0px] bg-black h-[692px]"
        data-scroll-to="heroSectionContainer"
      >
        <div className="absolute top-[calc(50%_-_310.15px)] right-[62.5px] overflow-hidden flex flex-row items-center justify-start">
          <img className="relative w-16 h-9" alt="" src="/layer-1.svg" />
        </div>
        <div className="absolute top-[calc(50%_-_300px)] left-[calc(50%_-_383px)] w-[766px] overflow-hidden flex flex-row items-center justify-start gap-[20px] text-left text-xs">
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Sign In
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Legal
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Licenses
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Security
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Careers
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Press
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Support
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Status
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.5px] leading-[18px] uppercase text-[inherit]">
            Codeblog
          </a>
        </div>
        <img
          className="absolute top-[calc(50%_-_316px)] left-[60px] w-[30px] h-11"
          alt=""
          src="/cashapp--logo.svg"
        />
        <div className="absolute top-[-275px] left-[0px] w-[1366px] overflow-hidden flex flex-row items-start justify-start">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[1360px] opacity-[0.3]"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="absolute top-[49.86px] left-[208px] w-[188px] h-[572.3px]">
          <img
            className="absolute h-[12.72%] w-[39.36%] top-[0%] right-[50%] bottom-[87.28%] left-[10.64%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/introcube-1@2x.png"
          />
          <img
            className="absolute h-[30.66%] w-full top-[69.34%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/introcubes-1@2x.png"
          />
        </div>
        <FilteredForm />
        <div className="absolute top-[49.86px] right-[144px] w-[394px] h-[724.82px]">
          <img
            className="absolute h-[46.35%] w-[73.1%] top-[54.75%] right-[27.92%] bottom-[-1.1%] left-[-1.02%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/intropillar-1@2x.png"
          />
          <img
            className="absolute h-[35.79%] w-[50.76%] top-[0%] right-[0%] bottom-[64.21%] left-[49.24%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/introstairs-1@2x.png"
          />
        </div>
        <div className="absolute font-main-title top-[calc(50%_-_180px)] left-[calc(50%_-_809px)] tracking-[0.5px] leading-[166px] uppercase flex items-center justify-center w-[1600px] h-[302.88px]">
          CASh
        </div>
        <img
          className="absolute top-[calc(50%_-_205.59px)] left-[calc(50%_-_188px)] w-[370px] h-[453.08px] object-cover"
          alt=""
          src="/introphone-1@2x.png"
        />
        <div className="absolute font-main-title w-[calc(100%_-_5px)] top-[calc(50%_-_100px)] left-[-54px] tracking-[0.5px] leading-[166px] uppercase flex items-center h-[302.88px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">&nbsp;</p>
            <p className="m-0">APP</p>
          </span>
        </div>
      </div>
      <PaymentForm />
      <BankingForm />
      <CashCardBoostContainer />
      <InvestingContainer />
    </div>
  );
};

export default CashApp;
