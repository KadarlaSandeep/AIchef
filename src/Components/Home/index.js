import { Link } from 'react-router-dom';

import './index.css';
const Home = () =>(
    <Link to='/home'>
    <div className='bg-container'>
        <div className='container'>
        <h1 className="heading">WELCOME TO AI CHEF MASTER</h1>
        <img  className="image"src='https://img.freepik.com/premium-photo/yakitori-japanese-grilled-skewer-restaurant-with-counter-bar-around-grill-kitchen-area-mostly-decorated-with-oak-wood-texture_43263-2277.jpg' alt=''/> 
     </div>
    </div>

    </Link>
)
export default Home