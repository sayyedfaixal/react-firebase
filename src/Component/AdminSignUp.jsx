import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignInImage from './SignInImage'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {

        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error('Name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('Email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.warn('Please enter valid email addres',{
                position: "top-center",
            });
        }else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('Password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("Data added succesfully");
            history("/adminLogin")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="outline-info" className='col-lg-6' onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/adminLogin">SignIn</NavLink></span> </p>
                    </div>
                    <SignInImage />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default SignUp