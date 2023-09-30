import DetailView from "../../components/netmagicsdashboard/activity-tracker/DetailView";
export const Columns = [
    // {
    //   name: 'Done by',
    //   selector: (row) => row.done_by,
    //   sortable: true,
    // },
    
    {
      name: 'Time',
      selector: (row) => row.time,
      sortable: true,
    },
    
    {
      name: 'Details',
      selector: (row) =>row.description,
      // <DetailView/>
      
      
      sortable: true,
    },
   
    
    
  ];

  export const data = [

    {
        done:'user',
        time:'10.30pm',
        description:'changed membership plan'
    }
  ]