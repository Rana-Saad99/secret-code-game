import React, {useContext} from "react";
import {InputContext} from "./InputContext";

const Start = () => {
    const { generateNumber, randomNumber, enteredNum, disable,setStartIsClicked } =useContext(InputContext);
    console.log(enteredNum, randomNumber);
    let booleanResult = enteredNum.length > 0


    enteredNum.forEach((digit,index) =>{
       if (digit !== randomNumber[index]){
           booleanResult = false;
       }
    })
    let output ;
    if(booleanResult){
       output = "You Win"
        setStartIsClicked(0);
    } else if (disable === 8){
        output = "You Lost"
        setStartIsClicked(0);
    }

    return(
        <div className={"start-content"}>
            <div>
                <h1> {output}</h1>
                {( booleanResult || disable === 8 ) && <label>The Secret Code Is:  {randomNumber}</label>}
            </div>
            <button className={"button-style"} onClick={generateNumber}>Start</button>
        </div>
    )
}
export default Start;