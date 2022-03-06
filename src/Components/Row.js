import React, {useContext, useState} from "react";
import InputsElements from "./InputsElements";
import CirclesList from "./CirclesList";
import {InputContext} from "./InputContext";

const  Row = ({index}) =>{
    const {randomNumber,disable} = useContext(InputContext);
    const [circlesColor,setCirclesColor] = useState([]);

    const checkEnteredNum =(enteredNum)=> {
        let generatedNumDigits = ("" + randomNumber).split("");
        console.log(enteredNum)
        const colorsList = [];
        enteredNum.map((digit, index) => {
            generatedNumDigits.includes(digit) ? generatedNumDigits[index].includes(digit) ? colorsList[index] = "blue" :
                    colorsList[index] = "white" :
                colorsList[index] = "";
        })
        setCirclesColor(colorsList.sort())
        console.log(colorsList)
    }

    return(

            <div className={"single-try"}>
                <InputsElements disabled={index !== (disable)} index={index} checkEnteredNum={checkEnteredNum} />
                <CirclesList circles={circlesColor}/>
            </div>

)
}
export default Row;