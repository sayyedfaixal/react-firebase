import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignIn from './SignInImage'
import { useNavigate, NavLink } from 'react-router-dom'
import  {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quote from './Quote'
import NavbarComponent from './NavbarComponent'


const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const goBack =()=>{
        history("/")
    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        // console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('Email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password length should be greater than five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    toast.error('Invalid User details', {
                        position: "top-center",
                    });
                } else {
                    // console.log("user login succesfulyy");
                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    history("/admin")
                }
            }
        }

    }

    return (
        <>

      <NavbarComponent />

            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign in as Admin</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="outline-success" className='col-md-6' onClick={addData} type="submit">
                                Submit
                            </Button>
                            <br />
                            <br />
                            <Button variant="outline-danger" className='col-md-6' onClick={goBack} type="submit">
                                Cancel
                            </Button>
                        </Form>
                        <p className='mt-3'>Don't have an Admin Account? <span><NavLink to="/adminSignup">Sign Up</NavLink></span> </p>
                    </div>
                    <SignIn />
                </section>
            </div>

            <Quote quote="Come as a teacher, Leave as a leader." quoteTitle="The Teach For India Fellowship is a teaching programme that  connects far-reaching social change with with invaluable personal development." />
        </>
    )
}

export default Login