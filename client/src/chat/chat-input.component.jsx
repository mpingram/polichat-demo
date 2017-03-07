import React from "react";
import Textarea from "react-textarea-autosize";

import SubmitIcon from "../shared/icons/submit-icon.component";

import debounce from "../shared/utils/debounce";

import style from "./chat-input.component.scss";

const propTypes = {
  onTyping: React.PropTypes.func.isRequired,
  onSendMessage: React.PropTypes.func.isRequired,
};

class ChatInput extends React.Component {
  
  constructor( props ){
    super( props );
    
    this.state = {
      value: undefined,
    };

    this.handleChange = ( ev ) => {
      const value = ev.target.value;
      this.setState({
        value: value,
      });
      this.handleTyping();
    }

    this.handleTyping = debounce( props.onTyping, 250, true );

    this.handleSendMessage = ( ev ) => {
      const text = this.state.value;
      
      if ( typeof text === "string" && text !== ""){  
        this.setState({
          value: ""
        });
        const message = {
          text: text,
          sender: "self",
          sent: new Date()
        };
        props.onSendMessage( message );
      }
    }
  }

  render(){
    return (
      <div className={style.chatInputWrapper}>
        <Textarea

          value={this.state.value}
          onChange={this.handleChange}

          className={style.chatInput} 
          placeholder="Say something here..."
          minRows={2}
          maxRows={6}
        />
        <button className={style.submitButton} onClick={this.handleSendMessage}>
          <SubmitIcon/>
        </button>
      </div>
    )
  }
 
};

ChatInput.propTypes = propTypes;
export default ChatInput;