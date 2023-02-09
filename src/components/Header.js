import { React, useState } from "react";

// import WhiteIcon from "/src/MoonWhite.png";
// import BlackIcon from "/src/MoonBlack.png";

const Header = ({ darkMode, setDarkMode, setFont }) => {
  const [selectedFont, setSelectedFont] = useState();
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setFont(e.target.value);
  };

  return (
    <header className="flex items-center gap-4 mb-10">
      {/* <img
        src="/src/logo.svg"
        style={{ width: "48px", height: "48px" }}
        alt=""
      /> */}
      <img
        src="https://img.icons8.com/windows/64/000000/literature-1.png"
        alt=""
        style={{ width: "48px", height: "48px" }}
      />
      <select
        value={selectedFont}
        onChange={handleSelect}
        id="countries"
        className="ml-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="Serif">Serif</option>
        <option value="Sans">Sans Serif</option>
        <option value="Mono">Mono</option>
      </select>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={handleClick}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <img
        src="https://img.icons8.com/sf-regular/48/null/moon-symbol.png"
        alt=""
        style={{ width: "48px", height: "48px" }}
      />
    </header>
  );
};

export default Header;
