import React from 'react';
import './Header.css';

export default function Header() {
    return(
        <header className='theheader'>
            <div class = "thelogo"></div>
            <div class = "headercontainer">
                <div class = "headerlink">Products</div>
                <div class = "headerlink">Industries</div>
                <div class = "headerlink">Pricing</div>
                <div class = "headerlink">About</div>
                <div class = "headerlink">Downloads</div>
                <div class = "headerlink">Dealers</div>
                <div class = "headerlink">Support</div>
                <div class = "headerlink">Contact</div>
            </div>            
        </header>
    );
}

