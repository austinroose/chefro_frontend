import React from 'react';
import { Link} from 'react-router-dom';

const MainLogo = (props: any) => { // replace wiht logo afterwards
    return (
        <div>
            <Link to="/" style={{textDecoration:"none", color:"black"}}><h1 style={{fontSize:"30px", margin: 0, paddingLeft:"10px"}}>Chefro</h1></Link>
        </div>
    )
}

export default MainLogo;