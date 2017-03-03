import React from "react";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";

import PoliticalSpectrumUIElement from "../shared/ui/political-spectrum-ui-element.component";

const propTypes = {
  firstTimeSetup: React.PropTypes.bool,
}

const ProfileView = ( props ) => {
  
  return (
    <AppFrame theme="inside">
      <Box theme="inside" size="lg" headerText={{main: "Before you begin...", sub: "Let us know a little more about your political views."}}>
        <PoliticalSpectrumUIElement message="My views on economic issues are"/>
        <PoliticalSpectrumUIElement message="My views on social issues are"/>
      </Box> 
    </AppFrame>
  )

};

ProfileView.propTypes = propTypes;
export default ProfileView;