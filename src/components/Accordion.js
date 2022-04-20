import './Accordion.css';
import React from 'react';

export default function Accordion({data}) {
    return(        
        <div className="Accordion">
            {
                data.map((entry,i)  => {
                    const {wpParent , name ,wpChildren} = entry;
                    if (wpParent === null) {
                        console.log(123);
                        return (     
                            <>  
                            <div className="item">
                                {name}
                                <div className="plus"></div>
                            </div>
                            <div className="itemcontent">
                                {name}
                            </div>
                            </> 
                        )
                    }
                    return '';                  
                })
            }
        </div>
    );
}
