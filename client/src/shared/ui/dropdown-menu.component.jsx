import React from "react";


const propTypes = {
  active: React.PropTypes.bool,
  optionsList: React.PropTypes.arrayOf( React.PropTypes.string ),
  onSelection: React.PropTypes.func,
  value: React.PropTypes.string,
};

const defaultProps = {
  value: "default"
}
const DropdownMenu = ( props ) => {
  
  let optionsList;
  if ( props.optionsList === undefined || props.optionsList === null ){
    optionsList = undefined;
  } else {
    optionsList = props.optionsList.map( (optionName) => {
      return <option key={optionName} value={optionName}>{optionName}</option> 
    });
    // prepend a blank option to the top of the list
    optionsList.unshift( <option key="default" disabled value="default"> -- select an option -- </option> );
  }

  return (
    <select style={{display: "block"}} onChange={props.onSelection} value={props.value}>
      {optionsList}
    </select>
  )
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
export default DropdownMenu;