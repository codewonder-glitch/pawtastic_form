import './App.css';
import React, { Component } from 'react';
import Rightform from './components/Rightform'
import Leftform from './components/Leftform';
import Footer from './components/Footer'

export default class App extends Component {
  

    
render(){
return(
  <div id="wrapper">
  <div className="App">
    
      <Leftform />
    

    <Rightform />  
     
       <Footer />
     
    
  
  </div>
  </div>
);

}
  

  

  
          
  
}
