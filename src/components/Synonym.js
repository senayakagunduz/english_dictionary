import React from "react";

const Synonym = ({ mean }) => {
  return (
    <div className="row">
      {mean.map((val) =>
        val.meanings.map((ant) => (
          <div className="column" key={ant.synonyms}>
            { ant.synonyms? <li>{ant.synonyms}</li>: ''}
          </div>
          )
        )
      )}
    </div>
  );
};

export default Synonym;
