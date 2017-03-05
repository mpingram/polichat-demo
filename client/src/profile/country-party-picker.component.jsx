import React from "react";

import { CountryList, PoliticalPartyListLookup } from "../shared/config/app-defaults";

import style from "./country-party-picker.component.scss";

import DropdownMenu from "../shared/ui/dropdown-menu.component";

class CountryPartyPicker extends React.Component {
  
  constructor( props ){
    super(props);
    
    this.state = {
      selectedCountry: undefined,
    }
    
    this.countryList = CountryList;
    this.partyMap = PoliticalPartyListLookup;

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

          <DropdownMenu 
            optionsList={this.countryList}
            active="true" 
            onSelection={this.handleCountrySelection} >
          </DropdownMenu>


        </div>

        <div className={style.onlyOwnCountryContainer} >

        </div>

      </div>
    )
  }


}

export default CountryPartyPicker;