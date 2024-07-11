import { Component } from "react"

class First1 extends Component{
    render(){
        return <div> 
        <h1>First1 class component</h1> </div>
    }
}


class Second1 extends Component{
    render(){
        return <h1>Second1 component</h1>;
    }
}

class Third1 extends Component {
    render() {
      return <h1>Third1 Component</h1>;
    }
  }

  class Fourth1 extends Component {
    render() {
      return <h1>Fourth1 Component</h1>;
    }
  }
  
export default First1;
export {Second1,Third1,Fourth1};