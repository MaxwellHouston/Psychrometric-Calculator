import React from "react";


export class EntryForm extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange ({target}) {
        const {name, value} = target;
        this.props.handleInput(name,value)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.showResults();
    }

    render(){
        let solveFor = this.props.solveFor;
        const { rh,dp,temp } = this.props.inputs;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for='dp'>Dew Point:</label>
                    {solveFor==='dp' ? <input type='text' id='dp' value='' disabled /> : 
                    <input type='text' id='dp' name='dp' onChange={this.handleChange} value={dp}  />}               
                    <br/>
                    <label for='rh'>Relative Humidity:</label>
                    {solveFor==='rh' ? <input type='text' id='rh' value='' disabled /> : 
                    <input type='text' id='rh' name='rh' onChange={this.handleChange} value={rh} />}                
                    <br/>
                    <label for='temp'>Temprature:</label>
                    {solveFor==='temp' ? <input type='text' id='temp' value='' disabled /> : 
                    <input type='text' id='temp' name='temp' onChange={this.handleChange} value={temp} />} 
                    <br/>
                    <input type='submit' value='Calculate' /> 
                </form>            
            </div>
        )

    }

    
}