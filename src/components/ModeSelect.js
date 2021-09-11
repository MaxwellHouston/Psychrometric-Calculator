import React from "react";


export class ModeSelect extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let style = e.target.value;
        this.props.changeTemp(style)
    }

    render(){
        return(
            <div>
                <form onChange={this.handleChange}>
                    <p>Choose Temperature Input</p>
                    <input type="radio" id="fahrenheit" name="tempInput" value="fahrenheit" />
                    <label for="fahrenheit"> Fahrenheit </label>
                    <input type="radio" id="celsius" name="tempInput" value="celsius" />
                    <label for="celsius"> Celsius </label>
                </form>
            </div>
        )
    }
}