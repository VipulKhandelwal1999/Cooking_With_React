import React, { Component } from "react";
import {ThemeContext} from "./App";


class Counter extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: this.props.initialCount
        }
    }

    changeCount(amount) {
        /*
            it will increase by amount only once because it calls 
            it asyncronously so amount is just replaced by amount 
            so it will only increase by amount only once.
            So if you don't wanna access previousState then you can
            use the given below code but if you wanna access previousState 
            then use second part which is function form.

            this.setState({count: this.state.count + amount});
            this.setState({count: this.state.count + amount});
        */
        /*
            this.setState(prevState => {
                return {count: prevState.count + amount};
            });
            this.setState(prevState => {
                return {count: prevState.count + amount};
            });
        */
        this.setState(prevState => {
            return {count: prevState.count + amount};
        });
    }

    render(){
        return (
            <ThemeContext.Consumer>
            {
                style => (<>
                    <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                    <span>{this.state.count}</span>
                    <button style={style} onClick={() => this.changeCount(1)}>+</button>
                </>)
            }   
            </ThemeContext.Consumer>
        );
    }
}

export default Counter;