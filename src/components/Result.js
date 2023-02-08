import React, { useEffect, useState,useContext } from "react";
import { InputContext } from "../App";
import "../css/style.css"
import axios from "axios";
import MeaningList from "./MeaningList";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import Audio from "./Audio";

axios.defaults.baseURL='https://api.dictionaryapi.dev/api/v2/entries/en';

const Result = () => {
  const {inputValue}=useContext(InputContext);
  const [response,setResponse]=useState(null);
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);

  const fetchData = async(param)=>{
    try {
      setLoading(true);
      const resp=await axios(`/${param}`);
      setResponse(resp.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    if(inputValue.length){
     fetchData(inputValue)
    }
  },[inputValue]);
  if(loading){
    return (
    <h1 className="resp">Loading...</h1>
    )
  }
  if(error){
    return <div className="container"><h3 className="meaning-container">No Definition Found</h3></div>
  }
  console.log(response);
  return (
    <div className="result-container">
      <div className="meaning-container" id="meaning-container">
        {
          response && (
            <><div className="container">
              <h3 className="meaning" id="meaning">
                Meaning & Definition:
                <MeaningList mean={response}/>
              </h3>
              <h3 className="meaning" id="meaning">
                Example:
                <Example mean={response}/>
              </h3>
              <h3 className="meaning" id="meaning">
                Synonym:
                <Synonym mean={response}/>
              </h3>
              <h3 className="meaning" id="meaning">
                Antonym:
                <Antonym mean={response}/>
              </h3>
              <h3 className="meaning" id="meaning">
                Audio:
                <Audio mean={response}/>
              </h3>
            </div></>
          )
        }  
      </div>
    </div>
  );
};

export default Result;
