import React from "react";
import {Link} from "react-router";
import PolichatIcon from "../icons/polichat-icon.component";
import ProfileIcon from "../icons/profile-icon.component";
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
      appFrameTheme = styles.dark;
      break;
    case "outside":
      appFrameTheme = styles.light;
      break;
  }

  return(
    <div className={ `${styles.appFrame} ${appFrameTheme}` }>
      <div className={ `${styles.appHeader} ${appFrameTheme}`} role="banner">
        <PolichatIcon height="100%" />
        { props.theme === "inside" && <ProfileIcon/>}
      </div>
      <div className={styles.content} role="main">
        {props.children}
      </div>
    </div>
  )

}

appFrame.propTypes = propTypes;
export default appFrame;