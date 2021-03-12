import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const ContactForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    Jobtitle: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    company: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        jobtitle: '',
        company: '',
        country:'',
        operating_geography:''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">
Contact us</h1>
          <Form>
            <TextField label="First name*" name="firstName" type="text" />
            <TextField label="Last name" name="lastName" type="text" />
            <TextField label="Email*" name="email" type="email" />
            <TextField label="job title" name="jobtitle" type="text" />
            <TextField label="Company*" name="company" type="text" />
            <TextField label="Industry*" name="industry" value='Banking' />
            <TextField label="Country*" name="country" value='N/A' />
            <TextField label="Operating geography*" name="operating_geography" value='N/A' />
            <TextField label="Operating geography*" name="operating_geography" value='N/A' />
            <TextField label="What would you like to talk about?" name='suman' />
           <div className='Checkbox'> 
          <div className='first-checkbox'> 
          <input type='checkbox' name='termsAccepted'/>
              <span>By submitting this form I accept</span>
              <a href='#' target='_blank'>privacy policy and cookie policy.</a>
              </div>

             <div className='second-checkbox'> 
             <input type='checkbox' name='termsAccepted'/>
              <span>I would like to receive your newsletter.</span>
              </div>
            
              </div> 
            <button className="btn btn-danger mt-3 ml-3" type="reset">Send</button>
          </Form>
          
        </div>
      )}
      
    </Formik>
    
  )
}
