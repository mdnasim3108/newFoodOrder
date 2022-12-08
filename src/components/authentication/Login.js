import { Fragment, useState } from "react"
import './login.css'
import axios from "axios"
const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setpassword(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if(!email.length||!password.length){
            alert("Please enter the mandatory fields")
            return
        }
        axios.post("https://ordersserver-production.up.railway.app/login", { email: email, password: password })
            .then((res) => {
                if (res.data.email === email) {
                    props.confirmAuth(res.data.Name)
                }
                else {
                    alert(res.data)
                }
            })
    }
    return (
        <Fragment>
            <h1 style={{ textAlign: "center",fontWeight:"bold",fontSize:"larger" }}>Login Form</h1>
            <form onSubmit={submitHandler} id="form">
                <div className="formItem">
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" onChange={emailChangeHandler} />
                </div>
                <div className="formItem" >
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" onChange={passwordChangeHandler} />
                </div>
                <div className="action">
                    <button id="AuthBtn" type="submit">
                        Login
                    </button>
                </div>
            </form>
            <div class="footer">
                <span>Didn't have an account?<span id="signUp" onClick={props.onSignUp}>Sign up</span></span>
            </div>
        </Fragment>
    )
}
export default Login