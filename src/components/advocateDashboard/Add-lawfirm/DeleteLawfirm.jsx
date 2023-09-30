import React from 'react'
import Swal from 'sweetalert2'
import '../../../styles/netmagics/swal.scss'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function DeleteLawfirm({firmid,setLawfirm}) {
    
//   const token=localStorage.getItem('accessToken')
    const handleDelete=()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success ms-2',
              cancelButton: 'btn btn-danger me-2 '
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            customContainerClass: 'swal-buttons-container'
          }).then((result) => {
            if (result.isConfirmed) {
                
                axiosInstance.delete(`/lawfirm/delete-lawfirm/${firmid}`).then((response)=>{
                    console.log(response);
                  }).catch((error)=>{
                    console.log(error);
                  })
                  setLawfirm((prevCourt) => {
                   
                    return prevCourt.filter((court) => court.id !== firmid);
                  });
            
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
       
    }
  return (
    <div>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
    </div>
  )
}

export default DeleteLawfirm
