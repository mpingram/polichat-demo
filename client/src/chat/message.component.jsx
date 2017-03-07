import React from "react";

import style from "./message.component.scss";

const propTypes = {
  text: React.PropTypes.string.isRequired,
  sent: React.PropTypes.instanceOf( Date ).isRequired,
  sender: React.PropTypes.string.isRequired
};

const Message = ( props ) => {
  
  let selfOrOtherStyling;
  if ( props.sender === "self" ){
    selfOrOtherStyling = style.self;
  } else {
    selfOrOtherStyling = style.other;
  }

  const messageContainerStyle = `${style.messageContainer} ${selfOrOtherStyling}`;
  const messageStyle = `${style.message} ${selfOrOtherStyling}`;
  const messageSenderTagStyle = `${style.messageSenderTag} ${selfOrOtherStyling}`;
  return(
    <div className={messageContainerStyle}>
      <div className={messageStyle}>
        {props.text}
      </div>
      <div className={messageSenderTagStyle}>
        {props.sent.toTimeString()} 
        <span className={style.sender}> 
          {props.sender}
        </span>
      </div>
    </div>
  )
};

Message.propTypes = propTypes;

export default Message;