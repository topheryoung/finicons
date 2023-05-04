import { useState, useEffect } from "react";
import { initializeLogos } from "./utility/importLogo";
import Header from "./components/Header";
import SearchBar from "./components/Search";
import Utility from "./components/Utility";
import LogoList from "./components/List";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState({ list: "all", mode: "color" });
  const [search, setSearch] = useState("");
  const [logos, setLogos] = useState({ src: [], list: [] });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const hydrateLogos = async () => {
      const data = await initializeLogos();
      setLogos({ src: data, list: data });
      setLoaded(true);
    };

    if (!loaded) {
      hydrateLogos();
    }
  }, [loaded]);

  useEffect(() => {
    const refined = logos.src.filter((logo) => {
      if (filter.list === "all") {
        if (search === "") return true;
        else return checkSearch(search, logo);
      } else {
        if (search === "") return logo.list[filter.list];
        else return logo.list[filter.list] && checkSearch(search, logo);
      }
    });
    setLogos({ ...logos, list: refined });
  }, [filter, search]);

  const checkSearch = (term, logo) => {
    return (
      logo.symbol.toLowerCase().includes(term.toLowerCase()) ||
      logo.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  const toggleTheme = (theme) => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-black">
        <Header theme={theme} toggleTheme={() => toggleTheme(theme)} />
        <main className="container mx-auto p-6 max-w-3xl">
          <section className="sticky top-0 z-10 pt-4 bg-white dark:bg-black flex flex-col items-center justify-between space-y-4">
            <SearchBar term={search} handleSearch={(term) => setSearch(term)} />
            <Utility
              filter={filter}
              setFilter={(options) => setFilter(options)}
            />
          </section>
          {loaded ? <LogoList logos={logos.list} /> : null}
        </main>
      </div>
    </div>
  );
}

export default App;
