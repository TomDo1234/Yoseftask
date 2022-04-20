import './Gallery.css';
import React from 'react';

export default function Gallery({gallery}) {
    
    return(
        <div className="Gallery">
            {
                    gallery.map(entry => {
                        const {header,bodyText,image} = entry;
                        console.log(header);
                        return (
                            <div className="col">
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
