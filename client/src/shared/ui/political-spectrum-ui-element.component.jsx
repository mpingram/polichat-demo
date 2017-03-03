import React from "react";

import PoliticalSpectrumMeter from "./political-spectrum-meter.component.jsx";
import PoliticalSpectrumLabel from "./political-spectrum-label.component.jsx";

import chooseColor from "../utils/choose-color";

import "./political-spectrum-ui-element.component.scss";

const propTypes = {
  message: React.PropTypes.string.isRequired,
  valueCallback: React.PropTypes.func,
}

class PoliticalSpectrumUIElement extends React.Component {
  
  constructor( props ){

    super( props );

    this.state = {
      value: "0",
      color: chooseColor(0)
    };
    
    this.message = props.message;

    this.max = 12;
    this.min = this.max * -1;
    this.handleChange = ( ev ) => {
      const value = ev.target.value;
      const color = chooseColor( value, this.max );
      if ( typeof props.valueCallback === "function" ){
        props.valueCallback( value );
      }
      this.setState({
        value: value,
        color: color
      });
    }
  }

  render(){
    return (
      <div style={{position:"relative", width:"95%", textAlign: "left"}}>
        <span style={{fontSize: "1.5em"}}>
           {this.message} <PoliticalSpectrumLabel value={this.state.value} color={this.state.color} max={this.max}/>
        </span>
        <input type="range" style={{position: "relative", zIndex: "2"}} max={this.max} min={this.min} defaultValue="0" onChange={this.handleChange} />
        <PoliticalSpectrumMeter value={this.state.value} color={this.state.color} max={this.max}/>
      </div>
    )
  }
}

PoliticalSpectrumUIElement.propTypes = propTypes;
export default PoliticalSpectrumUIElement;