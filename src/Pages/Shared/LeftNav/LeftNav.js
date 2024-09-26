// @flow strict
 
import * as React from 'react';
import './LeftNav.css';
import { Link } from 'react-router-dom';
 
function LeftNav() {

    const [ApiDatas, setApiDatas] = React.useState([]);

    React.useEffect( () =>{
        fetch('http://localhost:4000/apiData')
        .then(res => res.json())
        .then(data => setApiDatas(data))
    } ,[])

    return (
        <div id='LeftNav'>   
            <div>
                {
                    ApiDatas.map(ApiData =>  
                    <p id='hoverAdd'>
                        <Link className={ApiData.class} to={ApiData.url}>
                            {ApiData.name} 
                        </Link> 
                    </p>)
                } 
            </div>
        </div>
    ); 
};

export default LeftNav;