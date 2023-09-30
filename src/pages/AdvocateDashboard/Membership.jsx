import React,{useState} from 'react'
import DataTable from 'react-data-table-component'
import { Columns } from '../../constants/Advocate/MembershipData'
function Membership() {
    const [membership,setMembership]=useState([])
  return (
    <>
    <div className='lawfirm__container'>
     <div className="lawfirm__container__title">
        <h1 className='text-3xl font-bold'>Membership</h1>
     </div>
     <div className="lawfirm__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div>
        
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={Columns}
     data={membership}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
  )
}

export default Membership
