import "../src/App.css";
import React from 'react';
import data from "./components/Data";
import {useState} from "react";
import Form from "./components/Form"
import Result from "./components/Result";

const App = () => {

  const [index, setIndex] = useState(0);
  const [form, setForm] = useState(data);
  const [isSubmit, setIsSubmit] = useState(false)
  const [formData, setFormData] = useState({name:"", email:"", password:"", date:""})

  const submitHandler = (e) => {
    e.preventDefault();
    if(index === form.length - 1){
      setIsSubmit(true)
    }else{
      setIndex((ind) => ind + 1);
    }
  }

  const changeHandler = (e) => {
    setFormData((prevData)=>({
      ...prevData,
      [e.target.id] : e.target.value,

    })) 
  }

  console.log(formData)

  const backHandler = (e) => {
    e.preventDefault();
    setIndex((ind) => ind - 1);
  }

  return(
    <>
      {
        !isSubmit ? <Form
        submitHandler={submitHandler}
        backHandler={backHandler}
        changeHandler={changeHandler}
        index={index}
        form={form}
        formData={formData}
      /> : <Result formData={formData}/>
      }
    </>
  )
}

export default App;