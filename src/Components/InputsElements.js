import React, {Fragment, useContext, useEffect, useState} from "react";
import {InputContext} from "./InputContext";


const InputsElements = ( { checkEnteredNum, disabled }  ) => {

    const {disable, setDisable ,setEnteredNum,startIsClicked,setStartIsClicked} = useContext(InputContext);
    const [enteredDigits,setEnteredDigits] = useState(['','','','']);
    const digits= ['','','',''];


    useEffect( () => {
        if (startIsClicked===1) {
            setEnteredDigits(['','','',''])
            console.log(startIsClicked)
        }
    },[setStartIsClicked]);

    const onClickButton = () => {
        checkEnteredNum(enteredDigits);
        setEnteredNum([...enteredDigits]);
        setDisable(disable + 1);
    }
    const onChangeHandler =(event,i)=>{
        const x = [...enteredDigits];
           x[i]=(event.target.value)
        setEnteredDigits(x)
    }
    return(
        <div  className={"elements"}>
            {digits.map((x,index)=>{
                return( <input type="text"  maxLength="1" size="2" disabled={disabled} onChange={event => onChangeHandler(event,index)}  value={enteredDigits[index]}/>)
            })}
            <button disabled={disabled} className={"button-style"} onClick={onClickButton} >Check</button>
        </div>

    );


}
export default InputsElements;