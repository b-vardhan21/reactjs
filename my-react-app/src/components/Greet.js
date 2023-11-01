import React from "react";

// function Greet(){
//     return <h1>Good Morning vardhan</h1>
// }

const Greet = (props)=>{
    const {name, heroName} = props
    return(
        <div>
            <h1>Good Morning {name} you are {heroName}</h1>
        </div>
    );
}

export default Greet;