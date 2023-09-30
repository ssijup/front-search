import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function EditMemberShip({membershipId}) {
  const [show, setShow] = useState(false);
  // const [membershipdata,setMembershipdata]=useState([])
  // const [duration,setDuration]=useState("")
  const [membershipData, setMembershipData] = useState({
    duration: '',
    unit_of_plan: '',
    membership_price: '',
  });
  
  
  
  const handleShow= async ()=>{
   console.log(membershipId);
   await axiosInstance.get(`/association/membership-plan/editform/${membershipId}`).then((response)=>{
    setMembershipData(response.data)

   }).catch((error)=>{
    console.log(error);
   })
    
    setShow(true)

  }
  const handleClose = async (e) => {
    e.preventDefault()
    axiosInstance.patch(`/association/membership-plan/edit/${membershipId}`,membershipData).then((response)=>{
     console.log( response.data);
    })
    setShow(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMembershipData({ ...membershipData, [name]: value });
    
  };




  return (

    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={handleShow}>
        Edit 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit membership plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editmembership' className="w-full max-w-lg" >

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Duration
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={membershipData.duration} type="text" name='duration' onChange={handleChange} placeholder="Enter duration..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Plan Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={membershipData.unit_of_plan} type="text" name='unit_of_plan' onChange={handleChange} placeholder="Enter Plan name..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Membership Plan
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={membershipData.membership_price}  type="text" name='membership_price' onChange={handleChange}  placeholder="Enter Amount..."  />

              </div>
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form='editmembership' type='submit' variant="primary" onClick={handleClose}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMemberShip;