import * as React from "react";
import PolichatIconComponent from "./polichat-icon.component";

const appFrameStyles = require<any>("./app-frame.component.css");

const appFrameComponent = ( props ) => {

  let frameCss;
  if ( props.colorScheme === "dark" ){
    frameCss = appFrameStyles.dark;
  } else if ( props.colorScheme === "light" ){
    frameCss = appFrameStyles.light;
  }

  return(
         <div style={appFrameStyles.light}>
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