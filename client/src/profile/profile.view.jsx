import React from "react";

import AppFrame from "../shared/app-frame.component";
import Box from "../shared/box.component";
import PoliticalSpectrumUIElement from "../shared/ui/political-spectrum-ui-element.component";

const propTypes = {
  firstTimeSetup: React.PropTypes.bool,
}

const ProfileView = ( props ) => {
  

  return (
    <AppFrame theme="inside">
      <Box theme="inside" size="lg">

        <PoliticalSpectrumUIElement message="My views on social issues are"/>

      </Box>
    </AppFrame>
  )

};

ProfileView.propTypes = propTypes;
export default ProfileView;