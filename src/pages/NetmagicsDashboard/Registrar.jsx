import React, { useEffect, useState } from 'react'
import '../../styles/netmagics/registrar.scss'
import DataTable from 'react-data-table-component'
import AddRegistrar from '../../components/netmagicsdashboard/registrarcomponent/AddRegistrar'
import EditRegistrar from '../../components/netmagicsdashboard/registrarcomponent/EditRegistrar'
import DeleteRegistrar from '../../components/netmagicsdashboard/registrarcomponent/DeleteRegistrar'
import SuspendRegistrar from '../../components/netmagicsdashboard/registrarcomponent/SuspendRegistrar'
import { Columns } from '../../constants/netmagics/RegistrarData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'

function Registrar() {


   const [registrar, setRegistrar] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const token=localStorage.getItem('accessToken')

   // useEffect(() => {
   //    axiosInstance.get('/registrar/list-registrar',{
   //       headers:{
   //          'Authorization':`Bearer ${token}`
   //       }
   //    })
   //       .then((response) => {
   //          console.log("response data:", response.data);
   //          setRegistrar(response.data)

   //       })
   //       .catch((error) => {
   //          console.error(error);
   //       });
   // }, []);




   useEffect(() => {
      axiosInstance.get('/registrar/list-registrar', {
         headers: {
            'Authorization': `Bearer ${token}`
         }
      })
      .then((response) => {
         if (Array.isArray(response.data)){
            const filteredRegistrars = response.data.filter(registrar => {
               const nameMatch = registrar.user.name && registrar.user.name.toLowerCase().includes(searchQuery.toLowerCase());
               const courtMatch = registrar.court.name && registrar.court.name.toLowerCase().includes(searchQuery.toLowerCase());
               const emailMatch = registrar.user.email && registrar.user.email.toLowerCase().includes(searchQuery.toLowerCase());

               return nameMatch || courtMatch || emailMatch
            });
            setRegistrar(filteredRegistrars);
         }
      })
      .catch((error) => {
         console.log(error);
      });
   }, [searchQuery]);
   


 

   const columnWithButtons = [

      ...Columns, {
         name: 'Edit',
         cell: (row) => (
            <EditRegistrar Registrarid={row.id} setRegistrar={setRegistrar} />
         ),
         sortable: false,
      }, {
         name: 'Delete',
         cell: (row) => (
            <DeleteRegistrar Registrarid={row.id} setRegistrar={setRegistrar} />
         ),
         sortable: false
      }, {
         name: 'Suspend',
         cell: (row) => (
            <SuspendRegistrar Registrarid={row.id} setRegistrar={setRegistrar} />
         ),
         sortable: false
      },
      {
         name: 'impersonate',
         selector: (row) => (
           <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            <i class='bx bx-right-top-arrow-circle bx-tada bx-rotate-90 fs-6' ></i>
           </button>
         ),
         sortable: false,
       },
   ]

   return (
      <>
         <div className='registrar__container'>
            <div className="registrar__container__title">
               <h1 className='text-3xl font-bold'>Registrar</h1>
            </div>
            <div className="registrar__container__search">
               {/* <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  ' /> */}

               <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Search Registrar"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
               {/* <i class='bx bx-search-alt'></i> */}
            </div>
            <div >
               <AddRegistrar setRegistrar={setRegistrar} />
            </div>
            <ul>

            </ul>

         </div>
         <div className="list-court" style={{ marginTop: '50px' }}>

            <DataTable
               columns={columnWithButtons}
               data={registrar}
               fixedHeader
               pagination>

            </DataTable>


         </div>
      </>
   )
}

export default Registrar
