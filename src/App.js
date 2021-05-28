import {useState} from 'react'
import './App.css';
// import Splash from './components/splash'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Status from './components/Status'


function App() {
const [statusText, setStatusText] = useState("");

  return (
    <div className="App">
      <Status text={statusText}/>
      <Router>
        <Route path={['/', '/login']} exact render = { () => (
          <>
          {<Login setStatusText={setStatusText}/>}
          </>
        )
          
        } 
        />

      <Route path={'/home'} exact render = { () => (
          <>
          
          <Home/>
          </>
        )
          
        } 
        />

      </Router>
      {/* <Splash/> */}
      
    </div>
  );
}

export default App;
