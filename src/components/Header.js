import React from 'react';

export default function Header() {
    return(
        <header className='theheader'>
            <div className= "thelogo"></div>
            <div className= "headercontainer">
                <div className= "headerlink">Products&nbsp;&nbsp;<img className= "downarrow" alt=""/></div>                
                <div className= "headerlink">Industries&nbsp;&nbsp;<img className= "downarrow" alt=""/></div>                
                <div className= "headerlink">Pricing</div>
                <div className= "headerlink">About</div>
                <div className= "headerlink">Downloads</div>
                <div className= "headerlink">Dealers</div>
                <div className= "headerlink">Support</div>
                <div className= "headerlink">Contact</div>
            </div>  
            <div className= "theshoppingbag"></div>          
        </header>
    );
}

