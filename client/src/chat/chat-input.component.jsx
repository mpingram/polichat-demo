import React from "react";
import Textarea from "react-textarea-autosize";

import SubmitIcon from "../shared/icons/submit-icon.component";

import style from "./chat-input.component.scss";

const propTypes = {
  onTyping: React.PropTypes.func.isRequired,
  onSendMessage: React.PropTypes.func.isRequired,
};

const ChatInput = ( props ) => {
  return (
    <div className={style.chatInputWrapper}>
      <Textarea 
        className={style.chatInput} 
        onChange={props.onTyping}
        placeholder="Say something here..."
        minRows={2}
        maxRows={6}
      />
      <button className={style.submitButton} onClick={props.onSendMessage}>
        <SubmitIcon/>
      </button>
    </div>
  )
};

export default ChatInput;