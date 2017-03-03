import React from "react";

import chooseColor from "../utils/choose-color";

import { PoliticalSpectrumCutoffs as cutoffs } from "../config/app-defaults";

const defaultProps = {
  fontSize: "100%",
  value: 0,
  max: 127,
}

const PoliticalSpectrumLabel = ( props ) => {
  
  const color = props.color || chooseColor( props.value, props.max );

  let label;
  let ratio = props.value / props.max;
  if ( ratio >= 0 ){
    if ( ratio < cutoffs.moderate ){
      label = "moderate";
    } else if ( ratio < cutoffs.centerMain ) {
      label = "center-right"
    } else if (ratio < cutoffs.main) {
      label = "right";
    } else {
      label = "far right";
    }
  } else if ( ratio < 0){
    ratio *= -1;
    if ( ratio < cutoffs.moderate ){
      label = "moderate";
    } else if ( ratio < cutoffs.centerMain ) {
      label = "center-left"
    } else if (ratio < cutoffs.main) {
      label = "left";
    } else {
      label = "far left";
    }
  }

  return(
    <span style={{color: color }}>
      {label}
    </span>
  )

}

export default PoliticalSpectrumLabel;