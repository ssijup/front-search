import React,{useEffect} from 'react'
import './registrar-mainlayout.scss'
import { Outlet,useNavigate } from 'react-router-dom'
import RgeistrarSidebar from '../../components/registrarDashboard/registrarsidebar/RgeistrarSidebar'
import RegistrarTopNav from '../../components/registrarDashboard/registrartopnav/RegistrarTopNav'
function RegistrarMainLayouts() {

  const navigate=useNavigate()
  const token=localStorage.getItem('RegistrarToken')

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[navigate,token])


  return (
    <>

    {token ?(
      <>
      <RgeistrarSidebar />
      <div className="main">
        <div className="main__content">
       
            <RegistrarTopNav/>
            
            <Outlet/>
        </div>
      </div>
    </>
    ):null}
    </>
  )
}

export default RegistrarMainLayouts
