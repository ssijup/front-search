import EditAssociationAdvocates from '../../components/associationDashboard/association-advocates/EditAssociationAdvocates'
import axiosInstance from '../../configs/axios/AxiosVonfiguration';

export const Columns = [
    {
      name: 'Name',
      selector: (row) => row.user.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.user.email,
      sortable: true,
    },
    {
        name: 'Phone',
        selector: (row) => row.phone,
        sortable: true,
      },
      {
        name: 'Specialization',
        selector: (row) => row.specialization,
        sortable: true,
      },

    {
      name: 'Details',
      selector: (row) => (
        // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        //   Edit
        // </button>
        <EditAssociationAdvocates 
        advocateId={row.id}/>
      ),
      sortable: false, 
    },
    {
      name: 'Suspend',
      selector: (row) => (
        <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
          {row.is_suspend ? 'suspend' : 'unsuspend'}
        </button>
      ),
      sortable: false,
    },
  ];

  const handleSuspend=async(userid,is_suspend)=>{
    
  // // console.log(userid);
  //   await axiosInstance.patch(`/advocates/suspend-advocate/${userid}`).then((response)=>{
  //     console.log(response.data);
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  try {
    if(is_suspend){
      await axiosInstance.patch(`/advocates/suspend-advocate/${userid}`).then((response)=>{
            console.log(response.data);
          }).catch((error)=>{
            console.log(error);
          })
    }else{
      await axiosInstance.patch(`/advocates/suspend-advocate/${userid}`).then((response)=>{
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  } catch (error) {
     console.log(error);
  }
  }


