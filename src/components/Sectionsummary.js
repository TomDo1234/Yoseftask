import React from 'react';

export default function Sectionsummary({data}) {
    return (
        <div className= "sectionsummary" style={{backgroundColor : data.color}}> 
                <h3>{data.header}</h3>
                <div className='thetext'>{data.bodyText}</div>          
        </div>   
    );
}