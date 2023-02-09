import "./App.css";
import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import "./styles/meanings.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchedWord, setSearchedWord] = useState("");
  const [data, setData] = useState("");
  const [font, setFont] = useState("Serif");

  return (
    <div className={`App ${darkMode && "dark"} ${font}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setFont={setFont} />
      <SearchForm
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
