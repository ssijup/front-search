import React,{useEffect,useState} from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns } from '../../constants/association/MembershipData'
// import {Columns} from '../../constants/association/AssociationData'
import { Columns } from '../../constants/registrardatas/AssociationData'
// import {Columns} from '../../constants/netmagics/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
// import AddMemberShip from '../../components/associationDashboard/membership-plan/AddMemberShip'

function Admin() {



const [association,setAssociation]=useState([])
  
const token=localStorage.getItem('RegistrarToken')

  

  


  return (
    <div>
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Association admins</h1>
     </div>
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
       
     </div>
     <div>
        
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={Columns}
     data={association}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
    </div>
  )
}

export default Admin