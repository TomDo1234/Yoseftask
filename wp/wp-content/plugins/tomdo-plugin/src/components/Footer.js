import './Footer.css';

export default function Footer() {
    return(
        <header className='thefooter'>
            <div class = "row">
                <div class = "col">
                    <div className="headcol">SHOP FOR</div>
                    <div className="selectedprod">VinylMaster CUT</div>
                    <div>VinylMaster LTR</div>
                    <div>VinylMaster DSR</div>
                    <div>VinylMaster PRO</div>
                    <div>VinylMaster XPT</div>
                    <div>View Price List</div>
                </div>
                <div class = "col">
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
                <div class = "col">
                    <div className="headcol">SUPPORT</div>
                    <div>Help &amp; Support Centre</div>
                    <div>Lodge a Ticket</div>
                </div>
                <div class = "col">
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
                <div class = "col">
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
                            <span>VinylMaster PRO</span>
                        </div>
                        <div className="recom">
                            <div className="greenicon"></div>
                            <span>VinylMaster DSR</span>
                        </div>
                        <div className="recom">
                            <div className="orangeicon"></div>
                            <span>VinylMaster XPT</span>
                        </div>
                    </div>
                </div>                
            </div>
        </header>
    );
}

