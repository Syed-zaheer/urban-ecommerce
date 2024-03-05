'use client'
import React from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address1: Yup.string().required('Address 1 is required'),
  address2: Yup.string().required('Address 2 is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.number().typeError('Please enter a number').required('Pincode is required'),
  mobileNumber: Yup.string().required('Mobile number is required'),
  country: Yup.string().required('Country is required'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    mobileNumber: '',
    country: '',
  };

function CheckoutPage() {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log("formik Values ===>",values);
        setSubmitting(false);
        !errors.firstName && alert('Order Placed Congrats')
      };
      const handleBlur = (e) => {
      const { name } = e.target;
//   setFieldTouched(name, true, false); // Mark field as touched without validating
};

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, setFieldTouched, handleChange, values   }) => (
            <Form>
        <div>
            <label className="form-control w-screen">
                <div className='ml-auto mr-auto w-4/5 px-8 py-8'>
                    <h1 className='text-xl font-bold py-4'>Checkout Page</h1>
                    <div className='w-full flex flex-col'>
                        <span className="label-text font-medium">Select the country</span>
                        <select className="select select-bordered w-full">
                            <option disabled selected>India</option>
                            <option>South Africa</option>
                            <option>West Indies</option>
                        </select>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-8 py-4'>
                        <div className='w-full flex flex-col col-span-1'>
                            <span className="label-text font-medium">First Name</span>
                            <input onChange={handleChange} value={values.firstName} name="firstName" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.firstName && touched.firstName && <div className='text-red-500 text-sm mt-1'> {errors.firstName} </div>}
                        </div>
                        <div className='flex flex-col'>
                            <span className="label-text font-medium">Last Name</span>
                            <input onChange={handleChange} value={values.lastName} name="lastName" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.lastName && touched.lastName && <div className='text-red-500 text-sm mt-1'> {errors.lastName} </div>}
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <div >
                            <span className="label-text font-medium">Address 1</span>
                            <input onChange={handleChange} value={values.address1} name="address1" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.address1 && touched.address1 && <div className='text-red-500 text-sm mt-1'> {errors.address1} </div>}
                        </div>
                        <div>
                            <span className="label-text font-medium">Address 2</span>
                            <input onChange={handleChange} value={values.address2} name="address2" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.address2 && touched.address2 && <div className='text-red-500 text-sm mt-1'> {errors.address2} </div>}
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-3 gap-8 py-4'>
                        <div className='flex flex-col'>
                            <span className="label-text font-medium">City</span>
                            <input onChange={handleChange} value={values.city} name="city" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.city && touched.city && <div className='text-red-500 text-sm mt-1'> {errors.city} </div>}
                        </div>
                        <div className='flex flex-col'>
                            <span className="label-text font-medium">State</span>
                            <input onChange={handleChange} value={values.state} name="state" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.state && touched.state && <div className='text-red-500 text-sm mt-1'> {errors.state} </div>}
                        </div>
                        <div className='flex flex-col'>
                            <span className="label-text font-medium">Pin Code</span>
                            <input onChange={handleChange} value={values.pincode} name="pincode" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.pincode && touched.pincode && <div className='text-red-500 text-sm mt-1'> {errors.pincode} </div>}
                        </div>
                    </div>
                    <div className='w-full'>
                        <span className="label-text font-medium">Mobile Number</span>
                        <input onChange={handleChange} value={values.mobileNumber} name="mobileNumber" type="text" placeholder="Type here" className="input input-bordered w-full" onBlur={e => handleBlur(e)} />
                            {errors.mobileNumber && touched.mobileNumber && <div className='text-red-500 text-sm mt-1'> {errors.mobileNumber} </div>}
                    </div>
                    <div className='flex justify-center mt-8 gap-4'>
                    <Link className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded' href={'/'}>Cancel</Link>
                    <button className='btn btn-primary' type='submit'>Buy Now</button>
                    </div>
                </div>
            </label>
        </div>
        </Form>
        )}
        </Formik>
    )
}

export default CheckoutPage