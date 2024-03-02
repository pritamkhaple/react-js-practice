import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    console.log(buttonName);
    if (buttonName === "C"){
        setCalVal("")
    }else if  (buttonName === "="){
      try {
        const result = evaluate(calVal); // Use math.js for evaluation
        setCalVal(result.toString());
      } catch (error) {
        // Handle invalid expressions
        setCalVal("Error");
      }
    } else  {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculatorDiv}>
      <Display displaylValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
