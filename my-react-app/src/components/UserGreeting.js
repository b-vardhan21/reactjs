import react, {Component} from 'react'

class UserGreeting extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false,
            message: ''
        }
    };

    handler(){
        if(this.state.isLoggedIn){
            this.setState({
                message: "welcome vardhan"
            });
        }
        else{
            this.setState({
                message: "welcome Guest"
            });
        }
    }
   
    render(){

        return(
            this.state.isLoggedIn && <div>Welcome Barishetti</div>
        )

        // return(
        //     this.state.isLoggedIn ?(
        //     <div>Welcome Barishetti</div> 
        //     ):(
        //     <div>Welcome Guest</div>
        //     )
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>welcome vardhan</div>
        // }
        // else{
        //     message = <div>welcome guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )


        // return(
        //     // <div>
        //     //     <h1>{this.state.message} </h1>
        //     //     <button onClick={()=>this.handler()}>Click Me</button>
        //     // </div>
        // )
       
    }

}

export default UserGreeting