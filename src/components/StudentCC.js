import { Component } from "react";

export class Student1 extends Component{
    render(){
        return(
            <div>  
                <h2> Name : {this.props.name} </h2>
                <h2>address : {this.props.address}</h2>
                <h2>scores: {this.props.scores}</h2>
                </div>
        )


    }
}


 
