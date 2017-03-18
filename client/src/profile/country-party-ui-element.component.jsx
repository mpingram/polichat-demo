import React from "react";

import { CountryList, PartyCountryMap } from "../shared/config/app-defaults";

import style from "./country-party-ui-element.component.scss";

import DropdownMenu from "../shared/ui/dropdown-menu.component";

class CountryPartyUIElement extends React.Component {
  
  constructor( props ){
    super(props);
    
    
    this.countryList = CountryList;
    this.partyMap = PartyCountryMap;

    this.state = {
      selectedCountry: undefined,
      selectedParty: undefined
    }

    this.handleCountrySelection = ( ev ) => {
      const country = ev.target.value;
      this.setState({
        selectedCountry: country
      });
    }

    this.handlePartySelection = ( ev ) => {
      const party = ev.target.value;
      this.setState({
        selectedParty: party
      });
    } 

  }


  render(){
    return(
      <div className={style.container}>
        <div className={style.countryPartyContainer} >
          
          <div className={style.dropdownContainer}>
            The country I live in is... 
            <DropdownMenu 
              optionsList={this.countryList}
              value={this.state.selectedCountry}
              active={true} 
              onSelection={this.handleCountrySelection} >
            </DropdownMenu>
          </div>

        </div>

        <div className={style.preferencesContainer} >
          <div className={style.radioButtonContainer} >
          <input type="radio" name="own-country" value="true" id="own-country-true"/> 
            <label htmlFor="own-country-true"> I want to only talk to people from my country.</label>
          </div>
          <div className={style.radioButtonContainer} > 
          <input type="radio" name="own-country" value="false" id="own-country-false"/> 
            <label htmlFor="own-country-false"> I want to talk to anyone in the world.</label>
          </div>
        </div>
      </div>
    )
  }


}

export default CountryPartyUIElement;