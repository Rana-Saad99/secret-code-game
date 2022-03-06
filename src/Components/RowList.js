import React, {useContext} from "react";
import Row from "./Row";
import {InputContext} from "./InputContext";

const RowList = () =>{
    const components= [];
    let i=0;
    for (i; i < 8; i++) {
        components.push(<Row index={i} key={i.toString()}/>)
    }

    return(
        <div className={"inputElements"}>
            {components}
        </div>
    )
}
export default RowList;