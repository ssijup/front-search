import React from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
import { Columns,Data } from '../../constants/association/NormalAdminData'
import AddNormalAdmin from '../../components/associationDashboard/normaladmincomponent/AddNormalAdmin'
function NormalAdmin() {
  return (
    <div>
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Normal Admin</h1>
     </div>
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div >
        <AddNormalAdmin/>
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={Columns}
     data={Data}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
    </div>
  )
}

export default NormalAdmin
