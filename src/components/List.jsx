import Logo from "./Logo";

const LogoList = ({ logos }) => {
  return (
    <section className="grid grid-cols-auto gap-x-8 gap-y-6 justify-items-stretch items-stretch my-8">
      {logos.map((logo) => {
        return (
          <Logo
            name={logo.name}
            symbol={logo.symbol}
            svg={logo.svg}
            key={logo.symbol}
            raw={logo.raw}
          />
        );
      })}
    </section>
  );
};

export default LogoList;
