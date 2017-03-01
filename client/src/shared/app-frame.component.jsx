import React from "react";
import PolichatIconComponent from "./icons/polichat-icon.component";
 
import styles from "./app-frame.component.scss";

const propTypes = {
  // implement me
  theme: React.PropTypes.oneOf(["inside", "outside"]).isRequired,
  //content: React.PropTypes.element.isRequired
}

const appFrame = ( props ) => {
  
  let appFrameTheme;
  switch ( props.theme ) {
    case "inside":
      appFrameTheme = styles.appFrameDark;
      break;
    case "outside":
      appFrameTheme = styles.appFrameLight;
      break;
  }

  return(
    <div className={appFrameTheme}>
      <div className={styles.appHeader} role="banner">
        <PolichatIconComponent height="100%" />
      </div>
      {props.children}
    </div>
  )

}

appFrame.propTypes = propTypes;
export default appFrame;