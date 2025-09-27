const Header = () => {
  const navlinks = [
    { label: "Processus", link: "/" },
    { label: "Reviews", link: "/" },
    { label: "Admissibilité", link: "/" },
    { label: "MMMM", link: "/" },
    { label: "À Propos", link: "/" },
    { label: "FAQ", link: "/" },
  ];
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2  top-6 max-w-[718px] mx-auto px-[40px]  py-[20px] rounded-full border border-[#FFFFFF14] flex justify-center items-center gap-x-6 bg-[#FFFFFF08] ">
      {navlinks.map((item, i) => (
        <a href={item.link}>
          {" "}
          <p className=" text-[#F7F7F7] hover:text-pink-500 text-xl hover:font-medium transition-all ease-in-out duration-200">
            {item.label}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Header;
