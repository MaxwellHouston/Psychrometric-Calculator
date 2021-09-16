import './App.css';
import React from 'react';
import { ModeSelect } from './ModeSelect';
import { FinderDropdown } from './FinderDropdown';
import { EntryForm } from './EntryForm';
import { ResultDisplay } from './ResultDisplay';

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tempInput: null,
      solveFor: 'dp',
      dp: '',
      rh: '',
      temp: '',
      display: 'none'  
    };
    this.changeTemp = this.changeTemp.bind(this);
    this.getType = this.getType.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  changeTemp(style){
    this.setState(
      {tempInput: style,
        dp: '',
        rh: '',
        temp: '',
        display: 'none'}
    )
  }

  getType(type){
    this.setState(
      {solveFor: type,
        dp: '',
        rh: '',
        temp: '',
        display: 'none'}
    )
  }

  handleInput(name,value) {
    this.setState( {
        [name]: value,
        display: 'none'
    } )
  }

  showResults() {
    this.setState({
      display: 'block'
    })
  }

  render() {
    const inputs = {
      dp: this.state.dp,
      rh: this.state.rh,
      temp: this.state.temp
    }
    
    return(
      <div className="body">
        <h1>Psychrometric Calculator</h1>
        <div className="container">
          <p className="about box">
            This Psychrometric Calculator takes in two inputs that you have and solves for the missing third value.
            Depending on what inputs you have available, select which value to calculate from the dropdown menu.
            Enter your values and hit submit to calculate the third value.
          </p>
        
          <div className="options box">
            <ModeSelect changeTemp={this.changeTemp} />
            <FinderDropdown getType={this.getType} />
          </div>
          <div className="entry box">
            <EntryForm
            tempInput={this.state.tempInput}
            solveFor={this.state.solveFor}  
            handleInput={this.handleInput}
            inputs={inputs} 
            showResults={this.showResults}
            />
          </div>
        </div>
        <div className="results">
          <ResultDisplay 
            solveFor={this.state.solveFor}
            inputs={inputs}
            tempInput={this.state.tempInput}
            display={this.state.display}
          />
        </div>
          
      </div>
    )
  }
}
