import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';


function LawfirmDashboard() {

  const { lawfirmId } = useParams();
  // //  localStorage.setItem('lawfirm_id',id)
  // if (id && !['advocates', 'members', 'notification'].includes(id)) {
  //   localStorage.setItem('lawfirm_id', id);
  // }
  //  const lid = localStorage.getItem('lawfirm_id')
  // console.log("The ID is:", lid);
//   if (id && !['advocates', 'members', 'notification'].includes(id)) {
//     localStorage.setItem('lawfirm_id', id);
// }
// if (!localStorage.getItem('lawfirm_id') && id && !['advocates', 'members', 'notification'].includes(id)) {
//   localStorage.setItem('lawfirm_id', id);
// } 

// if (lawfirmId && !['advocates', 'members', 'notification'].includes(lawfirmId)) {
//   localStorage.setItem('lawfirm_id', lawfirmId);
// }
useEffect(() => {
  if (lawfirmId && !['advocates', 'members', 'notification'].includes(lawfirmId)) {
    localStorage.setItem('lawfirm_id', lawfirmId);
  }
}, [lawfirmId]);


console.log("URL lawfirmId:", lawfirmId);
console.log("Stored lawfirmId:", localStorage.getItem('lawfirm_id'));



const displayId = (lawfirmId && !['advocates', 'members', 'notification'].includes(lawfirmId))
    ? lawfirmId
    : (localStorage.getItem('lawfirm_id') || 'Not Specified');

  
    



  return (
    <div>
      LawfirmDashboarddddd
      LawfirmDashboard withasdsad ID:sd {displayId}
    </div>
  )
}

export default LawfirmDashboard
