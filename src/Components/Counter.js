import React,{Component} from "react"

class Counter extends Component{

    state={
        score:0,
    }
     Increment=()=>{
    this.setState(prevState=>(
        {score:prevState.score+1}
    ));
        
    }
    Decrement=()=>{
       this.setState(prevState=>(
{score:prevState.score-1}
       ));

       
    }
    render(){
    return (
        <div class="counter"> 
        <button class="counter-action decrement" onClick={this.Decrement}>-</button>
        <span class="counter-score">{this.state.score}</span>
        <button  class="counter-action increment" onClick={this.Increment}>+</button>
        </div>
       
    )
    }
};
export default Counter;