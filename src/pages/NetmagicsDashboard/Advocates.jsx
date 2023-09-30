import React,{useEffect,useState} from 'react';
import '../../styles/netmagics/registrar.scss';
import DataTable from 'react-data-table-component';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { Columns} from '../../constants/netmagics/AdvocateData';

function Advocates() {
  const [advocate, setAdvocate] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


 const token=localStorage.getItem('accessToken')
 useEffect(() => {
    
  axiosInstance.get('/advocates/list',{
    headers:{
      'Authorization':`Bearer ${token}`
    }
  })
  .then((response) => {
    if (Array.isArray(response.data)) {
       const filteredAdvocates = response.data.filter(advocates => {
          const nameMatch = advocates.user.name && advocates.user.name.toLowerCase().includes(searchQuery.toLowerCase());
          const emailMatch = advocates.user.email && advocates.user.email.toLowerCase().includes(searchQuery.toLowerCase());
          const enrollMatch = advocates.enrollment_id && advocates.enrollment_id.toLowerCase().includes(searchQuery.toLowerCase());
          const speciMatch = advocates.specialization && advocates.specialization.toLowerCase().includes(searchQuery.toLowerCase());

          return nameMatch || emailMatch || enrollMatch ||speciMatch;
       });
       setAdvocate(filteredAdvocates);
    }
 })
 .catch((error) => {
    console.log(error);
 });

}, [searchQuery]);


  // const handleEditClick = (id) => {
  //   // Handle the edit button click here
  //   // You can send the ID to the backend for editing
  //   axiosInstance.put(`/advocates/edit/${id}`)
  //     .then(response => {
  //       // Handle the successful edit response (if needed)
  //     })
  //     .catch(error => {
  //       console.error('Error editing data:', error);
  //     });
  // };

  // const columnsWithEditButton = [
  //   ...Columns,
  //   {
  //     name: 'Edit',
  //     cell: (row) => (
         
  //       <button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => handleEditClick(console.log(row.id))}>Edit</button>
  //     ),
  //   },
  // ];

  return (
    <>
      <div className='registrar__container'>
        {/* Your title and search input */}
        <div className="association__container__search">
        <input type="text" name="" id="" placeholder='Search Advocate' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" '
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
      </div>
      <div className="list-court" style={{ marginTop: '50px' }}>
        <DataTable
          columns={Columns}
          data={advocate}
          fixedHeader
          pagination
        />
      </div>
    </>
  );
}

export default Advocates;
