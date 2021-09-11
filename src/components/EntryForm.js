import React from "react";


export class EntryForm extends React.Component{



    render(){
        let solveFor = 'rh';

        return(
            <div>
                <label for='dp'>Dew Point:</label>
                {solveFor==='dp' ? <input type='text' id='dp' name='dp' value='564' /> : <input type='text' id='dp' name='dp' />}               
                <br/>
                <label for='rh'>Relative Humidity:</label>
                <input type='text' id='rh' name='rh' />                
                <br/>
                <label for='temp'>Temprature:</label>
                <input type='text' id='temp' name='temp' />                
            </div>
        )

    }

    
}