import React from 'react';

export default function Static1({data}) {
    return(
        <div className='static1'>
            <div className="colhalf">
                <div>{data.upgradeText}</div>
                <div className="roundbutton">Upgrade</div>
            </div>
            <div className="colhalf">
                <div>{data.downloadText}</div>
                <div className="roundbutton">Download FREE Demo</div>
            </div>
        </div>
    );
}

