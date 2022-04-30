import React from 'react';

interface Props {
    color : string,
    header : string,
    bodyText : string
}

export default function Sectionsummary({data} : {data : Props}) {
    return (
        <div className= "sectionsummary" style={{backgroundColor : data.color}}> 
                <h3>{data.header}</h3>
                <div className='thetext'>{data.bodyText}</div>          
        </div>   
    );
}