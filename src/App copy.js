import React, { Component } from 'react';





class App extends Component {
  constructor(props){
    super(props )
    this.state={
      quotes: [
        "1 When I wrote this code, only God and I understood what I did. Now only God knows.",
        "2 How many programmers does it take to change a light bulb? None, that’s a hardware problem.",
        "3 Copy-and-Paste was programmed by programmers for programmers actually.",
        "4 I have always wished that my computer would be as easy to use as my telephone. My wish has come true. I no longer know how to use my telephone.",
        "5 There is an easy way and a hard way. The hard part is finding the easy way"
      ],
      arr:0
    }
  }
 
  increm=()=>{
    this.setState({arr: +1})
  }

  
  
  render(){
    setInterval(this.increm, 1000);
  return ( 
   

    <div className="App"> 
     <p>Print New Quote after every 5 seconds</p>
      <blockquote>{this.state.quotes[this.state.arr]}</blockquote>
      
    </div>
   
  );
}
}

export default App;
