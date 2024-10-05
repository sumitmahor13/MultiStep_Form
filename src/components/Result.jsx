import React from 'react'
import "../App.css";

const Result = ({formData}) => {
    
  return (
    <>
        <h1>Form Submitted !</h1>
        <div className='resultBox'>
            <div>Name: {formData.name}</div>
            <div>Email: {formData.email}</div>
            <div>Password: {formData.password}</div>
            <div>Date: {formData.date}</div>

        </div>
        
    </>
  )
}

export default Result