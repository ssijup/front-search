import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Columns } from '../../constants/Advocate/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import PaymentModal from '../../components/advocateDashboard/payment/PaymentModal'
import '../../styles/advocates/association.scss'
function Association() {
  
    const [association ,setAssociation]=useState([])

    useEffect(()=>{
        axiosInstance.get('/association/list').then((response) => {
            setAssociation(response.data)
         }).catch((err) => {
            console.log(err);
        });
    },[])

    const columnWithAssociation=[
        ...Columns,
        {
            
                name: 'Edit',
                cell: (row) => (
                  // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  //   Take membership
                  // </button>
                  <PaymentModal associationid={row.id}/>
                 
                ),
                sortable: false, 
              
        }
    ]
  return (
    <>
    <div className='association__container'>
     <div className="lawfirm__container__title">
        <h1 className='text-3xl font-bold'>Association</h1>
     </div>
     <div className="lawfirm__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
    
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={columnWithAssociation}
     data={association}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
  )
}

  

export default Association
