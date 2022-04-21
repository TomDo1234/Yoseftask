import React from 'react';

export default function Gallery({gallery}) {
    
    return(
        <div className="Gallery">
            {
                    gallery.map((entry,i)  => {
                        const {header,bodyText,image} = entry;
                        return (
                            <div className="col" key = {i}>
                                <div style={{backgroundImage : `url(${image.sourceUrl})`}}></div>
                                <h3>{header}</h3>
                                {bodyText}
                            </div>
                        )
                        }
                    )
            }            
        </div>
    );
}
