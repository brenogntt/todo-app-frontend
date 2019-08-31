import React, { Component } from 'react';
import './Counter.css'

class CounterButton extends Component{

    //Define the initial state in a constructor
    //state => counter 0
    // constructor(){
        //super(); //Error 1 - we call the super method to became 'this' available
        //this.state = {
            //counter: 0
        //}

        //this.increment = this.increment.bind(this) //binding 'this' with increment function. Now we can use the expression 'this' there.
        //this.decrement = this.decrement.bind(this)
    //}

    render(){ //if I use arrow function here, I don't need to do the binding for 'this' that I have done above.  
        return(
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button> {/* IF i DONT USE THE ARROW FUNCTION, THIS WILL BE CALLED AS SOON AS IT RUNS, NOT WHEN IT IS CLICKED (ONCLICK EVENT)*/}
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }

    //increment (){
        //console.log("esse é o increment do filho");
        //this.setState({ //setState is a merge of virtual DOM with DOM. Merge the diff.
            //counter: this.state.counter + this.props.by
        //})
    
        //this.props.incrementMethod(this.props.by);
    //}


    //decrement (){
        //this.setState({ 
            //counter: this.state.counter - this.props.by
        //})
    
        //this.props.decrementMethod(this.props.by);
    //}
}

export default CounterButton;

//in JSX we put javascript code in {} curl braces
// when I call a method inside {}, I should put only the reference to the method (only its name), if I put () in the end of it, I invoke it