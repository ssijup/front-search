import React,{useEffect,useState} from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns } from '../../constants/association/MembershipData'
// import {Columns} from '../../constants/association/AssociationData'
import { Columns } from '../../constants/registrardatas/AssociationData'
// import {Columns} from '../../constants/netmagics/AssociationData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
// import AddMemberShip from '../../components/associationDashboard/membership-plan/AddMemberShip'
import Addassociation from '../../components/registrarDashboard/addassociation/Addassociation'
import AddAssociationAdmin from '../../components/registrarDashboard/add-admin/AddAssociationAdmin'
function Association() {


const [membership , setMembership]=useState([]);
const [association,setAssociation]=useState([])
  // useEffect(()=>{
  //  axiosInstance.get('/association/membership-plan/list').then((response)=>{
  //   console.log(response.data);
  //   setMembership(response.data)
  //  }).catch((error)=>{
  //   console.log(error);
  //  })

  // },[])
const token=localStorage.getItem('RegistrarToken')

  useEffect(()=>{
    axiosInstance.get('/association/list',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response)=>{
      setAssociation(response.data)
    })
   
  },[])


  const ColumnsWithbuttons=[
    ...Columns,
    {
      name: 'Suspend',
      selector: (row) => (
        <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
          {row.is_suspend ? 'suspend' : 'unsuspend'}
        </button>
      ),
      sortable: false,
    },
    {
      name: 'impersonate',
      selector: (row) => (
        <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
         <i class='bx bx-right-top-arrow-circle fs-4 bx-tada bx-rotate-90 fs-6' ></i>
        </button>
      ),
      sortable: false,
    },
    {
      name: 'Admin',
      cell: (row) => (
        <div>
          <AddAssociationAdmin associationid={row.id} association={association}/> 
        </div>
      ),
      sortable: false,
    }
    
      // {
      //   name: 'Suspend',
      //   selector: (row) => (
      //     <button onClick={()=>handleSuspend(row.id,row.is_suspend)} className={`bg-${row.is_suspend ? 'red' :'green'}-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}>
      //       {row.is_suspend ? 'suspend' : 'unsuspend'}
      //     </button>
      //   ),
      //   sortable: false,
      // },
      // {
      //   name: 'impersonate',
      //   selector: (row) => (
      //     <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
      //      <i class='bx bx-right-top-arrow-circle fs-4 bx-tada bx-rotate-90 fs-6' ></i>
      //     </button>
      //   ),
      //   sortable: false,
      // },
    
  ]


  const handleSuspend=async(userid,is_suspend)=>{
    const token=localStorage.getItem('accessToken')
  try {
    if(is_suspend){
      await axiosInstance.patch(`/association/suspend-association/${userid}`,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      }).then((response)=>{
            console.log(response.data);
          }).catch((error)=>{
            console.log(error);
          })
    }else{
      await axiosInstance.patch(`/association/suspend-association/${userid}`).then((response)=>{
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  } catch (error) {
     console.log(error);
  }

  
  // setAssociation((prev) => {
  //     const updateRegistrar = [...prev, ];
  //     return updateRegistrar;
  //   });

  // const updatedAssociation = response.data;

   
    // setAssociations((prevAssociations) => [...prevAssociations, updatedAssociation]);
  
  }
  


  return (
    <div>
      <>
    <div className='registrar__container'>
     <div className="registrar__container__title">
        <h1 className='text-3xl font-bold'>Association</h1>
     </div>
     <div className="registrar__container__search">
        <input type="text" name="" id="" placeholder='search court' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  '/>
        {/* <i class='bx bx-search-alt'></i> */}
     </div>
     <div>
        <Addassociation setAssociation={setAssociation}/>
     </div>
    
    </div>
     <div className="list-court" style={{marginTop:'50px'}}>
     
     <DataTable
     columns={ColumnsWithbuttons}
     data={association}
     fixedHeader
     pagination>

     </DataTable>
     

  </div>
  </>
    </div>
  )
}

export default Association