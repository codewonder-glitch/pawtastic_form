import './Rightform.css';
import React, { Component } from 'react'

export default class Rightform extends Component {
  constructor(props) {
    super(props);

    this.state = {name1: '',
    Breed:'',
    Bday:'',
    Gender:'',
    Spay:'',
  }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    // this.setState({Breed: event.target.Breed});
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.Spay}`);
    event.preventDefault();

  } 

  render() {
    return (
      <form id="form1" onSubmit={this.handleChange}>
        <h1>Yay We Love Dogs!</h1>
        <h1>Give us the basic about your pup</h1>
        <label>  
          Name: 
          <input name="name1" type="text"  value={this.state.name1} onChange={this.handleChange}/>
          </label>
          <label>
              <img src=""></img>
          </label>
          <br />
          <br />
          <label> 
          Breed: 
          <input name="Breed" type="text"  value={this.state.Breed} onChange={this.handleChange}/>
          </label>
  
          <label> 
          Birthday:
          <input name="Bday"type="text"  value={this.state.Bday} onChange={this.handleChange}/> 
          </label>
          <br />
          <br />
          
          <label> 

          
                Gender <br />
                <select class='twoOptions' size="2">
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </label>
          
          
          <label> 
          Spayed or Neutered
          <input style={{size:"100px" }} name="Spay" type="text"  value={this.state.Spay} onChange={this.handleChange}/>
          </label>
          <br />
          <br />
          <label> 
          Weight
          <input type="text"  value={this.state.Weight} onChange={this.handleChange}/>
          <br/>
          </label>
          <br />
          <br />

          <input type="submit"  value="Submit" onClick={this.handleSubmit}/>
      </form>
    )
  }
}
