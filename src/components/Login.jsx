import {useState} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
import { sleep } from './utils'
import Transition from './Transition'

const Login = ({setStatusText}) => {
    
    const [closeLogin, setCloseLogin] = useState(false);

    const history = useHistory();

    const close = async () => {
        console.log("Closing login");
        setStatusText("Please wait...");
        // trigger close usinf css only.
        setCloseLogin(true);
        await sleep(1800);

    }

    const handleClose = () => {
        console.log("Handling close")

    }
    const onSubmit = async () => {
        console.log("On Submit called");
        // talk to server get JWT and store in Redux or session storage. 
        // On success
        // Use this JWT in the header of subsequent requests
        // close login screen
        await close();
        // load home screen
        
        history.push('/home')

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
                    <div className="credentials">
                        <label>Username</label>
                        <input></input>
                        <label>password</label>
                        <input></input>
                        <input type="submit" onClick={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
