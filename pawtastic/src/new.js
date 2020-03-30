import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name1: ' ',
    // Breed:'drge',
    // Bday:'',
    // Gender:'',
    // Spay:'',
    // Weight:''

    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange=(event)=> {
     this.setState({name1: event.target.name1});
    //  this.setState({Breed: event.target.Breed});
    //  this.setState({Bday: event.target.Bday});
    //  this.setState({Gender: event.target.Gender});
    //  this.setState({Spay: event.target.Spay});
    //  this.setState({Weight: event.target.Weight});
  }

  handleSubmit=(event)=> {
    alert(`A name was submitted: ${this.state.name1}`);
    event.preventDefault();

  } 

  render() {
    return (
      
      
       
      <form id="form1" onSubmit={this.handleChange}>
        <h1>Yay We Love Dogs!</h1>
        <h1>Give us the basic about your pup</h1>
        <label>  
          Name: 
          <input type="text"  value={this.state.name1} onChange={this.handleChange}/>
          <br/>
          <br/>

          {/* Breed: 
          <input type="text"  value={this.state.Breed} onChange={this.handleChange}/>
         
          Birthday: 
          <input type="text"  value={this.state.Bday} onChange={this.handleChange}/>
          <br/>
          <br/>
          Gender 
          <input type="text"  value={this.state.Gender} onChange={this.handleChange}/>
          Spayed or Neutered
          <input type="text"  value={this.state.Spay} onChange={this.handleChange}/>
          <br/>
          <br/>
          Weight
          <input type="text"  value={this.state.Weight} onChange={this.handleChange}/>
          <br/
          <br/> */}
       
          <input type="submit"  value="Submit" onClick={this.handleSubmit}/>
          </label>
      </form>
    )
  }
}