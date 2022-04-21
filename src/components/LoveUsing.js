import React from 'react';

export default function LoveUsing({data}) {
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

