import React from "react";

import messageStyle from "./message.component.scss";

import TypingFeedbackIcon from "../shared/icons/typing-feedback-icon.component";

const TypingFeedbackMessage = () => {
  return (
    <div className={messageStyle.message}>
      <TypingFeedbackIcon/>
    </div>
  )
};

export default TypingFeedbackMessage;