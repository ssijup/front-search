import React, { useEffect } from 'react'
import './advocate-layouts.scss'
import AdvocateSidebar from '../../components/advocateDashboard/advocateSidebar/AdvocateSidebar'
import AdvocateTopnav from '../../components/advocateDashboard/advocateTopnav/AdvocateTopnav'
import { Outlet,useNavigate } from 'react-router-dom'
function AdvocateLayouts() {
  const token = localStorage.getItem('advocateToken')
  const navigate=useNavigate()

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[navigate,token])
  return (
    <>
    {
      token ?(
        <>
      <AdvocateSidebar />
    <div className="main">
      <div className="main__content">
          
          <AdvocateTopnav/>
          
          <Outlet />
      </div>
    </div>
    </>
      ):null}
      </>
  )
  // return(
  //   <>
  //   <AdvocateSidebar />
  //     <div className="main">
  //       <div className="main__content">
            
  //           <AdvocateTopnav/>
            
  //           <Outlet />
  //       </div>
  //     </div>
  //     </>
  // )
}

export default AdvocateLayouts
