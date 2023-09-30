import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function MyVerticallyCenteredModal(props) {

  const [court, setCourt] = useState([])
  const [courtId, setCourtid] = useState('')
//   const [passwordError, setPasswordError] = useState('');
const token=localStorage.getItem('RegistrarToken')
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      estd_date:'',
      address:'',
      website:'',
      contact_no:'',
      court:''
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosInstance.post(`/association/create-association/${courtId}`, values,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        });
     console.log("response",response.data);
        resetForm();
    
        // Check if 'values' is an object and has the 'name' property
       
      } catch (error) {
        console.error(error);
      }
      if (values && values.name) {
        props.setRegistrar((prev) => {
          const updateRegistrar = [...prev, values];
          return updateRegistrar;
        });
      }
    }
      
  })

  console.log("formik ",formik.values);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axiosInstance.get('/association/court/list',{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        }).then((response) => {

          setCourt(response.data)
        }).catch((error) => {
          console.log(error);
        })

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);






  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Association
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='addRegistrar' onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
                {/* <p>{courtId}</p> */}
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' onChange={formik.handleChange} value={formik.values.name} placeholder="enter name..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Date
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="date" placeholder="enter phone number..." name='estd_date' value={formik.values.estd_date} onChange={formik.handleChange} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='address' onChange={formik.handleChange} value={formik.values.address} placeholder="enter address..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="email" placeholder="enter email id..." name='email' value={formik.values.email} onChange={formik.handleChange} />
            </div>
          </div>
          {/* <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="text" name='email' value={formik.values.email} onChange={formik.handleChange} placeholder="enter address" />
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div> */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Court
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                  value={courtId}
                  onChange={(e) => {

                    setCourtid(e.target.value)
                  }}
                >
                  <option >Select a court</option>
                  {court.map((courtItem) => (

                    <option key={courtItem.id} value={courtItem.id}>
                      {courtItem.name}
                    </option>
                  ))}

                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Contact no
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact_no" type="text" name='contact_no' value={formik.values.contact_no} onChange={formik.handleChange} placeholder="Enter phone" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Website
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description  " name='website'   type="text" value={formik.values.website} onChange={formik.handleChange}  placeholder="enter website"/>
    </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='addRegistrar' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Done </button>
      </Modal.Footer>
    </Modal>
  );
}

function Addassociation({ setAssociation }) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Add Association <span>+</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setRegistrar={setAssociation}


      />
    </>
  );
}

export default Addassociation