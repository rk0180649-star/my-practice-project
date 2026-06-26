import React from 'react';
import './Tags.css';

const Tags =(props) =>{
    return(
            <p className='tagsdiv'>{props.tags}</p>
    );
}

export default Tags;