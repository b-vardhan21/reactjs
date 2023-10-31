import React from "react";

// function Greet(){
//     return <h1>Good Morning vardhan</h1>
// }

const Greet = (props)=>{
    return(
        <div>
            <h1>Good Morning {props.name} you are {props.heroName}</h1>
            {props.children}
        </div>
    );
}

export default Greet;