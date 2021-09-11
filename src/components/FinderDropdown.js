import React from "react";


export class FinderDropdown extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        let type = e.target.value;
        this.props.getType(type);
    }

    render(){
        return(
            <div>
                    <label for="calculate">Calculate:</label>
                <select id="calculate" name="calculate" onChange={this.handleChange} >
                    <option value="dp">DewPoint</option>
                    <option value="rh">Relative Humidity</option>
                    <option value="temp">Temperature</option>
                </select>
            </div>
        )
    }
} 