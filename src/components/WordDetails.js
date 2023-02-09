import React, { useEffect, useState } from "react";
import Meanings from "./Meanings";

const WordDetails = ({ ...props }) => {
  const [meanings, setMeanings] = useState(props.meanings);
  const meaningsList = meanings.map((meaning, index) => (
    <Meanings key={index} {...meaning} />
  ));

  const playAudio = (audioTrack) => {
    let audio = new Audio(audioTrack);
    audio.play();
  };

  const titleStyle = {
    fontSize: "clamp(1.5rem, 4vw, 4.5rem)",
  };

  // console.log(props);
  useEffect(() => {
    setMeanings(props.meanings);
  }, [props]);

  return (
    <section className="">
      <div className="flex items-center">
        {/* TITRE */}
        <div className="flex flex-col mr-auto">
          <h1 style={titleStyle}>{props.word}</h1>
          <p style={{ color: "#a575ca" }}>{props.phonetic}</p>
        </div>
        {/* BOUTONS PRONONCIATION */}
        {props.phonetics.length > 0 &&
          props.phonetics.map((item, i) => {
            if (item.audio) {
              return (
                <button
                  key={i}
                  onClick={() => playAudio(item.audio)}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              );
            }
          })}
      </div>
      {meaningsList}
      {props.sourceUrls.length > 0 && (
        <div className="flex gap-2">
          <p>Source</p>
          <a href={props.sourceUrls} rel="noreferrer" target={"_blank"}>
            {props.sourceUrls}
          </a>
        </div>
      )}
    </section>
  );
};

export default WordDetails;
