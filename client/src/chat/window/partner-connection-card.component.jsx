import React from "react";

import PoliticalSpectrumMeter from "../../shared/ui/political-spectrum-meter.component";
import { PoliticalSpectrumNumericMax } from "../../shared/config/app-defaults.js";

import style from "./partner-connection-card.component.scss";


const propTypes = {
  profile: React.PropTypes.shape({
    name: React.PropTypes.string,
    country: React.PropTypes.country,
    issue: React.PropTypes.shape({
      name: React.PropTypes.string,
      stance: React.PropTypes.number,
    })
  }).isRequired,
  onFlagUser: React.PropTypes.func.isRequired,
  onDisconnect: React.PropTypes.func.isRequired,
};


const PartnerConnectionCard = ( props ) => {

  const profile = props.profile;

  return (
    <div className={style.card}>

      <div className={style.block}>
        You're talking with
        <div className={style.emphasis}>
          {profile.name}
        </div>
        <div className={style.smallText}>
          {profile.country}
        </div>

      </div>
  
      <div className={style.reportUserBlock}>

        <svg className={style.flagIcon} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
        </svg>
        <div className={style.smallText}>
          Report this user
        </div>
      </div>

      <div className={style.block}>
        You disagree about
        <div className={style.emphasis}>
          {profile.issue.name}
        </div>
        <PoliticalSpectrumMeter value={profile.issue.stance} max={PoliticalSpectrumNumericMax} />
      </div>

      <div className={style.disconnectBlock}>
        <svg className={style.disconnectIcon} height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <div>
          Disconnect
        </div>
      </div>


    </div>

  )
};


PartnerConnectionCard.propTypes = propTypes;

export default PartnerConnectionCard;