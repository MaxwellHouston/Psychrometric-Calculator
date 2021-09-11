import './App.css';
import React from 'react';
import { ModeSelect } from './ModeSelect';
import { FinderDropdown } from './FinderDropdown';
import { EntryForm } from './EntryForm';

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tempInput: null,
      solveFor: 'dp'
    };
    this.changeTemp = this.changeTemp.bind(this);
    this.getType = this.getType.bind(this);
  }

  changeTemp(style){
    this.setState(
      {tempInput: style}
    )
  }

  getType(type){
    this.setState(
      {solveFor: type}
    )
  }

  render() {
    return(
      <div className="body">
        <h1>Psychrometric Calculator</h1>
        <div className="about-div">
          <p className="about">
            This Psychrometric Calculator takes in two inputs that you have and solves for the missing third value.
            Depending on what inputs you have available, select which value to calculate from the dropdown menu.
            Enter your values and hit submit to calculate the third value.
          </p>
        </div>
        <div className="options">
          <ModeSelect changeTemp={this.changeTemp} />
          <FinderDropdown getType={this.getType} />
        </div>
        <div className="entry">
          <EntryForm />
        </div>
      </div>
    )
  }
}
