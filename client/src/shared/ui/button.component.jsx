import React from "react";

import styles from "./button.component.scss";

const propTypes = {
  text: React.PropTypes.string.isRequired
};

const Button = (props) => {
  
  return (
    <div role="link" className={styles.button}>
      {props.text}
    </div>
  )

};


Button.propTypes = propTypes;
export default Button;
