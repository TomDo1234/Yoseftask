import React from 'react';

export default function Featuretable({data}) {
    return(
        <div className = "Featuretable">
                        <div className="row">
                            <div className = "colheading">
                                <div></div>
                            </div>
                            <div className = "colheading">
                                <div className='vcut'></div>
                            </div>
                            <div className = "colheading">
                                <div className='vltr'></div>
                            </div>
                            <div className = "colheading">
                                <div className='vpro'></div>
                            </div>
                            <div className = "colheading">
                                <div className='vdsr'></div>
                            </div>
                            <div className = "colheading">
                                <div className='vxpt'></div>
                            </div>                            
                        </div>
            {
                data.info.map((entry,i) => {
                    const {infoLabel,cut,dsr,xpt,pro,ltr} = entry;
                    return (
                        <div className="row" key={i}>
                            <div className = "col">
                                <div dangerouslySetInnerHTML={{__html : infoLabel}}></div>
                            </div> 
                            <div className = "col">
                                <div dangerouslySetInnerHTML={{__html : cut}}></div>
                            </div> 
                            <div className = "col">
                                <div dangerouslySetInnerHTML={{__html : ltr}}></div>
                            </div> 
                            <div className = "col">
                                <div dangerouslySetInnerHTML={{__html : pro}}></div>
                            </div> 
                            <div className = "col">
                                <div dangerouslySetInnerHTML={{__html : dsr}}></div>
                            </div> 
                            <div className = "col">
                                <div dangerouslySetInnerHTML={{__html : xpt}}></div>
                            </div>                       
                        </div>
                    );
                })
                    
            }
            <div style = {{display : "flex"}}>
                <div className="platforms-heading">Computer Platforms</div>
                <div className="platforms-content">{data.computerPlatform}</div>
            </div>
        </div>
    );
}
