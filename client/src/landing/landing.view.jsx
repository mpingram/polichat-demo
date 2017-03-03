import * as React from "react";
import FacebookLogin from "react-facebook-login";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";

import styles from "./landing.view.scss";

const responseFacebook = (response) => {
  // TODO: implement
  console.log(response);
}

const LandingView = ( props ) => {
  
  const theme = "outside";

  return (
    <AppFrame theme={theme}>
      <Box theme="layout" size="short-wide">
        <div className={styles.callToActionHeader}>
          Step out of your echo chamber.
        </div>
        <div className={styles.callToActionSubheader}>
          polichat is a chatroom that lets you talk to people who disagree with you.
        </div>
      </Box>

      <Box theme={theme} size="med">
        <p className={styles.loginText}>
          Lorem ipsum dolor sit amet etc etc.<br/>
          This is roughly how many words should end up here ya dingus.
        </p>
        <div className={styles.loginButtonContainer}>
          <FacebookLogin
            appId="126544667869254"
            autoLoad={true}
            fields="name"
            // onClick={componentClicked}
            callback={responseFacebook} />
        </div>
      </Box>
    </AppFrame>

  )

}


export default LandingView;