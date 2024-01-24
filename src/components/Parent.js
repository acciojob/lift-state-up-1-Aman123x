import React,{useState} from "react";
import Child from "./Child";
const Parent=()=>{
    const [showModal,setShowModal]=useState(false);

    return(
        <div className="parent">
            <Child setShowModal={setShowModal} showModal={showModal}/>
        </div>
    )
}

export default Parent;