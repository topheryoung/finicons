import { useState } from "react";

const Logo = ({ symbol, name, svg, raw }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (raw) => {
    navigator.clipboard.writeText(raw).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  return (
    <button
      className="relative w-full bg-white dark:bg-black border-black dark:border-white border-2 flex flex-col items-center justify-between hover:drop-shadow-lg"
      onClick={() => handleCopy(raw)}
    >
      {copied ? (
        <span className="absolute top-0 left-0 right-0 bg-lime text-black p-1">
          Copied
        </span>
      ) : null}
      <span className="text-xs my-2 px-2 text-black dark:text-white w-full text-left uppercase">
        {symbol}
      </span>
      {svg()}
      <span className="text-sm font-bold text-black dark:text-white my-2 uppercase">
        {name}
      </span>
    </button>
  );
};

export default Logo;
