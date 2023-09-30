import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function PaymentModal({associationid}) {
  
 
    const [show, setShow] = useState(false);
    const [membership,setMembership]=useState([])
    const [membershipid,setMembershipid]=useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token=localStorage.getItem('advocateToken')
  const user=localStorage.getItem('advocateData')

  // useEffect(() => {
  //   axiosInstance.get(`/association/membership-plan/list/${associationid}`,{
  //        headers:{
  //         'Authorization':`Bearer ${token}`
  //        }
  //   })
  //     .then((response) => {
  //       setMembership(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },[]);

// console.log(associationid);

  useEffect(() => {
    axiosInstance.get(`/association/membership-plan/list/${associationid}`
    // , {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // }
    )
    .then((response) => {
      console.log("API Response:", response.data); 
      setMembership(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


console.log("membership dtaa",membership);







 
  // const handleSubmit=(e)=>{
  //    e.preventDefault()
  //    const url=
  //    axiosInstance.post(`/membership-payment/create/`).then((response)=>{
  //       console.log("response data",response.data);
  //    }).catch((error)=>{
  //       console.log(error);
  //    })

  // }
  
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const url = `association/membership-payment/create/${associationid}/${user}/${membershipid}`
//     axiosInstance.post(url, {
      
//     })
//     .then((response) => {
//         console.log("response data", response.data);
//         const url = response.data.payment_request_url
//       window.location.href = url;
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }

const handleSubmit = (e) => {
   e.preventDefault();
   const url = `association/membership-payment/create/${associationid}/${user}/${membershipid}`
   axiosInstance.post(url, {
   
   })
   .then((response) => {
       console.log("response data", response.data);

       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);
       console.log("response data", response.data);

       


       const urll = response.data.payment_request_url
     window.location.href = urll;
   })
   .catch((error) => {
       console.log(error);
   });
 }
 
  return (


    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={handleShow}>
        Take membership
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select membership plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='payment' className="w-full max-w-lg" onSubmit={handleSubmit}>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Duration
                </label>
                {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='duration' placeholder="Enter duration..."  /> */}
                 <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                 value={membership.id}
                 onChange={(e)=>{
                    setMembershipid(e.target.value)
                 }}>
                    <option className='payment-options' value="">Select membership plan</option>
                    {
                        membership.map((membership)=>(
                            <option key={membership.id} value={membership.id} >
                              <span style={{ marginLeft: '8px' }}>{membership.duration}</span>  <span style={{ marginRight: '8px' }}>{membership.unit_of_plan}</span>   <span style={{ marginRight: '8px' }}>₹{membership.membership_price}</span>
                            </option>
                        ))
                    }
                   
                 </select>
                 {/* <p>membership{membershipid}</p>
                 <p>association{associationid}</p> */}
                 
              </div>
              {/* <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Plan Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='unit_of_plan' placeholder="Enter Plan name..."  />

              </div> */}
              {/* <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Membership Plan
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='membership_price' placeholder="Enter Amount..."  />

              </div> */}
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form='payment' type='submit' variant="primary" onClick={handleClose}>Take membership</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }

export default PaymentModal;