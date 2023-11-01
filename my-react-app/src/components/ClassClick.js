import React,{Component} from "react";

class ClassClick extends Component{

    clickHandler(){
        console.log("Class Click Button")
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Class Click Button</button>
            </div>
        )
    }
}

export default ClassClick;