import BGIMG from "../../../assets/heroBg.webp";
import Logo from "../../../assets/logo.svg";
import SmallLogo from "../../../assets/LogoSmall.svg";
import ArrowLeft from "../../../assets/arrowLeft.svg";
const Hero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BGIMG})` }}
    >
      <div className="flex space-y-[11px] px-10 flex-col text-center justify-center items-center">
        <div>
          <div className="md:block hidden">
            <Logo />
          </div>
          <div className="block md:hidden">
            <SmallLogo />
          </div>
        </div>
        <h1 className="font-db-sans leading-[110%] pb-2 text-[#F7F7F7] font-bold text-[24px] md:text-[58px] ">
          Devenez LA référence <br className="md:block hidden" /> dans votre
          ville
        </h1>
        <p className="text-[#F7F7F7]  pb-10 leading-[110%]  font-db-sans text-[16px]  md:text-[24px] ">
          Arrêtez de courir après les clientes :{" "}
          <br className="md:block hidden" /> Attirez-les.
        </p>
        <button
          className="buttonBG md:py-5 px-[30px] py-[10px] md:px-[47px] border border-[#F71B9A] font-bold font-plus-jakarta text-sm md:text-2xl flex items-center gap-x-2 rounded-full 
  transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-lg hover:bg-[#920758] hover:text-white"
        >
          JOIN LA WAITLIST <ArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default Hero;
