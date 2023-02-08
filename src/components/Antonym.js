import React from "react";

const Antonym = ({ mean }) => {
  return (
    <div className="meaning">
      {mean.map((val) =>
        val.meanings.map((ant,index) => (
          <div key={index}>
           {ant.antonyms? <li key={ant.antonyms}>{ant.antonyms}</li>: ''} 
          </div>
        ))
      )}
    </div>
  );
};

export default Antonym;
