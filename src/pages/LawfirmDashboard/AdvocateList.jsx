import React,{useEffect,useState} from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns } from '../../constants/association/MembershipData'
import {Columns} from '../../constants/lawfirm/AdvocateData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import InviteAdvocate from '../../components/lawfirmDashboard/invite-advocate/InviteAdvocate'
function AdvocateList() {

    const [advocate,setAdvocate]=useState('')

    useEffect(()=>{
        axiosInstance.get('/advocates/list').then((response)=>{
          console.log(response.data);
            setAdvocate(response.data)
        }).catch((error)=>{
            console.warn(error);
        })
    },[])
    

    const columnWithInvitebutton=[
        ...Columns,
        {
            name: 'Invite',
            selector: (row) => (
              // <button  className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              //   Invite
              // </button>
              <InviteAdvocate advid={row.id}/>
              
      
      
            ),
            sortable: false,
          },
    ]

  
  return (
    <div>
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Advocate</h1>
     </div>
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search advocate' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={columnWithInvitebutton}
     data={advocate}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
    </div>
  )
}

export default AdvocateList