import * as Yup from 'yup'

export const CourtSchema = Yup.object().shape({
    name: Yup.string()
        .required('Court name is required')
        .min(2, 'Court name must be at least 2 characters')
        .max(50, 'Court name cannot exceed 50 characters')
        .matches(/^[A-Za-z\s]+$/, 'Invalid Name'),

    type: Yup.string()
        .required('Court type is required')
        .matches(/^[A-Za-z\s]+$/, 'Invalid court type'),

        estd_date: Yup.date()
        .required('Date is required')
        
        ,
      

    address: Yup.string().required('Address is required'),
    contact_no: Yup.string()
        .required('Number is required')
        .matches(/^\d{10}$/, 'Invalid phone number (10 digits)'),

    description: Yup.string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters')
        .max(200, 'Description cannot exceed 200 characters'),



})

export const Registrar = Yup.object().shape({

  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  phone:Yup.string()
  .required('Number is required')
  .matches(/^\d{10}$/, 'Invalid phone number (10 digits)') 
});

