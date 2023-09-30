import React,{useEffect,useState} from 'react'
import '../../styles/netmagics/lawfirm.scss'
import DataTable from 'react-data-table-component'
import AddAssociationAdvocates from '../../components/associationDashboard/association-advocates/AddAssociationAdvocates'
import { Columns } from '../../constants/association/AdvocatesData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
function AssociationAdvocates() {
   const [AdvocatesData,setAdvocatesData]=useState([])

   useEffect(()=>{
      axiosInstance.get('/advocates/list').then((response)=>{
         console.log("response data",response.data);
         setAdvocatesData(response.data)
      }).catch((error)=>{
         console.log(error);
      })
   },[])
  return (
    <>
    <div className='lawfirm__container'>
     <div className="lawfirm__container__title">
        <h1 className='text-3xl font-bold'>Advocate</h1>
     </div>
     <div className="lawfirm__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div>
        <AddAssociationAdvocates/>
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={Columns}
     data={AdvocatesData}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
  )
}

export default AssociationAdvocates
