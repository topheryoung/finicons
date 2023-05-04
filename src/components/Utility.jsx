const Utility = ({ filter, setFilter }) => {
  return (
    <section className="container flex w-full height-[24px] bg-black dark:bg-white justify-between content-center py-4 px-8">
      <div className="space-x-6">
        <button
          className={filter.list === "all" ? "text-lime" : "text-white"}
          onClick={() => setFilter({ ...filter, list: "all" })}
        >
          All
        </button>
        <button
          className={filter.list === "d30" ? "text-lime" : "text-white"}
          onClick={() => setFilter({ ...filter, list: "d30" })}
        >
          Dow 30
        </button>
        <button
          className={filter.list === "n100" ? "text-lime" : "text-white"}
          onClick={() => setFilter({ ...filter, list: "n100" })}
        >
          Nasdaq 100
        </button>
        <button
          className={filter.list === "sp500" ? "text-lime" : "text-white"}
          onClick={() => setFilter({ ...filter, list: "sp500" })}
        >
          S&P 500
        </button>
      </div>
      <div className="space-x-6">
        <button
          className={filter.mode === "color" ? "text-lime" : "text-white"}
          onClick={() => setFilter({ ...filter, mode: "color" })}
        >
          Color
        </button>
        <button
          className={filter.mode === "mono" ? "text-lime" : "text-white"}
          onClick={() => setFilter({ ...filter, mode: "mono" })}
        >
          Mono
        </button>
      </div>
    </section>
  );
};

export default Utility;
