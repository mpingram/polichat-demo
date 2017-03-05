import React from "react";

const propTypes = {
  active: React.PropTypes.bool,
  optionsList: React.PropTypes.arrayOf( React.PropTypes.str ),
  onSelection: React.PropTypes.func,
};

const DropdownMenu = ( props ) => {
  
  return (
    <select onChange={props.onSelection}>
      {props.optionsList.map( optionName => <option key={optionName} value={optionName}>{optionName}</option> )}
    </select>
  )
};

export default DropdownMenu;