import './login.css';
import { Fragment } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setpassword(event.target.value)
    }
    const NameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if(!email.length||!password.length||!name.length||!lastName.length){
            alert("Please fill all the fields")
            return
        }
        axios.post('https://ordersend.onrender.com/signUp', { Name: name + " " + lastName, email: email, password: password })
            .then((res) => console.log(res.data))
        props.login()
    }
    return (

        <Fragment>
            <FontAwesomeIcon icon={faArrowLeft} onClick={props.login} style={{cursor:"pointer"}}/>
            <h1 style={{ textAlign: "center",fontWeight:"bold",fontSize:"1.5rem" }}>sign up Form</h1>
            <form onSubmit={submitHandler} id="form">
                <div className="formItem">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first name" onChange={NameChangeHandler} />
                </div>
                <div className="formItem" >
                    <label>last Name</label>
                    <input type="text" placeholder="Enter last name" onChange={lastNameChangeHandler} />
                </div>
                <div className="formItem" >
                    <label>email</label>
                    <input type="email" placeholder="Enter email" onChange={emailChangeHandler} />
                </div>
                <div className="formItem">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" onChange={passwordChangeHandler} />
                </div>
                <button id="AuthBtn" type="submit">
                    Sign Up
                </button>
            </form>
        </Fragment>
    )
}
export default SignUp;
