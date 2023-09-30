import React from 'react'
import './association-layouts.scss'
import { Outlet } from 'react-router-dom'
import AssociationSidebar from '../../components/associationDashboard/associationsidebar/AssociationSidebar'
import AssociationTopNav from '../../components/associationDashboard/associationtopnav/AssociationTopNav'
function AssociationMainLayouts() {
  return (
    <>
    <AssociationSidebar />
    <div className="main">
      <div className="main__content">
     
          <AssociationTopNav/>
          
          <Outlet/>
      </div>
    </div>
  </>
  )
}

export default AssociationMainLayouts
