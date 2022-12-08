import LoginCard from "../UI/loginCard"
import Login from "./Login"
import SignUp from "./signUp"
import { useState } from "react"
import { Fragment } from "react"
import './login.css'
const Auth = (props) => {
    const [signUp, setSignUp] = useState(false)
    const signUphandler = () => {
        setSignUp(true)
    }
    const loginHandler = () => {
        setSignUp(false)
    }

    const confirmAuth = (name) => {
        props.onConfirmUser(name)
    }

    return (
        <Fragment>
            <div className="authContainer">
                <LoginCard>
                    {!signUp ? <Login onSignUp={signUphandler} confirmAuth={confirmAuth} /> : <SignUp login={loginHandler} />}
                </LoginCard>
            </div>
        </Fragment>
    )
}
export default Auth