import React, { Component } from 'react';
import './Counter.css'
import CounterButton from './CounterButton';

class Counter extends Component{

    constructor(){
        super(); //Error 1 - we call the super method to became 'this' available
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this) //binding 'this' with increment function. Now we can use the expression 'this' there.
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render(){ 
        return(
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/> {/* Estou disponibilizando o método incrementMethod para que o filho (CounterButton) tenha acesso a ele como uma propriedade (props) */}
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }

    increment (value_from_counter_button){
        console.log("esse é o increment do pai");
        this.setState( //syntax with arrow function and prevState (the value of the state before the update)
            (prevState) => {
                return { counter: prevState.counter + value_from_counter_button }
            }
        );
    }

    decrement (value_from_counter_button){
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - value_from_counter_button }
            }
        );
    }

    reset (){
        this.setState({
            counter: 0
        });
    }
}

export default Counter;