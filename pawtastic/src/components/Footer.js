import './Rightform.css';
import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
      
    }
    handleSubmit(event) {
      
      event.preventDefault();
  
    } 

    render(){
    
    
    return(
        <div id="footeer">
         <input className="fbtn" type="submit"  value="Back" onClick={this.handleSubmit}/>
         <input className="fbtn" type="submit"  value="Next" onClick={this.handleSubmit}/>
         </div>
    );
  }
}