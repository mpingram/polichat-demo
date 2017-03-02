import React from "react";

import chooseColor from "../utils/choose-color";

import style from "./political-spectrum-meter.component.scss";

const propTypes = {
  "value": React.PropTypes.sring,
  "max": React.PropTypes.string
}

const PoliticalSpectrumMeter = ( props ) => {

  return(
    <div className={style.track}>
      <div className={style.meter} style={{ backgroundColor: chooseColor( props.value, props.max ), transform: `scaleX(${props.value/props.max})`}} />
    </div>
  )
}

export default PoliticalSpectrumMeter;
