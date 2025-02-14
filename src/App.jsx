import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

   const hasDuration = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });

   
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      {hasDuration && (<Results userInput={userInput} />)}
      {!hasDuration && (<p>Duration cannot be less than 1</p>)}

    </>
  );
}

export default App;
