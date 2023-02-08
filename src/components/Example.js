import React from "react";

const Example = ({ mean }) => {
  return (
    <div className="example">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def,index) => (
            <div key={index} >
                { def.example ? <li key={def.example}>{def.example}</li> : ''} 
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Example;
