const Utility = ({ format, setFormat }) => {
  return (
    <section className="container flex w-full height-[24px] bg-black dark:bg-white justify-between content-center py-4 px-8">
      <div className="space-x-6">
        <button
          className={format.type === "SVG" ? "text-lime" : "text-white"}
          onClick={() => setFormat({ ...format, type: "SVG" })}
        >
          All
        </button>
        <button
          className={format.type === "PNG" ? "text-lime" : "text-white"}
          onClick={() => setFormat({ ...format, type: "PNG" })}
        >
          Dow 30
        </button>
        <button
          className={format.type === "PNG" ? "text-lime" : "text-white"}
          onClick={() => setFormat({ ...format, type: "PNG" })}
        >
          Nasdaq 100
        </button>
      </div>
      <div className="space-x-6">
        <button
          className={format.mode === "color" ? "text-lime" : "text-white"}
          onClick={() => setFormat({ ...format, mode: "color" })}
        >
          Color
        </button>
        <button
          className={format.mode === "mono" ? "text-lime" : "text-white"}
          onClick={() => setFormat({ ...format, mode: "mono" })}
        >
          Mono
        </button>
      </div>
    </section>
  );
};

export default Utility;
