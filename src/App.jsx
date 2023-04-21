import { useState, useEffect } from "react";
import { initializeLogos } from "./utility/importLogo";
import Header from "./components/Header";
import Search from "./components/Search";
import Utility from "./components/Utility";
import LogoList from "./components/List";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState("light");
  const [format, setFormat] = useState({ type: "SVG", mode: "color" });
  const [term, setTerm] = useState("");
  const [logos, setLogos] = useState({ original: [], refined: [] });

  useEffect(() => {
    const hydrateLogos = async () => {
      const data = await initializeLogos();
      setLogos({ refined: data, original: data });
      setLoaded(true);
    };

    if (!loaded) {
      hydrateLogos();
    }
  }, [loaded]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = (theme) => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  const handleSearch = (searchTerm) => {
    setTerm(searchTerm);
    const refined = logos.original.filter((logo) => {
      return logo.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setLogos({ ...logos, refined });
  };

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-black">
        <Header theme={theme} toggleTheme={() => toggleTheme(theme)} />
        <main className="container mx-auto p-6 max-w-3xl">
          <section className="sticky top-0 z-10 pt-4 bg-white dark:bg-black flex flex-col items-center justify-between space-y-4">
            <Search term={term} handleSearch={handleSearch} />
            <Utility format={format} setFormat={setFormat} />
          </section>
          {loaded ? (
            <LogoList
              logos={term.length > 0 ? logos.refined : logos.original}
            />
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default App;
