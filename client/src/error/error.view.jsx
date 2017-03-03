import React from "react";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";

const ErrorView = () => {
  
  const theme = "outside";
  return (
    <AppFrameComponent theme={theme}>
      <Box theme={theme}>
        <div>Implement me!</div>
      </Box>
    </AppFrameComponent>
  )

}

export default ErrorView;