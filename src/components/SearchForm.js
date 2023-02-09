import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import WordDetails from "./WordDetails";
const SearchForm = ({ searchedWord, setSearchedWord, data, setData }) => {
  const [word, setWord] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const fetchData = async (myWord) => {
    setSpinner(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${myWord}`)
      .then((response) => {
        if (response.status >= 400) {
          setSpinner(false);
          throw new Error("Server responds with error!");
        }
        setSpinner(false);
        return response.json();
      })
      .then((myData) => setData(myData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.length > 0) {
      setIsEmpty(false);
      setSearchedWord(word);
      fetchData(word);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative mt-4 mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          name=""
          value={word}
          onChange={(e) => setWord(e.target.value)}
          id="default-search"
          className="block w-full focus:outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search for a word..."
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>

      {isEmpty && (
        <div
          className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
          style={{ width: "max-content" }}
        >
          <span className="font-medium">Le champs ne peut pas être vide !</span>
        </div>
      )}
      {spinner && <Spinner />}

      {data && <WordDetails {...data[0]} />}
    </form>
  );
};

export default SearchForm;
