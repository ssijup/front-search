import React from 'react'
import BlankPage from '../../pages/RegistrarDashboard/BlankPage'
import RegistrarDashboard from '../../pages/RegistrarDashboard/RegistrarDashboard'
import RegistrarMainLayouts from '../../layouts/registrarlayouts/RegistrarMainLayouts'
import Association from '../../pages/RegistrarDashboard/Association'
import Admin from '../../pages/RegistrarDashboard/Admin'
import RegistrarLogin from '../../pages/RegistrarDashboard/RegistrarLogin'
import {Routes,Route} from 'react-router-dom';
function RegistrarRoutes() {
  return (
    <div>
       <Routes>
           <Route path='/login' element={<RegistrarLogin/>}/>

        <Route path='/registrar' element={<RegistrarMainLayouts />}>
          <Route index element={<RegistrarDashboard />} />
          <Route path='association' element={<Association />} />
          {/* <Route path='lawfirm' element={<Admin />} /> */}
          <Route path='advocate' element={<BlankPage/>} />
          {/* <Route path='lawfirm' element={<BlankPage/>} />
          <Route path='advocate' element={<BlankPage/>} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default RegistrarRoutes
