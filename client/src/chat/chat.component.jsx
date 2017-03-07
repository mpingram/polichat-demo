import React from "react";

import ChatWindow from "./chat-window.component";
import ChatInput from "./chat-input.component";
import PartnerConnectionCard from "./partner-connection-card.component";

import style from "./chat.component.scss";

// DEVELOPMENT
import testMessages from "../shared/config/test-messages";

const propTypes = {
  firstTimeUser: React.PropTypes.bool
};

class Chat extends React.Component {
  
  constructor( props ){
    super( props );
  

    this.handleSelfTyping = ( ev ) => {
      console.log("Self is typing...");
    };

    this.handlePartnerTyping = ( ev ) => {

    };
    
    this.handleSendMessage = ( ev ) => {

    };

    this.handleRecieveMessage = ( ev ) => {

    };

    this.handleFlagPartner = ( ev ) => {

    };

    this.handleSelfFlagged = ( ev ) => {

    };

    this.handleDisconnect = ( ev ) => {

    };

    this.handleDisconnected = ( ev ) => {

    }

    this.state = {
      active: props.firstTimeUser === true ? false : true,
      partnerProfile: undefined, // ProfileObject
      messages: testMessages, // MessageObject[]
      otherTyping: false,
      selfTyping: false,
      connected: false,
      sending: false,
    };

  }
  render(){
    
    return(
      <div className={style.chatContainer}>
        <PartnerConnectionCard profile={this.state.partnerProfile} onFlagUser={this.handleFlagUser} onDisconnect={this.handleDisconnect} />
        <ChatWindow messages={this.state.messages} partnerTyping={this.state.typing} />
        <ChatInput onTyping={this.handleSelfTyping} onSendMessage={this.handleSendMessage} />
      </div>
    )
  }

}


export default Chat;