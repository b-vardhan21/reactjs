import React, {Component} from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    Increment(){


        this.setState((prevState) => ({
            count : prevState.count + 1
            
        }))

        // this.setState({
        //     count: this.state.count + 1
        // },()=>{
        //     console.log('call back value', this.state.count)
        // })
        // console.log(this.state.count);
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
    }

    IncrementFive(){
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }

    render(){
        return(
            <div>
                Count - {this.state.count} <br/>
                <button onClick={()=> this.IncrementFive()}>Increase</button>
            </div>
        )
    }
}
export default Counter;
