import './Accordion.css';
import React from 'react';

export default function Accordion({data}) {
    return(        
        <div className="Accordion">
            {
                data.map((entry,i)  => {
                    const {wpParent , name} = entry;
                    if (wpParent.node.length === 0) {
                        console.log(123);
                        return (        
                            <div className="item">
                                {name}
                                <div className="plus"></div>
                            </div>
                        )
                    }
                    return '';                  
                })
            }
        </div>
    );
}
