/* eslint-disable react/no-unescaped-entities */
import LineBreak from "@/component/ui/LineBreak";
import Woman from "../../../assets/woman.png";

const About = () => {
  return (
    <div id="about" className="py-20 px-5">
      <div className="flex relative z-20 flex-col justify-center items-center">
        <img src={Woman} className="max-w-[229px] md:max-w-[305px]" alt="" />
        <div className="w-fit rounded-[62px] bg-gradient-to-l from-[#FFFFFF] to-[#FF0AD2] p-[1px] md:p-[4px]">
          <div className="px-[54px] rounded-[62px] bg-[#101010] py-[10px] w-full  ">
            <p className="text-[24px] md:text-[40px] font-extrabold">
              Salma Bensouda
            </p>
          </div>
        </div>
      </div>

      <div className="w-fit -translate-y-6  md:-translate-y-10 grid place-items-center mx-auto bg-gradient-to-l from-[#F71B9A] to-[#FFB4DF] p-[1px] rounded-[24px]">
        <div className="bg-gradient-to-b from-[#190B14] to-[#080909]  backdrop-blur-lg w-full rounded-[24px] py-[40px] md:py-[87px] px-5 md:px-[50px] lg:px-[182px] space-y-[43px]">
          <p className="text-[16px]  md:text-[29px] text-center">
            Salut! Je suis
            <span className="text-[#F71B9A] font-bold"> Salma Bensouda</span>,
            fondatrice de
            <span className="text-[#1EA1F1] font-bold"> Miss Muse Lashes</span>.
            <LineBreak /> Mon aventure dans le monde des extensions de cils a
            commencé il <LineBreak />y a presque <FontBold>cinq ans</FontBold>,
            alors que j'étais encore étudiante en <LineBreak />
            commerce. En équilibrant mes études et ma passion pour la
            <LineBreak /> beauté, j'ai démarré
            <FontBold> mon entreprise d'extensions de cils </FontBold>
            et j'ai <LineBreak /> rapidement réalisé que c'était plus qu'un
            simple passe-temps:
            <LineBreak />
            <FontBold> c'était ma vocation.</FontBold>
          </p>

          <p className="text-[16px]  md:text-[29px] text-center">
            Après avoir obtenu mon diplôme, ma clientèle a continué de{" "}
            <LineBreak /> croître, et j'ai décidé de me{" "}
            <FontBold> consacrer pleinement </FontBold> à cette <LineBreak />{" "}
            aventure passionnante. Pour offrir les meilleurs services possibles,{" "}
            <LineBreak /> j'ai continué à améliorer mes compétences en suivant{" "}
            <LineBreak /> <FontBold>un cours de marketing</FontBold> et
            plusieurs cours avancés sur les <LineBreak /> extensions de cils,
            élargissant ainsi la gamme de services que je <LineBreak /> propose.
            Aujourd'hui, je suis fière de détenir{" "}
            <FontBold>sept certifications</FontBold> et <LineBreak /> d'avoir
            complété <FontBold>huit formations</FontBold> approfondies, couvrant
            divers <LineBreak /> aspects de l'entrepreneuriat et de la beauté.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
// eslint-disable-next-line react/prop-types
const FontBold = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};
