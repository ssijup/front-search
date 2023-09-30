import React,{useEffect} from 'react'
import './lawfirm-layouts.scss'
import { Outlet,useNavigate } from 'react-router-dom'
import LawfirmSidebar from '../../components/lawfirmDashboard/lawfirmSidebar/LawfirmSidebar'
import LawfirmTopnav from '../../components/lawfirmDashboard/lawfirmTopnav/LawfirmTopnav'
function LawfirmMainLayouts() {

  const lawfirm_id = localStorage.getItem('lawfirm_id')
  
  return (
    
    
        <>
    <LawfirmSidebar/>
    <div className="main">
      <div className="main__content">
        
        <LawfirmTopnav/>
        <div>Testing if this is rendered</div>
        {/* <div>The lawfirm id from local storage is  oo : {lawfirm_id}</div> */}


        <Outlet/>
      </div>
    </div>
    
      </>
  )
}

export default LawfirmMainLayouts
