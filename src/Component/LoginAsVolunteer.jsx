import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import fireDb from "../firebaseConfig"



const LoginAsVolunteer = () => {
  const [inputVal, setInputVal] = useState({
  name: '',
  email: '',
  loc : '',
  language : '',
  date: '',
  subject : ''
  })

  const history = useNavigate();
  // Storing the input value of the form into the state
  const getData = (e)=>{
    const { value, name } = e.target;
    setInputVal(() => {
      return {
          ...inputVal,
          [name]: value
      }
  })
  }

  // Validating and Storing the data into the firebaseDb
  const addData = (e) => {
    e.preventDefault();
    // debugger;
    const { name, email, loc, language, date, subject } = inputVal;

    if (name === "") {
        toast.error('Name field is requred!',{
            position: "top-center",
        });
    } else if (email === "") {
         toast.error('Email field is requred',{
            position: "top-center",
        });
    } else if (!email.includes("@")) {
         toast.error('Please enter valid email addres',{
            position: "top-center",
        });
    }
    else if (loc === "") {
      toast.error('Location field is requred',{
         position: "top-center",
     });
    }
    else if (language === "") {
      toast.error('Language field is requred',{
         position: "top-center",
     });
    }
    else if(subject === ""){
      toast.error("Subject field is required", {
        position: "top-center"
  })
  }else if (date === "") {
         toast.error('Date field is requred',{
            position: "top-center",
        });
    }
    else {
        console.log("data added succesfully");
        fireDb.child("volunteerContact").push(inputVal, (err)=>{
          if(err){
            toast.error(err);
          }else{
            toast.success("Data Added successfully.")
          }
        })
        setTimeout(() => {
          history("/");
        }, 1000);
    }

}
  return (
    <>
    <h3 className='mt-5 ml-5'>You are applying as a volunteer @Teach For India</h3>
    <div className='left-data ml-1'>
    <Form className='ml-5'>

      <Form.Group className="mt-5 mb-3 col-lg-4" controlId="formBasicName">
          <Form.Label>Enter your Name</Form.Label>
        <Form.Control  type="text" name='name' onChange={getData} placeholder="Eg: John Smith" />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
          <Form.Label>Enter your Email</Form.Label>
          <Form.Control  type="email" name='email' onChange={getData} placeholder="Eg: example@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-4" controlId="formBasicLocation">
          <Form.Label>Enter your Location</Form.Label>
          <Form.Control  type="text" name='loc' onChange={getData} placeholder="Eg: Mumbai" />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-4" controlId="formBasicLanguage">
          <Form.Label>Language Spoken</Form.Label>
          <Form.Control  type="text" name='language' onChange={getData} placeholder="Eg: English, Hindi, Marathi " />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-4" controlId="formBasicLanguage">
          <Form.Label>Subject</Form.Label>
          <Form.Control  type="text" name='subject' onChange={getData} placeholder="Eg: Maths, Science " />
          <Form.Text className="text-muted">
          Which Subject are you intereseted to teach?
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-lg-4" controlId="formBasicDate">
          <Form.Label>Select Date</Form.Label>
          <Form.Control  type="date" name="date"  onChange={getData} />
          <Form.Text className="text-muted">
          Which days of the week you are available to support the class
        </Form.Text>
        </Form.Group>

        <Button variant="primary" className='col-lg-4'style={{ background: "#809fff" }} onClick={addData} type="submit">
            Submit
        </Button>
      </Form>
      </div>

      <div className='right-data'>

      </div>
      </>
  );
}

export default LoginAsVolunteer