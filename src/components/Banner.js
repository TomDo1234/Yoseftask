import React from "react";

export default function Banner({data}) {
	const { image , heading , subheading } = data;
 
	return (
        <div className="Banner" style = {{backgroundImage: `url(${image.sourceUrl})`}}>  
                <div className="container">
                    <h2>{heading}</h2>
                    <h3>{subheading}</h3>
                    <div className="firstrow">
                        <div className="roundbutton">Buy Now</div><div className="roundbutton">Upgrade To V5</div>
                    </div>
                    <br/>
                    <div className="roundbutton download">Download FREE Demo</div>
                </div>                  
            </div>
	);
}