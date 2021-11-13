import React from 'react';
import picture from '../../images/pagenotfound.jpg';
const PagenotFound = () => {
    return (
        <div className=' text-center'>
            <img src={picture} width='60%' height='500' alt='Page Not Found'/>
        </div>
    );
};

export default PagenotFound;