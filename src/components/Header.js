import React, { useContext, useState } from "react";
import { InputContext } from "../App";
import "../css/style.css";

const Header = () => {
  const [value, setValue] = useState("");
  const {inputValue,setInputValue}=useContext(InputContext);
  // console.log(inputValue);
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(value);
    setValue("");   //entera basınca value boşalır
  };
 
  return (
    <div>
      <form className="container" id="container" onSubmit={handleSubmit}>
        <h1 className="heading">English Dictionary</h1>
        <div className="search-container" id="search-container">
          <input
            type="text"
            className="input"
            id="input"
            placeholder="Search a world"
            onChange={handleChange}
            value={value}
            // onKeyDown={handleInputKeyDown}
          />
        </div>
        <p className="info-text" id="info-text">
          <strong>Type a world and press enter</strong>
        </p>
        {
          inputValue && ( <p className="title" id="title">
          Result for:<strong>{inputValue}</strong>
        </p>)
        }
        
      </form>
    </div>
  );
};

export default Header;
