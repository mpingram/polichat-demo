import React from "react";

import style from "./box.component.scss";

const propTypes = {
  theme: React.PropTypes.oneOf(["inside", "outside", "layout"]).isRequired,
  size: React.PropTypes.oneOf(["sm", "med", "lg", "short-wide", "med-wide", "auto", "auto-med", "auto-wide"]).isRequired,
  headerText: React.PropTypes.shape({
    main: React.PropTypes.string,
    sub: React.PropTypes.string
  })
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
    case "auto-med":
      width = style.medWidth;
      height = style.autoHeight;
      break;
    case "auto-wide":
      width = style.wide;
      height = style.autoHeight;
      break;
    case "auto":
      width = style.autoWidth;
      height = style.autoHeight;
      break;
  }

  const hasHeader = props.headerText !== undefined;
  
  let boxComponent;
  
  if ( !hasHeader ){
    boxComponent = (
      <div className={ `${style.boxNoHeader} ${theme} ${width} ${height}` }>
        {props.children}
      </div>
    )

  } else if ( hasHeader ){
    boxComponent = (
      <div className={ `${style.boxHeader} ${theme} ${width} ${height}` }>
        <div className={style.header}>
          <div className={style.headerMainText}>{props.headerText.main}</div>
          <div className={style.headerSubText}>{props.headerText.sub}</div>
        </div>
        <div className={style.boxContentWrapper} >
          {props.children}
        </div>
      </div>
    )
  }

  return boxComponent;
}

Box.propTypes = propTypes;
export default Box;