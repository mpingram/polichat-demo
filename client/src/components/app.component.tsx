import * as React from "react";
const styles = require<any>("./app.component.css");

export const AppComponent = ( props ) => {
  return (<div className={styles.app}>
            <h2>Hello, {props.name}! Time to get codin'</h2> 
          </div>)
};