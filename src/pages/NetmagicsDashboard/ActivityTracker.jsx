import React,{useEffect, useState} from 'react'
import '../../styles/netmagics/activity-tracker.scss'
import DataTable from 'react-data-table-component'
import  { Columns, data } from '../../constants/netmagics/ActivityData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
function ActivityTracker() {
const token=localStorage.getItem('accessToken')
const [tracker,setTracker]=useState([])
const [searchQuery, setSearchQuery] = useState('');

  useEffect(()=>{
    axiosInstance.get('/netmagics/activity-tracker/list',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
      .then((response) => {
        if (Array.isArray(response.data)){
           const filteredActivity = response.data.filter(activity => {
              const descriptionMatch = activity.description && activity.description.toLowerCase().includes(searchQuery.toLowerCase());
              const timeMatch = activity.time && activity.time.toLowerCase().includes(searchQuery.toLowerCase());

              return descriptionMatch || timeMatch
            });
           setTracker(filteredActivity);
        }
     })
     .catch((error) => {
        console.log(error);
     });
  }, [searchQuery]);


  return (
   <>
    <div className='registrar__container'>
        {/* Your title and search input */}
        <div className="association__container__search">
        <input type="text" name="" id="" placeholder='search ' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" '
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     </div>

   <DataTable
   columns={Columns}
   data={tracker}
   fixedHeader
   pagination
   />

   
   </>
  )
}

export default ActivityTracker
