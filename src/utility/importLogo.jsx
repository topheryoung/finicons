import { useRef, useEffect } from "react";

const createSVG = (logo) => {
  const svg = useRef(null);
  useEffect(() => {
    if (svg.current) {
      svg.current.appendChild(logo);
    }
  }, []);
  return <div className="p-2" ref={svg} />;
};

const formatName = (name) => name.replace(/_/g, " ");

const formatList = (list) => {
  const splitList = list.split("_");
  return {
    d30: splitList.includes("d30"),
    n100: splitList.includes("n100"),
  };
};

const initializeLogos = async () => {
  const modules = await import.meta.glob("../icons/color/*.svg", { as: "raw" });
  const logos = [];
  for (const path in modules) {
    await modules[path]().then((raw) => {
      const fileName = path.split("/").pop().split(".")[0];
      const file = fileName.split("-");
      logos.push({
        symbol: file[0],
        name: formatName(file[1]),
        list: formatList(file[2]),
        svg: () =>
          createSVG(
            new DOMParser().parseFromString(raw, "image/svg+xml")
              .documentElement
          ),
        raw,
      });
    });
  }
  return logos;
};

export { initializeLogos };
