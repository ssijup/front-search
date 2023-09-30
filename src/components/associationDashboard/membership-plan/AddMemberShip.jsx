import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function AddMemberShip({membership,setMembership}) {
  const [show, setShow] = useState(false);
  const [trial,setTrial]=useState([])
  const [duration, setDuration] = useState("");
  const [unit_of_plan, setUnit_of_plan] = useState("")
  const [membership_price, setMembership_price] = useState("")


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit= async (e)=>{
    e.preventDefault()
    setMembership([...membership, trial]);
    let formField =new FormData()
    formField.append("duration",duration)
    formField.append("unit_of_plan",unit_of_plan)
    formField.append("membership_price",membership_price)
    await axiosInstance.post('/association/membership-plan/create',formField).then((response)=>{
      setTrial(response.data)
      console.log('successfully done');
      
      
      
    }).catch((error)=>{
      console.log(error);
    })

    


   
  }


  return (


    <>
      <Button variant="primary" className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={handleShow}>
        Add membership plan <span>+</span>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add membership plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='membership' className="w-full max-w-lg" onSubmit={handleSubmit}>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Duration
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='duration' placeholder="Enter duration..." onChange={(e)=>setDuration(e.target.value)} />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Plan Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='unit_of_plan' placeholder="Enter Plan name..." onChange={(e)=>setUnit_of_plan(e.target.value)} />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Membership Plan
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='membership_price' placeholder="Enter Amount..."  onChange={(e)=>setMembership_price(e.target.value)}/>

              </div>
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form='membership' type='submit' variant="primary" onClick={handleClose}>Add Plan</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMemberShip;