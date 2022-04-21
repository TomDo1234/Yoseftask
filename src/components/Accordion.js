import './Accordion.css';
import React from 'react';

export default function Accordion({data,accordiondata}) {

    function openaccordion(id) {
        let elem = document.getElementById(id);
        elem.classList.contains("open") ? elem.classList.remove("open") : elem.classList.add("open");
    }
    const {iconForFeature} = accordiondata;
    return(        
        <div className="Accordion">
            {
                data.map((entry,i)  => {
                    const {wpParent , name ,wpChildren} = entry;
                    if (wpParent === null) {
                        return (     
                            <div key={`accordion-${name}`}>  
                                <div className="item" onClick={() => {openaccordion(`accordion-${name}`)}} aria-hidden>
                                    {name}
                                    <div className="plus"></div>
                                </div>
                                <div className="itemcontent" id={`accordion-${name}`}>
                                    <ul>
                                        {
                                            wpChildren.nodes.map((child) => {

                                                let feature = iconForFeature.find((elem) => elem.feature.name === child.name);
                                                let url = feature.icon.sourceUrl;
                                                console.log(feature);

                                                return (<li>
                                                    <div className='imageholder'>
                                                        <img width="80" height="80" src='http://localhost:8000/wp-content/uploads/2022/04/Create-Contour.png' alt=""/>
                                                    </div>
                                                    <h5>{child.name}</h5>                                     
                                                </li>);
                                            })
                                        }                                        
                                    </ul>
                                    
                                </div>
                            </div> 
                        )
                    }
                    return '';                  
                })
            }
        </div>
    );
}
