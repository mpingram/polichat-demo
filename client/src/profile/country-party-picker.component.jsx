import React from "react";

import CountryList from "../shared/config/app-defaults";
import PoliticalPartyListLookup from "../shared/config/app-defaults";

import style from "./country-party-picker.component.scss";

import DropdownMenu from "../shared/ui/dropdown-menu.component";

class CountryPartyPicker extends React.Component {
  
  constructor( props ){
    super(props);
  
    this.state = {
      selectedCountry: undefined,
    }
    
    this.handleCountrySelection = ( ev ) => {
      console.log( ev.target.value );
    }

    this.handlePartySelection = ( ev ) => {
      console.log( ev.target.value );
    } 

  }


  render(){
    return(
      <div className={style.container}>
        
        <div className={style.countryPartyContainer} >
          <DropdownMenu active="true" onSelection={this.handleCountrySelection} >
            {CountryList}
          </DropdownMenu>

          <DropdownMenu active={this.state.selectedCountry !== undefined} onSelection={this.handlePartySelection} >
            {this.state.selectedCountry !== undefined && PoliticalPartyListLookup[this.state.selectedCountry]}
          </DropdownMenu>

        </div>
        <div className={style.onlyOwnCountryContainer} >

        </div>

      </div>
    )
  }


}

export default CountryPartyPicker;