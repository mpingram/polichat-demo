import React from "react";

import Message from "./message.component";
import TypingFeedbackMessage  from "./typing-feedback-message.component";

import style from "./chat-window.component.scss";

const propTypes = {
  messages: React.PropTypes.arrayOf( React.PropTypes.object ),
  partnerTyping: React.PropTypes.bool,
};

const defaultProps = {
  messages: [],
  partnerTyping: false
};

const ChatWindow = ( props ) => {

  return (
    <div className={style.window}>
      { props.messages.map( (message, i) => {
          return <Message 
                    key={message.sent.getTime()} 
                    text={message.text} 
                    sent={message.sent} 
                    sender={message.sender} 
                  />
        })}

      { props.partnerTyping ? <TypingFeedbackMessage/> : undefined }
    </div>
  )
};

ChatWindow.propTypes = propTypes;
ChatWindow.defaultProps = defaultProps;
export default ChatWindow;