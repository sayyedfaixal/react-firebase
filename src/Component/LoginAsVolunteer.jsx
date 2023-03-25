import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import fireDb from "../firebaseConfig"
// import Quote from './Quote';
import NavbarComponent from './NavbarComponent';
import { Container } from 'react-bootstrap';
import LoginAsVolunteerCss from "./LoginAVolunteer.module.css"

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

  const goBack =()=>{
    history("/")
  }

  // Validating and Storing the data into the firebaseDb
  const addData = (e) => {
    e.preventDefault();
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
         toast.error('Day field is requred',{
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
      <NavbarComponent />

    <h3 className='ml-5 mt-2'>You are applying as a volunteer @Teach For India</h3>
    <div className='ml-1 mb-5'>
    <Form className='ml-5'>
      <Form.Group className="mt-3 mb-3 col-lg-4" controlId="formBasicName">
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

        <Form.Group className="mb-3 col-lg-4" controlId="formBasicDay">
          <Form.Label>Enter Day(s)</Form.Label>
          <Form.Control  type="text" name="date" onChange={getData} placeholder="Eg: Saturday, Sunday" />
          <Form.Text className="text-muted">
          Which days of the week you are available to support the class
        </Form.Text>
        </Form.Group>

        <Button variant="outline-success" className='col-lg-2 col-sm-2 col-md-2 mr-2' onClick={addData} type="submit">
            Submit
        </Button>

        <Button variant="outline-danger" className='col-lg-2 col-sm-2 col-md-2 ml-2' onClick={goBack} type="submit">
            Cancel
        </Button>
      </Form>
      </div>

        <Container className={LoginAsVolunteerCss.rightCOntainer}>
          <div className='ratio ratio-16x9'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mSHYQ3PIwAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Container>
        {/* <div className={LoginAsVolunteerCss.rightCOntainer} >
         <Quote quote="Volunteer with us" quoteTitle="Volunteering with Teach For India allows you to work directly with Students while gaining a meaningful experience. It gives you the opportunity to learn more about yourself, others in your community, and the impact of education on our country. Volunteers make a minimum commitment of 50 hours and support a Fellow in a classroom." />
        </div> */}
      </>

  );
}

export default LoginAsVolunteer