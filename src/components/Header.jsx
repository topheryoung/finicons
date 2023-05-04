import { ReactComponent as Donate } from "../assets/donate.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";

const Header = ({ theme, toggleTheme }) => (
  <header className="flex container mx-auto p-6 mb-6 max-w-6xl justify-between content-center">
    <h1 className="font-display uppercase text-4xl text-black dark:text-white drop-shadow-lg">
      SPIcons
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
        href="#"
        className="flex p-2 bg-black dark:bg-white text-white dark:text-black space-x-2 font-regular uppercase hover:drop-shadow-lg hover:text-lime focus:outline-lime px-4 items-center"
      >
        <Donate className="stroke-black dark:stroke-black" />
        <span>Donate</span>
      </a>
      <a
        href="#"
        className="flex p-2 bg-black dark:bg-white text-white dark:text-black space-x-2 font-regularbold uppercase hover:drop-shadow-lg hover:text-lime focus:outline-lime px-4 items-center"
      >
        <Github />
        <span>Star on Github</span>
      </a>
    </div>
  </header>
);

export default Header;