import React from "react"

export const Hello=()=>{
    return(
        // <div id='hello' class='dummyClass'>
        //     <h1>Hello</h1>
        // </div>

        //jsx
        React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'Hello Participants'))
        );
};
