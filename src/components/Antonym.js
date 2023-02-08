import React from "react";

const Antonym = ({ mean }) => {
  return (
    <div className="meaning">
      {mean.map((val) =>
        val.meanings.map((ant) => (
          <div key={ant.antonyms}>
           {ant.antonyms? <li>{ant.antonyms}</li>: ''} 
          </div>
        ))
      )}
    </div>
  );
};

export default Antonym;
