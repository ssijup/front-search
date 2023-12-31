import React from 'react'
import './lawfirminfo.scss'
function LawfirmInfo({user}) {
  return (
    <div>
      <div className="user-info">
        <div className="user-info__img">
            <img src={user.img} alt="" />
        </div>
        <div className="user-info__name">
            <span>{user.name}</span>
        </div>
      </div>
    </div>
  )
}

export default LawfirmInfo