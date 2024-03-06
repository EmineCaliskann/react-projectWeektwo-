import React, { useEffect } from 'react'
import Load from '../assets/img/load.gif'
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/online-6/anasayfa');
        }, 3000);
    }, ); 

    return (
        <div className='loading'>
            <img src={Load} alt="load"/>
        </div>
    );
};

export default LoadingPage;
