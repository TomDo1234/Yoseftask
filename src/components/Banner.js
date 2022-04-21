import React from "react";

export default function Banner({data}) {
	return (
        <div style={{backgroundImage : `url(${data.image.sourceUrl})`}} className="Banner">  
                <div className="container">
                    <h2>{data.heading}</h2>
                    <h3>{data.subheading}</h3>
                    <div className="firstrow">
                        <div className="roundbutton">Buy Now</div><div className="roundbutton">Upgrade To V5</div>
                    </div>
                    <br/>
                    <div className="roundbutton download">Download FREE Demo</div>
                </div>                  
            </div>
	);
}