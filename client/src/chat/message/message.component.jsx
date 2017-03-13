import React from "react";

import style from "./message.component.scss";

const propTypes = {
  text: React.PropTypes.string.isRequired,
  sent: React.PropTypes.instanceOf( Date ).isRequired,
  sender: React.PropTypes.string.isRequired,
  prevSelfMessage: React.PropTypes.instanceOf( Date )
};

const Message = ( props ) => {
  
  const sentBySelf = props.sender === "self";
  const recentSelfMessage = sentBySelf && 
                            props.prevSelfMessage !== undefined &&
                            props.prevSelfMessage.getValue() - props.sent.getValue() < 60000;
  
  let selfOrOtherStyling;
  if ( sentBySelf ){
    selfOrOtherStyling = style.self;
  } else {
    selfOrOtherStyling = style.other;
  }

  const messageContainerStyle = `${style.messageContainer} ${selfOrOtherStyling}`;
  const messageStyle = `${style.message} ${selfOrOtherStyling}`;
  const messageSenderTagStyle = `${style.messageSenderTag} ${selfOrOtherStyling}`;
  
  const sender = sentBySelf ? "Me" : props.sender; 
  const timestamp = props.sent.toLocaleTimeString(undefined, {hour:"numeric", minute:"numeric"});
  return(
    <div className={messageContainerStyle}>
      <div className={messageStyle}>
        {props.text}
      </div>
      { 
        !recentSelfMessage &&
        <div className={messageSenderTagStyle}>
          <span className={style.sender}>{sender} </span>
          <span className={style.timestamp}>{timestamp}</span>
        </div> 
      }

    </div>
  )
};

Message.propTypes = propTypes;

export default Message;