import React from "react";


export class EntryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dpInput: null,
            rhInput: null,
            tempInput: null
        }
    }
    

    render(){
        let solveFor = this.props.solveFor;
        return(
            <div>
                <label for='dp'>Dew Point:</label>
                {solveFor==='dp' ? <input type='text' id='dp' name='dp' value={80} /> : <input type='text' id='dp' name='dp' />}               
                <br/>
                <label for='rh'>Relative Humidity:</label>
                {solveFor==='rh' ? <input type='text' id='rh' name='rh' value={80} /> : <input type='text' id='rh' name='rh' />}                
                <br/>
                <label for='temp'>Temprature:</label>
                {solveFor==='temp' ? <input type='text' id='temp' name='temp' value={80} /> : <input type='text' id='temp' name='temp' />} 
                <button >Calculate</button>               
            </div>
        )

    }

    
}