import EditNormalAdmin from "../../components/associationDashboard/normaladmincomponent/EditNormalAdmin";
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
        // <button className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        //   Edit
        // </button>
        <EditNormalAdmin/>
      ),
      sortable: false, 
    },
    {
      name: 'Delete',
      selector: (row) => (
        <button className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      ),
      sortable: false,
    },
  ];
  

  export const Data = [
    {
       
        name: 'athul',
        association: 'Khcaa',
       
       
    },
    {
       
        name: 'naveen reddy',
        association: 'ahcaa',
        
       
    },
    {
       
        name: 'kumar',
        association: 'thcaa',
       
       
    },
    {
       
        name: 'roy',
        association: 'mhcaa',
        
       
    },
    {
        
        name: 'kiran',
        association: 'dhcaa',
       
       
    },
    {
       
        name: 'sindhu',
        association: 'uhcaa',
       
    }
       
    ,
    {
        
        name: 'joy',
        association: 'rhcaa',
        
       
    },
]