import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import {Registrar} from '../../../schema/netmagics/NetmagicsSchema'
import { useFormik } from 'formik'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function MyVerticallyCenteredModal(props) {

  const [court, setCourt] = useState([])
  const [courtId, setCourtid] = useState('')
  // const [passwordError, setPasswordError] = useState('');
  const token=localStorage.getItem('accessToken')
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      
      phone: ''
    },
    validationSchema: Registrar,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosInstance.post(`/registrar/create-registrar/${courtId}`, values)
        
        console.log("response",response);
        
        resetForm();
        props.onHide()
        if (values && values.name) {
          props.setRegistrar((prev) => {
            const updateRegistrar = [...prev, values];
            return updateRegistrar;
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

  })

  console.log("court id",courtId);
  console.log("formik values",formik.values);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axiosInstance.get('/association/court/sorted/list',{
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
          Add Registrar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form id='addRegistrar' onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' onChange={formik.handleChange} value={formik.values.name} placeholder="enter name..." />
              {formik.touched.name && formik.errors.name && (
    <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
  )}
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                phone
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" placeholder="enter phone number..." name='phone' value={formik.values.phone} onChange={formik.handleChange} />
              {formik.touched.phone && formik.errors.phone && (
    <div className="text-red-500 text-xs italic">{formik.errors.phone}</div>
  )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="text" name='email' value={formik.values.email} onChange={formik.handleChange} placeholder="enter address" />
              {formik.touched.email && formik.errors.email && (
    <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
  )}
              {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
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
                 required>
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
                password
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact_no" type="password" name='password' value={formik.values.password} onChange={formik.handleChange} placeholder="Enter password" />
              {formik.touched.password && formik.errors.password && (
    <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
  )}
            </div>
            {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        re-type password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description  " name='retypepassword'   type="password" value={formik.values.retypepassword} onChange={formik.handleChange}  placeholder="Re-enter password"/>
      {formik.touched.retypepassword && formik.errors.retypepassword && (
    <div className="text-red-500 text-xs italic">{formik.errors.retypepassword}</div>
  )}
    </div> */}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='addRegistrar' type='submit' className='bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Done </button>

      </Modal.Footer>
    </Modal>
  );
}

function AddRegistrar({ setRegistrar }) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Add Registrar <span>+</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setRegistrar={setRegistrar}


      />
    </>
  );
}

export default AddRegistrar