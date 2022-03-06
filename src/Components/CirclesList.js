import React, {useContext} from "react";
import {InputContext} from "./InputContext";
import Circle from "./Circle";
const CirclesList = ({circles}) => {
    return(
        <div className={"circles"}>
            {
                circles ?
                    circles.map(circle=>{
                    return(
                        <Circle
                            key={Math.random().toString()}
                            circleColor={circle} />
                    )
                }):(<div/>)
            }
        </div>
    )

}
export default CirclesList;