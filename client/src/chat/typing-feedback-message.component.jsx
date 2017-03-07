import React from "react";

import style from "./typing-feedback-message.component.scss";

import TypingFeedbackIcon from "../shared/icons/typing-feedback-icon.component";

const TypingFeedbackMessage = () => {
  return (
    <div className={style.message}>
      <TypingFeedbackIcon/>
    </div>
  )
};

export default TypingFeedbackMessage;