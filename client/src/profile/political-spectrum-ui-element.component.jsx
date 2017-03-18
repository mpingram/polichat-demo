import React from "react";

import PoliticalSpectrumMeter from "../shared/ui/political-spectrum-meter.component.jsx";
import PoliticalSpectrumLabel from "../shared/ui/political-spectrum-label.component.jsx";

import chooseColor from "../shared/utils/choose-color";

import { PoliticalSpectrumNumericMax } from "../shared/config/app-defaults";

import style from "./political-spectrum-ui-element.component.scss";

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

    this.max = PoliticalSpectrumNumericMax;
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
      <div className={style.wrapper}>
        <div className={style.textWrapper}>
          <div style={{marginRight: "5px"}}> 
            {this.message}:
          </div>
          <div style={{fontSize: "1.15em"}}>
            <PoliticalSpectrumLabel value={this.state.value} color={this.state.color} max={this.max}/>
          </div>
        </div>
        
        <input className={style.slider} type="range" max={this.max} min={this.min} defaultValue="0" onChange={this.handleChange} />
        <PoliticalSpectrumMeter value={this.state.value} color={this.state.color} max={this.max}/>
      </div>
    )
  }
}

PoliticalSpectrumUIElement.propTypes = propTypes;
export default PoliticalSpectrumUIElement;