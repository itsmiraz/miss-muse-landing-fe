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

      <div className="w-fit -translate-y-6  md:-translate-y-10 grid place-items-center  max-w-[1270px] mx-auto bg-gradient-to-l from-[#F71B9A] to-[#FFB4DF] p-[1px] rounded-[24px]">
        <div className="bg-gradient-to-b from-[#190B14] to-[#080909] text-[20px] md:text-[28px]  max-w-[1270px] mx-auto backdrop-blur-lg w-full rounded-[24px] py-[40px] md:py-[87px] text-center px-5 md:px-[50px] lg:px-[91px] space-y-[43px]">
          <p>
            {" "}
            Salut, moi c’est <span className="font-bold">Salma Bensouda</span>,
            fondatrice de{" "}
            <span className="text-[#1EA1F1] font-bold">Miss Muse Lashes.</span>
          </p>
          <p>
            J’ai commencé les cils pendant mes études. Au début, c’était
            freestyle: je postais sans stratégie, je disais oui à tout, je
            baissais mes prix, je travaillais beaucoup… et je progressais peu.
            Des années perdues faute de plan.
          </p>
          <p>
            Puis j’ai changé d’approche : j’ai pris des mentors, j’ai cadré mon
            positionnement, clarifié mon offre, construit un branding mémorable,
            créé du contenu qui capte et convertit, et j’ai optimisé chaque
            détail de l’expérience cliente.
          </p>
          <p>
            Les résultats ont suivi : 15M+ vues en quelques mois avec 0 $ d’ads,
            un agenda full, 100k+ / an, une marque qui se démarque, et des
            centaines d’élèves formées à travers le Québec.
          </p>

          <p>
            Si tu te reconnais dans mes débuts, sache une chose : je suis là où
            tu veux aller, et je veux t’y amener plus vite. Ma formation te
            donne le shortcut : un plan clair sur 4 semaines, des scripts, des
            templates, des devoirs guidés, et mon assistance personnelle pour
            adapter tout ça à ton business.
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
