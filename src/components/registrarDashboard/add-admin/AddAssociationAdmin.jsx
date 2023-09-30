import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import { Registrar } from '../../../schema/netmagics/NetmagicsSchema'
import { useFormik } from 'formik'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function MyVerticallyCenteredModal(props) {

  const [court, setCourt] = useState([])
  const [courtId, setCourtid] = useState('')
  const [admin,setAdmin]=useState([])
  // const [passwordError, setPasswordError] = useState('');
  const token = localStorage.getItem('RegistrarToken')
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      address:'',
      date_of_birth:'',
      // profile_image:''
    },
    // validationSchema: Registrar,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosInstance.post(`/association/association-super-admin/create/${props.associationid}`, values,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
       console.log('enter this areaaaaaaaaaaa');
        console.log("response", response);
       setAdmin(response.data)
        resetForm();
        props.onHide()
        // if (values && values.name) {
        //   props.setRegistrar((prev) => {
        //     const updateRegistrar = [...prev, values];
        //     return updateRegistrar;
        //   });
        // }
      } catch (error) {
        console.error(error);
      }
      props.association(prev=>{
        console.log("previous values",prev);
      })
    }
    

  })

console.log("formik.values" ,formik.values);

console.log("datassssss",admin);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Superadmin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='addRegistrar' onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder="enter name..." />
              {/* {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
              )} */}
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" value={formik.values.email} onChange={formik.handleChange} placeholder="enter Email..." name='email' />
              {/* {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-xs italic">{formik.errors.phone}</div>
              )} */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Phone
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='phone' value={formik.values.phone} onChange={formik.handleChange} placeholder="enter phone..." />
              {/* {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
              )} */}
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                date of birth
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="date" value={formik.values.date_of_birth} onChange={formik.handleChange} name='date_of_birth'  />
              
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
               Password
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="password" name='password' value={formik.values.password} onChange={formik.handleChange} placeholder="enter password..." />
             
            </div>
          </div> 
         
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='address' value={formik.values.address} onChange={formik.handleChange}  placeholder="enter address..." />
              
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            {/* <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                profile
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="file" placeholder="enter phone number..." value={formik.values.profile_image} onChange={formik.handleChange} name='profile_image  ' />
             
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

function AddAssociationAdmin({ associationid,association }) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <Button className='hadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-6 rounded border-none' onClick={() => setModalShow(true)}>
        Add admin
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        associationid={associationid}
        association={association}


      />
    </>
  );
}
export default AddAssociationAdmin