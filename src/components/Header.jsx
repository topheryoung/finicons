import { ReactComponent as Github } from "../assets/github.svg";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";

const Header = ({ theme, toggleTheme }) => (
  <header className="flex container mx-auto p-6 mb-6 max-w-6xl justify-between content-center">
    <h1 className="font-display uppercase text-4xl text-black dark:text-white drop-shadow-lg">
      Finicons
    </h1>
    <div className="flex content-center space-x-6">
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <img
            src={Moon}
            alt="Toggle Light Mode"
            style={{ height: "18px", width: "18px" }}
          />
        ) : (
          <img
            src={Sun}
            alt="Toggle Dark Mode"
            style={{ height: "18px", width: "18px" }}
          />
        )}
      </button>
      <a
        href="https://github.com/topheryoung/finicons"
        className="flex p-2 bg-black dark:bg-neutral-800 text-white dark:text-black space-x-2 font-regularbold uppercase hover:drop-shadow-lg hover:text-lime-500 focus:outline-lime-500 px-4 items-center"
      >
        <Github />
        <span>Star on Github</span>
      </a>
    </div>
  </header>
);

export default Header;
