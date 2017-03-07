import React from "react";

import style from "./message.component.scss";

const propTypes = {
  text: React.PropTypes.string.isRequired,
  sent: React.PropTypes.instanceOf( Date ).isRequired,
  sender: React.PropTypes.string.isRequired
};

const Message = ( props ) => {
  return(
    <div className={style.messageContainer}>
      <div className={style.message}>
        {props.text}
      </div>
      <div className={style.messageSenderTag}>
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