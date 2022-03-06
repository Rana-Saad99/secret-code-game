import React, {useContext} from "react";
import Row from "./Row";
import {InputContext} from "./InputContext";

const RowList = () =>{
    const {disable} = useContext(InputContext);

    const components= [];
    let i=0;
    console.log(disable)

    for (i; i < 8; i++) {
        components.push(<Row index={i} key={i.toString()}/>)
    }

    console.log(components)
    return(
        <div className={"inputElements"}>
            {components}
        </div>
    )
}
export default RowList;