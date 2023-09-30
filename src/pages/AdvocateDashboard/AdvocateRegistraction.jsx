import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../configs/axios/AxiosVonfiguration';
import { AdvocateRegisterSchema } from '../../schema/advocate/AdvocateSchema';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdvocateRegistration() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date_of_birth: '',
            enrollment_id: '',
            specialization: '',
            address: '',
            profile_image: '',
            password: '',
            phone: '',
            confirm_password: ''
        },
        validationSchema: AdvocateRegisterSchema,
        onSubmit: async (values, { resetForm }) => {
            const formData = new FormData();

            for (const key in values) {
                formData.append(key, values[key]);
            }

            try {
                const response = await axiosInstance.post('/advocates/create-advocate', formData);
                if (response.data) {
                    console.log("response data", response.data);
                } else {
                    console.log('no data found');
                }
                resetForm();
                navigate('/login');
            } catch (error) {
                console.error("Error while submitting form", error);
            }
        }
    });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <ToastContainer />
            <MDBCard style={{ width: '600px' }}>
                <MDBCardBody className='px-4'>
                    <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
                    <form id='register-adv' onSubmit={formik.handleSubmit} enctype="multipart/form-data">

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='name'
                                    type='text' 
                                    name='name' 
                                    value={formik.values.name} 
                                    onChange={formik.handleChange} 
                                    placeholder='Enter name...'
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='email'
                                    type='email' 
                                    name='email' 
                                    value={formik.values.email} 
                                    onChange={formik.handleChange} 
                                    placeholder='Enter email...'
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='date_of_birth'
                                    type='date' 
                                    name='date_of_birth' 
                                    value={formik.values.date_of_birth} 
                                    onChange={formik.handleChange}
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='enrollment_id'
                                    type='text' 
                                    name='enrollment_id' 
                                    value={formik.values.enrollment_id} 
                                    onChange={formik.handleChange} 
                                    placeholder='Enrollment ID...'
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='specialization'
                                    type='text' 
                                    name='specialization' 
                                    value={formik.values.specialization} 
                                    onChange={formik.handleChange} 
                                    placeholder='Specialization...'
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='address'
                                    type='text' 
                                    name='address' 
                                    value={formik.values.address} 
                                    onChange={formik.handleChange} 
                                    placeholder='Address...'
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4'
                                    size='lg' 
                                    id='profile_image'
                                    type='file' 
                                    name='profile_image' 
                                    onChange={(event) => {
                                        formik.setFieldValue('profile_image', event.currentTarget.files[0]);
                                    }} 
                                />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='phone'
                                    type='tel' 
                                    name='phone' 
                                    value={formik.values.phone} 
                                    onChange={formik.handleChange} 
                                    placeholder='Phone Number...'
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='password'
                                    type='password' 
                                    name='password' 
                                    value={formik.values.password} 
                                    onChange={formik.handleChange} 
                                    placeholder='Password...'
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <p style={{color:'red'}}>{formik.errors.password}</p>
                                ) : null}
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    size='lg' 
                                    id='confirm_password'
                                    type='password' 
                                    name='confirm_password' 
                                    value={formik.values.confirm_password} 
                                    onChange={formik.handleChange} 
                                    placeholder='Confirm Password...'
                                />
                                {formik.touched.confirm_password && formik.errors.confirm_password ? (
                                    <p style={{color:'red'}}>{formik.errors.confirm_password}</p>
                                ) : null}
                            </MDBCol>
                        </MDBRow>

                        <button 
                            form='register-adv' 
                            className='bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' 
                            type='submit'
                        >
                            Submit
                        </button>

                    </form>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default AdvocateRegistration;







// import React from 'react';
// import {

//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBRadio
// } from 'mdb-react-ui-kit';

// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../configs/axios/AxiosVonfiguration';

// function App() {

//     const navigate=useNavigate()

//     const formik=useFormik({
//         initialValues:{
//             name:'',
//             email:'',
//             date_of_birth:'',
//             enrollment_id:'',
//             specialization:'',
//             address:'',
//             // profile_image:'',
//             // document_image:'',
//             password:'',
//             phone:''
//         },
//         onSubmit:async(values,{resetForm})=>{
//             try {
//                 const response = await axiosInstance.post('/advocates/create-advocate',values);
//                 if(response.data){
//                     console.log("response data",response.data);
//                 }else{
//                     console.log('no data found');
//                 }
//                 resetForm()
//                 navigate('/login')
//             } catch (error) {
                
//             }
//         }
//     })


    
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <MDBCard style={{ width: '600px' }}>
//         <MDBCardBody className='px-4'>

//           <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
//           <form id='register-adv' onSubmit={formik.handleSubmit}>
//           <MDBRow>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4'  size='lg' id='form1' type='text' name='name' value={formik.values.name}onChange={formik.handleChange} placeholder='enter name...'  />
//             </MDBCol>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4' size='lg' id='form2' type='text' name='email' value={formik.values.email} onChange={formik.handleChange} placeholder='enter email...'/>
//             </MDBCol>
//           </MDBRow>
//           <MDBRow>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4'  size='lg' id='form1' name='date_of_birth' value={formik.values.date_of_birth} onChange={formik.handleChange} type='date' />
//             </MDBCol>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4' size='lg' id='form2'  type='text' name='enrollment_id' value={formik.values.enrollment_id} onChange={formik.handleChange} placeholder='enter enrollment_id...' />
//             </MDBCol>
//           </MDBRow>
//           <MDBRow>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4'  size='lg' id='form1' type='text' name='specialization' value={formik.values.specialization} onChange={formik.handleChange} placeholder='enter speciallization...' />
//             </MDBCol>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4' size='lg' id='form2' type='text' name='address' value={formik.values.address} onChange={formik.handleChange} placeholder='enter address... ' />
//             </MDBCol>
//           </MDBRow>
//           <MDBRow>
//             <MDBCol md='6'>
//               {/* <MDBInput wrapperClass='mb-4'  size='lg' id='form1' type='file' value={formik.values.profile_image}  onChange={formik.handleChange} name='profile_image' /> */}
//             </MDBCol>
//             <MDBCol md='6'>
//               {/* <MDBInput wrapperClass='mb-4' size='lg' id='form2' type='file' name='document_image' value={formik.values.document_image}  onChange={formik.handleChange}/> */}
//             </MDBCol>
//           </MDBRow>
//           <MDBRow>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='password' name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='enter password'/>
//             </MDBCol>
//             <MDBCol md='6'>
//               <MDBInput wrapperClass='mb-4' size='lg' id='form2' type='text' name='phone' value={formik.values.phone} onChange={formik.handleChange} placeholder='enter phone...'/>
//             </MDBCol>
//           </MDBRow>

//           {/* Add more form fields here... */}

//           {/* <MDBBtn className='mb-4' size='lg' block>
//             Submit
//           </MDBBtn> */}
//           <button form='register-adv' className='bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='submit'> submit</button>

//           </form>

//         </MDBCardBody>
//       </MDBCard>
//     </div>
//   );
// }

// export default App;
