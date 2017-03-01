import * as React from "react";
import FacebookLogin from "react-facebook-login";

import AppFrameComponent from "../shared/app-frame.component";

import styles from "./landing.view.scss";

const responseFacebook = (response) => {
  // TODO: implement
  console.log(response);
}

const LandingView = ( props ) => {
  
  const landingPage = (
    <div className={styles.contentWrapper} role="main">
      
      <div className={styles.callToActionContainer}>
        <div className={styles.callToActionHeader}>
          Step out of your echo chamber.
        </div>
        <div className={styles.callToActionSubheader}>
          polichat is a chatroom that lets you talk to people who disagree with you.
        </div>
      </div>

      <div className={styles.loginContainer}>
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
      </div>
    </div>

  )
  return (
    <AppFrameComponent theme="outside" content={landingPage}/>
  )
}


export default LandingView;