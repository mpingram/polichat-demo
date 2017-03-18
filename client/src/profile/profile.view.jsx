import React from "react";
import {Link} from "react-router";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";
import Button from "../shared/ui/button.component";

import PoliticalSpectrumUIElement from "./political-spectrum-ui-element.component";
import CountryPartyUIElement from "./country-party-ui-element.component";

const propTypes = {
  firstTimeUser: React.PropTypes.bool,
}

const ProfileView = ( props ) => {
  
  let headerText;
  if ( props.firstTimeUser === true ){
    headerText = {
      main: "Before you begin...", 
      sub: "Let us know a little more about your political views."
    }
  } else {
    headerText = {
      main: "Your political profile",
      sub: "Make any changes you'd like."
    }
  }

  return (
    <AppFrame theme="inside">
      <Box theme="inside" size="auto-wide" headerText={headerText}>
        <PoliticalSpectrumUIElement message="Strong gun control measures"/>
        <PoliticalSpectrumUIElement message="Socialized Health Care"/>
        <PoliticalSpectrumUIElement message="Legal Abortion"/>
        <CountryPartyUIElement />
        <Link to="/chat"><Button text="continue"/></Link>
      </Box> 
    </AppFrame>
  )

};

ProfileView.propTypes = propTypes;
export default ProfileView;