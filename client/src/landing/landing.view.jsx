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
      <div style={{width: "auto", marginBottom: "4em", alignSelf: "center", textAlign: "center"}}>
        <div className={styles.callToActionHeader}>
          Step out of your echo chamber.
        </div>
        <div className={styles.callToActionSubheader}>
          polichat is a chatroom that lets you talk to people who disagree with you.
        </div>
      </div>

      <Box theme={theme} size="med">
        <p className={styles.loginText}>
          If you want to talk to people who see things differently, press the button below to get started.
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