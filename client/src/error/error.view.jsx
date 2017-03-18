import React from "react";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";

const ErrorView = () => {
  
  const theme = "outside";
  return (
    <AppFrame theme={theme}>
      <Box theme={theme} size="lg" headerText={{main:"404: File not found"}}>
        <div style={{fontSize: "2em"}}>That page doesn't seem to exist!</div>
      </Box>
    </AppFrame>
  )

}

export default ErrorView;