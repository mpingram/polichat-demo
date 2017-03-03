import React from "react";

import chooseColor from "../utils/choose-color";
import { PoliticalSpectrumCutoffs as cutoffs } from "../config/app-defaults";

import style from "./political-spectrum-meter.component.scss";

const propTypes = {
  "value": React.PropTypes.string,
  "max": React.PropTypes.string
}

const PoliticalSpectrumMeter = ( props ) => {
  
  const color = props.color || chooseColor( props.value, props.max );
  const ratio = props.value/props.max;

  let className = style.meter;
  let transform = `scaleX(${props.value/props.max}`;

  if ( ratio === 0 ){
    className = style.meterModerate;
    transform = "translateX(-50%)";
  }

  return(
    <div className={style.track}>
      <div className={className} style={{ backgroundColor: color, transform: transform}} />
    </div>
  )
}

export default PoliticalSpectrumMeter;
