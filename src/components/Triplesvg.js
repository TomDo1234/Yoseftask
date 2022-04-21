import React from 'react';

export default function Triplesvg({data}) {
    
    return(
        <div className="Triplesvg">
            {
                data.map((entry,i) => {
                    const {image,bodyText} = entry;
                    return (
                        <div className="col" key={i}>
                            <div className="img" style ={{backgroundImage : `url(${image.sourceUrl})`}}></div>
                            {bodyText}
                        </div>
                    );
                })
                    
            }
        </div>
    );
}
