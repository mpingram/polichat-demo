import React from "react";
import ReactDOM from "react-dom";

import Message from "./message.component";
import TypingFeedbackMessage  from "./typing-feedback-message.component";

import style from "./chat-window.component.scss";

const propTypes = {
  messages: React.PropTypes.arrayOf( React.PropTypes.object ),
  partnerTyping: React.PropTypes.bool,
  scrollToBottom: React.PropTypes.bool
};

const defaultProps = {
  scrollToBottom: false,
  messages: [],
  partnerTyping: true,
};

class ChatWindow extends React.Component {
  
  constructor( props ){
    super( props );
  
    this.state = {
      scrollAdjusted: false,
    };

    this.scrollToBottom = () => {
      console.log("scroll to bottom");
      const messageEnd = ReactDOM.findDOMNode( this.messageEnd );
      try {
        messageEnd.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      } catch(e) {
        messageEnd.scrollIntoView(false);
      }
    }

    this.handleScroll = () => {
      if ( this.state.scrollAdjusted === false ){
        this.setState({
          scrollAdjusted: true
        });
      }
    }
  }

  componentWillUpdate(){
    if ( this.props.scrollToBottom === true || this.state.scrollAdjusted === false ){
      this.scrollToBottom();
    }
  }

  render(){
    return (
      <div className={style.window} onScroll={this.handleScroll}>
          { this.props.messages.map( (message) => {
              return <Message 
                        key={message.sent.valueOf()} 
                        text={message.text} 
                        sent={message.sent} 
                        sender={message.sender} 
                      />
            })}
        
          { this.props.partnerTyping ? <TypingFeedbackMessage/> : undefined }
          <div style={{position: "relative", float: "left", clear: "both"}} ref={ (el) => { this.messageEnd = el; } } />
      </div>
    )
  }
};

ChatWindow.propTypes = propTypes;
ChatWindow.defaultProps = defaultProps;
export default ChatWindow;