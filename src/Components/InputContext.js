import React, {createContext, useState} from "react";
export  const InputContext = createContext();
const InputContextProvider = (props) => {
    const [randomNumber, setRandomNumber ] = useState('');
    const [disable, setDisable] = useState(-1);
    const [enteredNum, setEnteredNum] = useState([]);
    const [preventWriting, setPreventWriting]= useState();
    const [startIsClicked, setStartIsClicked]= useState(0);

    console.log(startIsClicked)
    const generateNumber = () => {
           setRandomNumber(Math.floor(1000 + Math.random() * 9000).toString()) ;
           setDisable(0)
           setPreventWriting(false);
           setStartIsClicked(1);
    }
    return(
        <InputContext.Provider value={{
            generateNumber,
            randomNumber,
            disable,
            enteredNum,
            setEnteredNum,
            setDisable,
            preventWriting,
            setPreventWriting,
            startIsClicked,
            setStartIsClicked
        }} >
            {props.children}
            </InputContext.Provider>
    )
}
export default InputContextProvider;