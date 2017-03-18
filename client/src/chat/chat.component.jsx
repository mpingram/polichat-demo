import React from "react";

import ChatWindow from "./window/chat-window.component";
import ChatInput from "./window/chat-input.component";
import PartnerConnectionCard from "./window/partner-connection-card.component";

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
      console.log( "self is typing..." );
    }

    this.handleSendMessage = ( message ) => {
      message.prevSelfMessage = this.state.lastSelfMessage;
      console.log( message );
      this.setState({
        selfTyping: false,
        messages: this.state.messages.concat( message ),
        lastSelfMessage: message.sent,
        scrollToBottomOfChat: true,
      });
    };

    this.handleRecieveMessage = ( ev ) => {

    };

    this.handleFlagUser = ( profile ) => {
      
    };

    this.handleSelfFlagged = ( ev ) => {

    };

    this.handleDisconnect = ( ev ) => {

    };

    this.handleDisconnected = ( ev ) => {

    }

    this.state = {
      active: props.firstTimeUser === true ? false : true,
      // DEVELOPMENT
      partnerProfile: {
        name: "Michael",
        id: "111aaa",
        country: "United States",
        issue: {
          name: "Gun Control",
          stance: -74
        }
      }, // ProfileObject
      messages: testMessages, // MessageObject[]
      otherTyping: false,
      selfTyping: false,
      connected: false,
      lastSelfMessage: undefined, // Date
      scrollToBottomOfChat: false,
    };

  }
  render(){
    
    return(
      <div className={style.chatContainer}>
        <PartnerConnectionCard profile={this.state.partnerProfile} onFlagUser={this.handleFlagUser} onDisconnect={this.handleDisconnect} />
        <div className={style.chatWindowContainer}>
          <ChatWindow messages={this.state.messages} partnerTyping={this.state.partnerTyping} scrollToBottom={this.state.scrollToBottomOfChat} />
          <ChatInput onTyping={this.handleSelfTyping} onSendMessage={this.handleSendMessage} /> 
        </div>
      </div>
    )
  }

}


export default Chat;