import React, { useEffect, useState } from 'react'
import '../../styles/association/normaladmin.scss'
import DataTable from 'react-data-table-component'
// import { Columns} from '../../constants/association/MembershipData'
import { columns } from '../../constants/Advocate/LawfirmData'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'
import AddLawfirm from '../../components/advocateDashboard/Add-lawfirm/AddLawfirm'
import DeleteLawfirm from '../../components/advocateDashboard/Add-lawfirm/DeleteLawfirm'
import EditLawfirm from '../../components/advocateDashboard/Add-lawfirm/EditLawfirm'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
function Lawfirm() {
 
  const navigate = useNavigate()
  const columnWithButton = [
    ...columns,
    {
      name: 'dashboard',
      selector: (row) => (
        <Link to={`/advocate/nested-route/${row.id}`}>
        <button  className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Dashboard
        </button>
        </Link> 
        // <Link to="/advocate/lawfirmdashboard">
        //   <button>Go to Lawfirm Dashboard</button>
        // </Link>


      ),
      sortable: false,
    },
    {
      name: 'Edit',
      cell: (row) => (
        // <DeleteLawfirm 
        // firmid={row.id}
        // setLawfirm={setLawfirm}
        // />
        <EditLawfirm lawfirmid={row.id} setLawfirm={setLawfirm} />

      ),
      sortable: false,
    },
    {
      name: 'Delete',
      cell: (row) => (
        <DeleteLawfirm
          firmid={row.id}
          setLawfirm={setLawfirm}
        />

      ),
      sortable: false,
    },

  ]

  // const handleNavigate=()=>{

  //   navigate('/advocate/nested-route/')

  // }

  const [lawfirm, setLawfirm] = useState("");
  const token=localStorage.getItem('advocateToken')


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get('/advocates/own-lawfirm',{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        });
        console.log("lawfirm", response.data);
        setLawfirm(response.data);
      } catch (error) {

        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <>
        <div className='registrar__container'>
          <div className="registrar__container__title">
            <h1 className='text-3xl font-bold'>Lawfirm</h1>
          </div>
          <div className="registrar__container__search">
            <input type="text" name="" id="" placeholder='search lawfirm' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  ' />
            {/* <i class='bx bx-search-alt'></i> */}
          </div>
          <div >
            {/* <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' >
        Add Lawfirm <span>+</span>
      </Button> */}
            <AddLawfirm setLawfirm={setLawfirm} />
          </div>

        </div>
        <div className="list-court" style={{ marginTop: '50px' }}>

          <DataTable
            columns={columnWithButton}
            data={lawfirm}
            fixedHeader
            pagination>

          </DataTable>


        </div>
      </>
    </div>
  )
}

export default Lawfirm
