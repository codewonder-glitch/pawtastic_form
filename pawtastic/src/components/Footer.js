import './Rightform.css';
import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
      super(props);
  
      
    }

    render(){
    
    
    return(
        <div id="footer">
        <input className="fbtn" type="submit"  value="Back" onClick={this.handleSubmit}/>
        <input className="fbtn" type="submit"  value="Next" onClick={this.handleSubmit}/>
        </div>
    );
  }
}