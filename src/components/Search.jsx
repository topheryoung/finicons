import MagnifyGlass from "../assets/search.svg";
import Clear from "../assets/x.svg";

const SearchBar = ({ term, handleSearch }) => {
  return (
    <div className="flex w-full relative items-center">
      <img
        src={MagnifyGlass}
        alt="Search"
        style={{ height: "18px", width: "18px" }}
        className="absolute z-20 left-4 drop-shadow-lg"
      />
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full border-2 text-lg border-black dark:border-neutral-700 dark:bg-black dark:drop-shadow-xldark drop-shadow-xl py-4 pl-12 pr-20 text-black dark:text-white placeholder:text-gray focus:outline-0 focus:drop-shadow-xlactive dark:focus:drop-shadow-xlactive"
        placeholder="Search financial logos..."
        value={term}
        onChange={(event) => handleSearch(event.target.value)}
      />
      {term.length > 0 ? (
        <button onClick={() => handleSearch("")} className="absolute right-4">
          <img
            src={Clear}
            alt="Clear Search"
            style={{ height: "18px", width: "18px" }}
          />
        </button>
      ) : null}
    </div>
  );
};

export default SearchBar;
