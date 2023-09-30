export const columns = [
    {
        name: 'Name',
        selector: (row) => row.lawfirm.name,
        sortable: true,
      },
      {
        name: 'specialization',
        selector: (row) => row.lawfirm.specialization,
        sortable: true,
      },
      {
          name: 'number',
          selector: (row) => row.lawfirm.contact_no,
          sortable: true,
        },
        
          
        
    
   
  ];

  export const Data = [
    {
       
        name: 'Meriba associates',
        place: 'Kochi',
        number:'9645655408'
       
       
    },
    
   
]