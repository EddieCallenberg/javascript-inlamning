import React from 'react'

const TeamCard = ({imgSrc, memberName, role}) => {
  return (
        <div className="member-card">
            <img src={imgSrc} alt="Picture of team member Kristine Palmer" />
            <h4>{memberName}</h4>
            <p>{role}</p>
        </div>
  )
}

export default TeamCard