import Logo from "@/assets/logo.svg";
import Facebookicon from "@/assets/Facebook.svg";
import InstaGram from "@/assets/Insta.svg";
import TiktokIcon from "@/assets/TikTok.svg";
import Line from "@/assets/Line.svg";
import BlueGlow from "@/assets/glows/BlueGlow.svg";

const Footer = () => {
  return (
    <div className=" pt-[20px] relative pb-[37px] md:pb-[50px]">
      <div className="absolute -right-96 -bottom-[1200px]">
        <BlueGlow />
      </div>

      <div className="flex relative z-40 flex-col justify-center items-center mx-auto">
        {/* <img src={logo} alt='logo' className='max-w-[93px] md:max-w-[125px]' /> */}

        <div>
          <Logo />
        </div>
        <p className="text-[18px] md:text-[24px] pb-[26px]">Montreal, Quebec</p>
        <div className="flex items-center pb-[19px] gap-x-4">
          <a
            href="https://www.instagram.com/missmuselashes/"
            target="_blank"
            className="md:size-[30px] size-[22px]"
          >
            <InstaGram />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@missmuselashes?_t=8p3uYZQffnB&_r=1"
            className="md:size-[30px] size-[22px]"
          >
            <TiktokIcon />
          </a>
          <a
            href="https://www.facebook.com/share/MMfd5fMVSJqkS8uQ/?mibextid=LQQJ4d"
            target="_blank"
            className="md:size-[30px] size-[22px]"
          >
            <Facebookicon />
          </a>
        </div>
        <Line />

        <p className="pt-[19px] text-[18px] md:text-[24px]">
          Miss Muse 2024 Copyright
        </p>
      </div>
    </div>
  );
};

export default Footer;
