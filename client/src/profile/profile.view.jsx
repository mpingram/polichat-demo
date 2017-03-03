import React from "react";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";

import PoliticalSpectrumUIElement from "./political-spectrum-ui-element.component";
import CountryPartyPicker from "./country-party-picker.component";

const propTypes = {
  firstTimeSetup: React.PropTypes.bool,
}

const ProfileView = ( props ) => {
  
  return (
    <AppFrame theme="inside">
      <Box theme="inside" size="lg" headerText={{main: "Before you begin...", sub: "Let us know a little more about your political views."}}>
        <PoliticalSpectrumUIElement message="My views on economic issues are"/>
        <PoliticalSpectrumUIElement message="My views on social issues are"/>
        <CountryPartyPicker />
      </Box> 
    </AppFrame>
  )

};

ProfileView.propTypes = propTypes;
export default ProfileView;