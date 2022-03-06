import React, {Fragment, useContext, useState} from "react";
import {InputContext} from "./InputContext";


const InputsElements = ( { checkEnteredNum, disabled,index }  ) => {

    const {disable, setDisable ,setEnteredNum} = useContext(InputContext);
    const [enteredDigits,setEnteredDigits] = useState([]);
   // let x = disable;
    //console.log(x)
    const onClickButton = () =>{
        checkEnteredNum(enteredDigits);
        setEnteredNum(enteredDigits);
        setDisable(disable + 1);
    }
    return(
        <Fragment>
        <div  className={"elements"}>
            <input type="text"  maxLength="1" size="2" disabled={disabled}   onChange={(event => setEnteredDigits([...enteredDigits,event.target.value]))}  />
            <input type="text"  maxLength="1" size="2" disabled={disabled}   onChange={(event => setEnteredDigits([...enteredDigits,event.target.value]))}  />
            <input type="text"  maxLength="1" size="2" disabled={disabled}   onChange={(event => setEnteredDigits([...enteredDigits,event.target.value]))}  />
            <input type="text"  maxLength="1" size="2" disabled={disabled}   onChange={(event => setEnteredDigits([...enteredDigits,event.target.value]))}  />
            <button disabled={disabled} className={"button-style"} onClick={onClickButton} >Check</button>
        </div>
        </Fragment>
    );
    //value={(disable === 1)?  " " : enteredNum[index[0]]}
}
export default InputsElements;