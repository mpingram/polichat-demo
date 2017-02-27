import React from "react";
import PolichatIconComponent from "./polichat-icon.component";
 
import styles from "./app-frame.component.scss";

const appFrameComponent = ( props ) => {

  return(
         <div className={styles.light}>
           <div className="app-header" role="banner">
             <PolichatIconComponent width="400px" height="100px" />
           </div>

          <div className="content" role="main">
            {props.content}
          </div>
         </div>
  )

}

export default appFrameComponent;