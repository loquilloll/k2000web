// App.jsx
import React from "react";
import Display from "./Display";
import Digit from "./Digit";
import Colon from "./Colon";
import K2000Buttons from "./K2000Buttons";
import io from 'socket.io-client';

var socket = io();
socket.on('connect',() => {console.log('connected')})
socket.on('disconnect',() => {console.log('disconnected')})

export { Display, Digit, Colon };
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };



    //setInterval(() => {
      //fetch('voltage').then(response => response.json())
      //.then((result) => {
        ////console.log(result.voltage)
        //let count = parseVoltage(result.voltage);
        //let decimalIndex = count.indexOf(".");
        ////console.log(decimalIndex);
        //count = count.substr(0,decimalIndex)+count.substr(decimalIndex + 1);
        //this.setState({ count: count, decimalIndex: decimalIndex});
      //})
    //}, 1000);

  };

  componentDidMount(){
    console.log('mouted')
    function parseVoltage(x){
               if(x < .12)           {x=(x*1000).toFixed(4).padStart(8,'0');}                            // 001.2000 mVDC
        else if (x >= .12 && x < 1.2){ x = Number.parseFloat(x).toFixed(6).padStart(8,'0'); }            // 0.120000  VDC
        else if (x >= 1.2 && x < 12 ){ x = Number.parseFloat(x).toFixed(5).toString().padStart(8,'0'); } // 01.20000  VDC
        else if (x >= 12 && x < 120 ){ x = Number.parseFloat(x).toFixed(4).padStart(8,'0'); }            // 012.0000  VDC
        else if (x >= 120)           { x = Number.parseFloat(x).toFixed(2).padStart(8,'0'); }            // 00120.00  VDC
        return x
    }
    socket.on('voltage', (result) => {

      let count = parseVoltage(result.voltage);
      let decimalIndex = count.indexOf(".");
      count = count.substr(0,decimalIndex)+count.substr(decimalIndex + 1);
      //console.log(count);
      this.setState({ count: count, decimalIndex: decimalIndex});
      
    });

    };

    getVoltage(){
      fetch('voltageio');
    };


    componentWillUnmount(){
      socket.removeListener('voltage');
    };
  render () {

    return (
    <div>
      <Display 
      value={this.state.count} 
      decimalIndex= {this.state.decimalIndex}
      color="blue" 
      digitCount={7}/>
      <K2000Buttons/>
    </div>
    );
  }
}
