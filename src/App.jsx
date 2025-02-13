import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    intialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const isValidData = userInput.duration >= 1;

function handleInputChange(inputIdentifier, newValue) {
    console.log(typeof(newValue))
    setUserInput((prevInput) => {
        return {
            ...prevInput,
            [inputIdentifier]: +newValue
        }
    });
}

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {isValidData && <Results userInput={userInput} />}
      {!isValidData && <p className="center">Please enter valid duration</p>}
    </>
    
  )
}

export default App
