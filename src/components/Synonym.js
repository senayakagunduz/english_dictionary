import React from "react";

const Synonym = ({ mean }) => {
  return (
    <div className="row">
      {mean.map((val) =>
        val.meanings.map((ant,index) => (
          <div className="column" key={index}>
            { ant.synonyms? <li key={ant.synonyms}>{ant.synonyms}</li>: ''}
          </div>
          )
        )
      )}
    </div>
  );
};

export default Synonym;
