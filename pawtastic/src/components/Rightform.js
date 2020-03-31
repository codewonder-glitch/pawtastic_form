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
      <div id="header">
      <form id="form1" onSubmit={this.handleChange}>
        <h1>Yay We Love Dogs!</h1>
        <h1>Give us the basic about your pup</h1>
        <label>  
          Name: 
          <br />
          <input name="name1" type="text"  value={this.state.name1} onChange={this.handleChange}/>
          </label>
          <label>
              
          <input name="name1" type="text"  value={this.state.name1} onChange={this.handleChange}/>
       
          </label>
         
          <br />
          <label> 
          Breed: 
         <br />
          <input name="Breed" type="text"  value={this.state.Breed} onChange={this.handleChange}/>
          </label>
  
          <label> 
          Birthday:
          <br />
          <input name="Bday"type="text"  value={this.state.Bday} onChange={this.handleChange}/> 
          </label>
          
          
          <br />
          <label>
        
        Gender 
                <br />
                <select className='twoOptions' size="2">
                <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  
                </select>
              </label>
          <label> 
          Spayed
          <br />
          <select className='twoOptions' size="2">
                <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  
                </select>
          </label>
          <br />
          
          <label> 
          Weight
          <br />
          <select className='twoOptions' size="2">
                <option value="Male">0-25lbs</option>
                  <option value="Male">25-50lbs</option>
                  <option value="Male">50-100lbs</option>
                  <option value="Male">100+ lbs</option>
                </select>
          </label>
          
 <br/>

          <input type="submit"  value="Submit" onClick={this.handleSubmit}/>
      </form>
      </div>
    )
  }
}
