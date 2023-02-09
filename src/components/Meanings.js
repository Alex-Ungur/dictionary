const Meanings = ({ ...meaning }) => {
  const definitionList = meaning.definitions.map((meaning, index) => (
    <>
      <li key={index} className={"mb-2"}>
        {meaning.definition}
      </li>
      {meaning.example && (
        <p style={{ color: "#aeaeae" }}>"{meaning.example}"</p>
      )}
    </>
  ));

  const synonymList = meaning.synonyms.map((synonym, index) => (
    <p style={{ color: "#a575ca", fontWeight: "bold" }} key={index}>
      {synonym}
    </p>
  ));

  return (
    <div>
      <p className="typeOfWord">{meaning.partOfSpeech}</p>
      <p>Meaning</p>
      <ul>{definitionList}</ul>
      {synonymList.length > 0 && (
        <div className="flex gap-2">
          <p>Synonyms :</p>
          <div className="flex flex-col">{synonymList}</div>
        </div>
      )}
    </div>
  );
};

export default Meanings;
