import React, { useEffect, useState } from 'react'
import '../../styles/netmagics/association.scss'

import DataTable from 'react-data-table-component'

// import AddAssociation from '../../components/netmagicsdashboard/association-component/AddAssociation'
import { Columns } from '../../constants/netmagics/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
function Association() {
   const [association , setAssociation]=useState([])
   const [searchQuery, setSearchQuery] = useState('');
   const token=localStorage.getItem('accessToken')

   useEffect(()=>{
      axiosInstance.get('/association/list', {
         headers: {
            'Authorization': `Bearer ${token}`
         }
      })
      .then((response) => {
         if (Array.isArray(response.data)) {
            const filteredAssociation = response.data.filter(association => {
               const nameMatch = association.name && association.name.toLowerCase().includes(searchQuery.toLowerCase());
               const courtMatch = association.court.name && association.court.name.toLowerCase().includes(searchQuery.toLowerCase());
               const emailMatch = association.email && association.email.toLowerCase().includes(searchQuery.toLowerCase());
               // const nameMatch = association.name && association.name.toLowerCase().includes(searchQuery.toLowerCase());

               return nameMatch || emailMatch
            });
            setAssociation(filteredAssociation);
         }
      })
      .catch((error) => {
         console.log(error);
      });
   }, [searchQuery]);
   
  return (
    <>
    <div className='association__container'>
     <div className="association__container__title">
        <h1 className='text-3xl font-bold'>Association</h1>
     </div>
     <div className="association__container__search">
        <input type="text" name="" id="" placeholder='Search Association' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" '
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div >
        {/* <AddAssociation/> */}
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
  )
}

export default  Association




