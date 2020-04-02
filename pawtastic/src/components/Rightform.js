import './Rightform.css';
import React, { Component } from 'react'
import Footer from './Footer'

export default class Rightform extends Component {
  constructor(props) {
    super(props);

    this.state = {name1: '',
    Breed:'',
    Bday:'',
    Gender:'',
    Spay:'',
  }

    this.handleChange = this.handleChange.bind(this);
    this.handleGenderClick=this.handleGenderClick.bind(this);
    this.handleSpayedClick=this.handleSpayedClick.bind(this);
    this.handleWeightOptionClick=this.handleWeightOptionClick.bind(this);
    
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    // this.setState({Breed: event.target.Breed});
  }
  handleGenderClick(event) {
    this.setState({Gender: event.target.value});
    ;
}
handleSpayedClick(event) {
    this.setState({Spayed: event.target.value});
    
}
handleWeightOptionClick(event) {
    this.setState({Weight: event.target.value});
    alert(event.target.value);
    
}

render() {
    return (
      <div id="header">
      <form id="form1" onSubmit={this.handleChange}>
        <h1>Yay We Love Dogs!,Give us the basic about your pup</h1>
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
          <select className='twoOptions' size="2" onClick={this.handleGenderClick}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
          </label>
          <label> 
          Spayed
          <br />
          <select className='twoOptions' size="2" onClick={this.handleSpayedClick}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>
          </label>
          <br />
          
          <label> 
          Weight
          <br />
          <select className='fourOptions' size="2" onClick={this.handleWeightOptionClick}>
                <option value="25">0-25lbs</option>
                  <option value="50">25-50lbs</option>
                  <option value="100">50-100lbs</option>
                  <option value="100+">100+ lbs</option>
          </select>
          </label>
          
 <br/>

          {/* <input type="submit"  value="Submit" onClick={this.handleSubmit}/> */}
      </form>
      </div>
      
    )
  }
}
