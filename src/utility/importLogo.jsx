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

const initializeLogos = async () => {
  const modules = await import.meta.glob("../icons/color/*.svg", { as: "raw" });
  const logos = [];
  for (const path in modules) {
    await modules[path]().then((raw) => {
      const fileName = path.split("/").pop().split(".")[0];
      logos.push({
        symbol: fileName.split("-")[0],
        name: formatName(fileName.split("-")[1]),
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
