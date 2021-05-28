import {useState, useEffect} from 'react'
import './Home.css'
import Menu from './Menu'

const Home = () => {
    const [openHome, setOpenHome] = useState(false);

    const handleOpen = () => {
        console.log("Handling open");

    }

    useEffect( () => {
       // opening - It's controlled here so that caching can be performed
       // before the page loads
        setOpenHome(true);

    }, [])

    return (
        <div className="home">
            <input id="open-toggler" type="checkbox" className="open-toggler" checked={openHome} onChange={handleOpen} />
            <div className="container">
                <Menu></Menu>
            </div>
        </div>
    )
}

export default Home
