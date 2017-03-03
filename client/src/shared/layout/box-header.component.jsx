import React from "react";

import style from "./box-header.component.scss";

const BoxHeader = (props) => {
  return (
    <div className={style.header}>
      {props.children}
    </div>
  
  )
}

export default BoxHeader;