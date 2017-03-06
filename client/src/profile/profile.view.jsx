import React from "react";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";

import PoliticalSpectrumUIElement from "./political-spectrum-ui-element.component";
import CountryPartyUIElement from "./country-party-ui-element.component";

const propTypes = {
  firstTimeSetup: React.PropTypes.bool,
}

const ProfileView = ( props ) => {
  
  let headerText;
  if ( props.firstTimeSetup === true ){
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
      <Box theme="inside" size="lg" headerText={headerText}>
        <PoliticalSpectrumUIElement message="My views on economic issues are"/>
        <PoliticalSpectrumUIElement message="My views on social issues are"/>
        <CountryPartyUIElement />
      </Box> 
    </AppFrame>
  )

};

ProfileView.propTypes = propTypes;
export default ProfileView;