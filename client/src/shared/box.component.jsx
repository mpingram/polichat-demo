import React from "react";

import style from "./box.component.scss";

const propTypes = {
  theme: React.PropTypes.oneOf(["inside", "outside", "layout"]).isRequired,
  size: React.PropTypes.oneOf(["sm", "med", "lg", "short-wide", "med-wide"]).isRequired
}

const Box = ( props ) => {
  
  let theme; 
  switch( props.theme ){
    case "inside":
      theme = style.light;
      break;
    case "outside":
      theme = style.dark;
      break;
    case "layout":
      theme = style.invisible;
      break;
  }

  let width;
  let height;
  switch( props.size ){
    case "sm":
      width = style.thin;
      height = style.short;
      break;
    case "med":
      width = style.medWidth;
      height = style.medHeight;
      break;
    case "lg":
      width = style.wide;
      height = style.tall;
      break;
    case "short-wide":
      width = style.wide;
      height = style.short;
      break;
    case "med-wide":
      width = style.wide;
      height = style.medHeight;
      break;
  }

  return (
    <div className={ `${style.box} ${theme} ${width} ${height}` }>
      {props.children}
    </div>
  )
}

Box.propTypes = propTypes;
export default Box;