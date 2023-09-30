import EditMemberShip from "../../components/associationDashboard/membership-plan/EditMembership";
import axiosInstance from "../../configs/axios/AxiosVonfiguration";
export const Columns = [
    {
      name: 'Type',
      selector: (row) => row.unit_of_plan,
      sortable: true,
    },
    {
      name: 'Duration',
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: (row) => row.membership_price,
      sortable: true,
    },
    {
      name: 'Edit',
      selector: (row) => (
        // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleEdit}>
        //   Edit
        // </button>
        <EditMemberShip 
        membershipId={row.id}
        
        />
        
      ),
      sortable: false, 
    },
    {
      name: 'Delete',
      selector: (row) => (
        <button onClick={()=>handleDelete(row.id)} className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
          Delete
        </button>
      ),
      sortable: false,
    },
  ];
  
const handleDelete =async(userid)=>{
  await axiosInstance.delete(`/association/membership-plan/delete/${userid}`).then((response)=>{
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}

