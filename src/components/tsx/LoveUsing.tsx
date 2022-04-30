import React from 'react';

interface Props {
    heading : string,
    subheading : string,
    bodyText : string
}

export default function LoveUsing({data} : {data : Props}) {
    return(
        <div className='loveusing'>
            <div className="left">
                <h3>{data.heading}</h3>
                <div>
                    <div className="feedback">
                        {data.subheading}
                    </div>
                    <div className="writeareview"></div>
                </div>
            </div>
            <div className="message">
                {data.bodyText}
            </div>
        </div>
    );
}

