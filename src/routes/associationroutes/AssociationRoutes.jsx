import React from 'react'
import BlankPageId from '../../pages/AssociationDashboard/BlankPageId'
import AssociationDashboard from '../../pages/AssociationDashboard/AssociationDAshboard'
import AssociationMainLayouts from '../../layouts/associationlayouts/AssociationMainLayouts'
import NormalAdmin from '../../pages/AssociationDashboard/NormalAdmin'
import MemberShip from '../../pages/AssociationDashboard/MemberShip'
import AssociationLawfirm from '../../pages/AssociationDashboard/AssociationLawFirm'
import AssociationAdvocate from '../../pages/AssociationDashboard/AssociationAdvcoate'
import {Routes,Route} from 'react-router-dom';
function AssociationRoutes() {
  return (
    <div>
       <Routes>
        <Route path='/association' element={<AssociationMainLayouts />}>
          <Route index element={<AssociationDashboard />} />
          <Route path='normaladmin' element={<NormalAdmin/>} />
          <Route path='membership' element={<MemberShip/>} />
          <Route path='advocates' element={<AssociationAdvocate/>} />
          <Route path='lawfirm' element={<AssociationLawfirm/>} />
          <Route path='announcement' element={<BlankPageId/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default AssociationRoutes
