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

      <div className={style.block}>
        You're talking with
        <div className={style.emphasis}>
          {profile.name}
        </div>
        <div>
          {profile.country}
        </div>
      </div>
      
      <div className={style.block}>
        You disagree about
        <div className={style.emphasis}>
          {profile.issue.name}
        </div>
      </div>

      <div className={style.block}>
        Report this user for abusive behavior.
      </div>

      <div className={style.block}>
        <div className={style.emphasis}>
          Disconnect from this conversation
        </div>
      </div>


    </div>

  )
};


PartnerConnectionCard.propTypes = propTypes;

export default PartnerConnectionCard;