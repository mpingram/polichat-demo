import React from "react";

import PoliticalSpectrumMeter from "./political-spectrum-meter.component";

import styles from "./political-spectrum-slider.component.scss";

const propTypes = {
  handleChange: React.PropTypes.func,
  value: React.PropTypes.string,
  color: React.PropTypes.string,
  min: React.PropTypes.string,
  max: React.PropTypes.string
}

const defaultProps = {
  value: "0",
  max: "127",
  min: "-127",
  handleChange: (ev) => console.log( ev.target.value )
}



const PoliticalSpectrumSlider = ( props ) => {
  return (
    <div style={{position:"relative", width:"95%"}}>
      <input type="range" style={{position: "relative", zIndex: "2"}} max={props.max} min={props.min} defaultValue="0" onChange={props.handleChange} />
      <PoliticalSpectrumMeter value={props.value} max={props.max}/>
    </div>
  )
}

PoliticalSpectrumSlider.propTypes = propTypes;
PoliticalSpectrumSlider.defaultProps = defaultProps;
export default PoliticalSpectrumSlider;