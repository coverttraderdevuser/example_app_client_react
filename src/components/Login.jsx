import React from 'react'
import {useState} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
import { sleep } from './utils'
import Transition from './Transition'

const Login = ({setStatusText}) => {
    
    const [closeLogin, setCloseLogin] = useState(false);
    const [displayFailedMessage, setDisplayFailedMessage] = useState('none');

    const history = useHistory();

    const usernameRef = React.useRef();
    const passwordRef = React.useRef();

    /**
     * close()
     * This is called when the login screen closes. Triggers a close animation sequence.
     */
    const close = async () => {
        console.log("Closing login");
        setStatusText("Please wait...");
        // trigger close using css only.
        setCloseLogin(true);
        await sleep(1800); // Wait for transition to complete

    }

    /*
    * handleClose() 
    * Any pre-close actions can go here.
    */
    const handleClose = () => {
        console.log("Handling close")

    }
    /** 
     * onSubmit()
     * 
     */

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("On Submit called");
        console.log("usernameRef=", usernameRef);
        console.log("passwordRef=", passwordRef);

        console.log("usernameRef.current.value=", usernameRef.current.value);
        console.log("passwordRef.current.value=", passwordRef.current.value);

        if (usernameRef.current.value === "personFailure" && passwordRef.current.value === "password2") {
            setDisplayFailedMessage('block')
        } else {
            /// successfule login
            await close();
            // load home screen
            
            history.push('/home')
        }
        // Talk to server get JWT and store in Redux or session storage. 
        // On success
        // Use this JWT in the header of subsequent requests
        // close login screen
        //requestLogin();


        //
        // On Fail 
        // inidiate fail on login components (Red border)

    };

    return (
        <div className="login">
            
            {/* <div className="curtains"></div> */}
            <input id="close-toggler" type="checkbox" className="close-toggler" checked={closeLogin} onChange={handleClose} />
            <Transition run={closeLogin}/>
            <div className="container">
                <div className="body">
                    <div className = "logo">Logo</div>
                    <div className="divider"><div className="line"></div></div>
                    <form className="credentials" action="/login">
                        <label>Username</label>
                        <input className="username" ref={node => usernameRef.current = node} ></input>
                        <label>Password</label>
                        <input id="password" className="password" type="password" ref={node => passwordRef.current = node}></input>
                        <input id="submit" type="submit" className="submit" onClick={onSubmit}/>
                        <label className="login-failed-message" style={{display:displayFailedMessage}}>Login Failed!</label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
