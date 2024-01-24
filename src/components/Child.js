import React from "react";

const Child=({showModal,setShowModal})=>{

    function handleClick(){
        setShowModal(true);
    }

    return(
        <div>
            <button onClick={handleClick}>Show Modal</button>
            {
                showModal==true && (
                    <div>
                        <h1>Modal Content</h1>
                        <p>Thus this is the modal content.</p>
                    </div>
                )
            }
        </div>
    )
}

export default Child;