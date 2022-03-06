import React from "react";
import RowList from "./RowList";
import Start from "./Start";

const GuessCodeContent =()=>{
    return(
        <div className={"start"}>
            <RowList />
            <Start />
        </div>
    )
}
export default GuessCodeContent;