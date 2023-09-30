import {  useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axiosInstance from '../../../configs/axios/AxiosVonfiguration'
function EditAssociationAdvocates({advocateId}) {
  const [show, setShow] = useState(false);
  
  const [advocateData,setAdvocateData]=useState({
    phone:'',
    email:'',
    specilalization:'',
    profile_image:''
  })
  
  
  
  const handleShow = async () => {
    try {
      const response = await axiosInstance.get(`/advocates/editform-advocate/${advocateId}`);
      
      const { phone, profile_image, specialization } = response.data;
      const { email } = response.data.user;
      console.log('1');
      console.log("phone", phone);
      console.log("profile_image", profile_image);
      console.log('specialization', specialization);
      console.log('email',email);
    console.log('2');
      setAdvocateData({
        phone,
        email,
        specialization,
        profile_image
      });
  
      
      setShow(true);
    } catch (error) {
      
      console.error("Error fetching data:", error);
    }
  }





  
  const handleClose = async (e) => {
    e.preventDefault()
    console.log("advocate data",advocateData);
    axiosInstance.patch(`/advocates/edit-advocate/${advocateId}`,advocateData).then((response)=>{
        console.log(response.data);
    }).catch((error)=>{
        console.log(error);
    })
   
    setShow(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdvocateData({ ...advocateData, [name]: value });

    console.log("advocatedata",advocateData);
    
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
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  type="text" name='phone' value={advocateData.phone} onChange={handleChange} placeholder="Enter phone number..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Plan Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  type="text" name='email' value={advocateData.email} onChange={handleChange}  placeholder="Enter email..."  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Membership Plan
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  type="text" name='specialization' value={advocateData.specialization} onChange={handleChange}  placeholder="Enter specilalization"  />

              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Membership Plan
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="large_size" type="file" placeholder='choose file'/>
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

export default EditAssociationAdvocates;