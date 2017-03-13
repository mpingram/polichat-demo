import React from "react";

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

      <div className={style.nameBlock}>
        You're talking with
        <div className={style.name}>
          {profile.name}
        </div>
        <div className={style.country}>
          {profile.country}
        </div>
      </div>
      
      <div className={style.issueBlock}>
        You disagree about
        <div className={style.issue}>
          {profile.issue.name}
        </div>
      </div>

      <div className={style.flagBlock}>

      </div>


    </div>

  )
};


PartnerConnectionCard.propTypes = propTypes;

export default PartnerConnectionCard;