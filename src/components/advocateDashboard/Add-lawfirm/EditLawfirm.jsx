import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik'
import axiosInstance from '../../../configs/axios/AxiosVonfiguration';

function MyVerticallyCenteredModal(props) {
   

  //  const user='5'
  const formik =useFormik({
    initialValues:{
      name: "",
      address: "" ,
      contact_no: "",
      specialization: "",
      description: "",
      estd_date:"",
      email: "",
    },
    onSubmit: async (values,{resetForm})=>{

        await axiosInstance.patch(`/lawfirm/edit-lawfirm/${props.lawfirmid}`,values).then((response)=>{
            console.log(response.data);
            resetForm()
        }).catch((error)=>{
            console.log(error);
        })

        props.setLawfirm(prevlawfirm => {
            const updatedCourt = prevlawfirm.map(courtItem => {
              if (courtItem.id === props.lawfirmid) {
                return { ...courtItem, ...values }; // Replace the existing value with the edited value
              }
              return courtItem;
            });
            return updatedCourt;
          });
    }
   
   
  }) 

useEffect(()=>{
    formik.setValues(props.lawfirmData)
},[props.lawfirmData])

console.log("props.lawfirmData",formik.values);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Lawfirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='editlawfirm' onSubmit={formik.handleSubmit} >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
                {/* <p>{courtId}</p> */}
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder="enter name..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Date
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="date" name='estd_date' value={formik.values.estd_date} onChange={formik.handleChange} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Address
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='address' value={formik.values.address} onChange={formik.handleChange} placeholder="enter address..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="email" placeholder="enter email id..." name='email' value={formik.values.email} onChange={formik.handleChange} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Description
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name='description' value={formik.values.description}  onChange={formik.handleChange} placeholder="enter Description...." />
              
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Mobile number
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="number" name='contact_no' value={formik.values.contact_no} onChange={formik.handleChange} placeholder="enter mobile number..." />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              specialization
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" placeholder="enter specialization ..." value={formik.values.specialization} onChange={formik.handleChange} name='specialization' />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Close</Button>
        <button form='editlawfirm' type='submit' className=' bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={props.onHide}>Done </button>
      </Modal.Footer>
    </Modal>
  );
}

function EditLawfirm({lawfirmid,setLawfirm}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [lawfirmData,setLawfirmData]=useState('')


 useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(`/lawfirm/editform-lawfirm/${lawfirmid}`);
        
        setLawfirmData(response.data);
      } catch (error) {
       
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, []);


 

  return (
    <>
      <Button className='hadow bg-green-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-1 px-4 rounded border-none' onClick={() => setModalShow(true)}>
        Edit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setLawfirm={setLawfirm}
        lawfirmid={lawfirmid}
        lawfirmData={lawfirmData}


      />
    </>
  );
}

export default EditLawfirm