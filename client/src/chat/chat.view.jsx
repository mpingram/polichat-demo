import React from "react";

import AppFrame from "../shared/layout/app-frame.component";
import Box from "../shared/layout/box.component";

import Chat from "./chat.component";

const ChatView = () => {
  
  const theme = "inside";

  return (
    <AppFrame theme={theme}>
      <Box theme={theme} size="lg">
        
        <Chat firstTimeVisit={false}/>

      </Box>
    </AppFrame>
  )

};

export default ChatView;