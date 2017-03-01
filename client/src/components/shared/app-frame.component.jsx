import React from "react";
import PolichatIconComponent from "./polichat-icon.component";
 
import styles from "./app-frame.component.scss";

const propTypes = {
  // implement me
  theme: React.PropTypes.oneOf(["dark", "light"]).isRequired,
  content: React.PropTypes.element.isRequired
}

const appFrameComponent = ( props ) => {
  
  let appFrameTheme;
  switch ( props.theme ) {
    case "dark":
      appFrameTheme = styles.appFrameDark;
      break;
    case "light":
      appFrameTheme = styles.appFrameLight;
      break;
  }

  return(
         <div className={appFrameTheme}>
           <div className={styles.appHeader} role="banner">
             <PolichatIconComponent height="100%" />
           </div>

          {props.content}
         </div>
  )

}

appFrameComponent.propTypes = propTypes;
export default appFrameComponent;