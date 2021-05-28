
import './Transition.css'
import {useState, useEffect} from 'react'

const Transition = ({run}) => {
    const [start, setStart] = useState(false);
 
    const handleStart = () =>{}

    useEffect( () => {
        setStart(run);
    }, [run]) 

    return (

        <div className="transition">
            <input id="start-toggler" type="checkbox" className="start-toggler" checked={start} onChange={handleStart} />
                <div className="container">
                    <div className="space"></div>       
                    <div className="stripe"></div> 
                    <div className="space"></div>
                    <div className="stripe"></div> 
                    <div className="space"></div>       
                    <div className="stripe"></div> 
                    <div className="space"></div>
                    <div className="stripe"></div> 
                    <div className="space"></div>
               </div> 
               <div className="container2">
                    <div className="stripe"></div> 
                    <div className="space"></div>
                    <div className="stripe"></div> 
                    <div className="space"></div>       
                    <div className="stripe"></div> 
               </div>        
        </div>
    )
}

export default Transition
