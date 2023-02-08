import { createContext, useState } from "react";
import "../src/css/style.css";
import Header from "./components/Header";
import Result from "./components/Result";

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue)
  const value = {
    inputValue,
    setInputValue,
  };
  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Result />
        </header>
      </div>
    </InputContext.Provider>
  );
}

export default App;
