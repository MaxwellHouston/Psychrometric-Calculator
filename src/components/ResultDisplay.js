import React from 'react';
import './App.css';
import Library from '../Utility/Library';

export const ResultDisplay = (props) => {

    const solveFor = props.solveFor;
    const tStyle = props.tempInput;
    const { rh, temp, dp } = props.inputs;
    const display = {
        display: props.display,
        textDecoration: 'underline #ff3b3f'
    }


    const displayResult = (solveFor,rh,temp,dp,tStyle) => {
        switch(solveFor) {
            case 'rh':
                return `The Relative Humidity is ${Library.findRH(temp,dp,tStyle)}%`;
            case 'dp':
                return `The Dew Point is ${Library.findDP(rh,temp,tStyle)}`;
            case 'temp':
                return `The Temperature is ${Library.findTemp(rh,dp,tStyle)}`;
            default: 
                return '';
        }
    }

       
    return(
        
        <p style={display}>{displayResult(solveFor,rh,temp,dp,tStyle)}</p>)
}