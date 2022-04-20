import './Footer.css';
import React from 'react';

export default function Footer() {
    return(
        <div className='thefooter'>
            <div className = "row">
                <div className = "col">
                    <div className="headcol">SHOP FOR</div>
                    <div className="selectedprod">VinylMaster CUT</div>
                    <div>VinylMaster LTR</div>
                    <div>VinylMaster DSR</div>
                    <div>VinylMaster PRO</div>
                    <div>VinylMaster XPT</div>
                    <div>View Price List</div>
                </div>
                <div className= "col">
                    <div className="headcol">SHOP BY INDUSTRY</div>
                    <div>Craft &amp; Hobby</div>
                    <div>Box, Card &amp; Paper</div>
                    <div>T-Shirts and Caps</div>
                    <div>Labels, Decals &amp; Stickers</div>
                    <div>Vinyl Lettering</div>
                    <div>Print Shops</div>
                    <div>Sign Shops</div>
                    <div>Production</div>
                    <div>Government</div>
                    <div>Education</div>
                </div>
                <div className= "col">
                    <div className="headcol">SUPPORT</div>
                    <div>Help &amp; Support Centre</div>
                    <div>Lodge a Ticket</div>
                </div>
                <div className= "col">
                    <div className="headcol">FOR EDUCATION</div>
                    <div>Discount for Student and <br/> Teachers</div><br/>
                    <div>Schools and Universities</div>
                    <div>Free Offer for the Art of Graphic <br/> Design <br/> and Related Subjects</div><br/><br/>
                    <br/>
                    <div className="headcol">FOR BUSINESS</div>
                    <div>VinylMaster for Dealers &amp; <br/> Resellers</div><br/>
                    <div>OEM &amp; CustomWare</div>
                    <div>Corporate Inquiries</div>
                </div>
                <div className= "col">
                    <div className="headcol">VINYLMASTER ACCOUNT</div>
                    <div>Login to Customer Portal</div>
                    <div>Update Software</div>
                    <br/>
                    <div className="headcol">VINYLMASTER</div>
                    <div>Download &amp; Install</div>
                    <div>Contact Us</div>
                    <div>About Us</div>
                    <div>Dealers &amp; Resellers</div>
                    <div>Supported Cutters</div>
                </div>
            </div>
            <div className="bottomwrapper">
                <div className="ourrecommendations">
                    <h2>Our Recommendations</h2>
                    <div className="bottomrow">
                        <div className="recom">
                            <div className="blueicon"></div>
                            <span>&nbsp;&nbsp;VinylMaster PRO</span>
                        </div>
                        <div className="recom">
                            <div className="greenicon"></div>
                            <span>&nbsp;&nbsp;VinylMaster DSR</span>
                        </div>
                        <div className="recom">
                            <div className="orangeicon"></div>
                            <span>&nbsp;&nbsp;VinylMaster XPT</span>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="verybottomwrapper">
                © 1988-2022 a Future Corporation Pty Ltd. &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;
                Privacy Policy&nbsp;&nbsp;/
                Terms of Use&nbsp;&nbsp;/
                Terms &amp; Conditions of Sale&nbsp;&nbsp;/
                EULA
                <div className="bottomdisclaimer">
				    *Not all cutters and printers are supported. For more information on cutters and printers, click here. Subject to terms and conditions. 					
                </div>        
            </div>
        </div>
    );
}

