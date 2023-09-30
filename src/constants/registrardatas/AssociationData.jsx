// import axiosInstance from "../../configs/axios/AxiosVonfiguration";
export const Columns = [
    {
        name: 'Association Name',
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: 'Email',
        selector: (row) => row.email,
        sortable: true,
      },
      {
          name: 'Court',
          selector: (row) => row.court.name,
          sortable: true,
      },
      
   
    
  ];
  
