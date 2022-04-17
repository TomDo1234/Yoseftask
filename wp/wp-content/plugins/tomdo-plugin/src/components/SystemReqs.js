import './SystemReqs.css';

export default function SystemReqs() {
    return(
        <div className='SystemReqs'>
            <h2>System Requirements</h2>
            <h3>To operate the Software successfully the following computer configuration is required:</h3>
            <div className='configholder'>
                <div className="colhalf">                
                    <ul>
                        Minimum Computer Configuration
                        <li>IBM Compatible 1Ghz CPU</li>
                        <li>4Gb of available Hard Disk Drive space (includes Extras, add 2.5Gb for the Lessons)</li>
                        <li>2Gb of RAM</li>
                        <li>SVGA color monitor set to a min 1280×768 pixels</li>
                        <li>512Mb SVGA Video/Graphics card</li>
                        <li>2 Button Mouse</li>
                        <li>Microsoft Windows 7, 8, 10 or 11 (32/64Bit)</li>
                    </ul>                
                </div>
                <div className="colhalf">                
                    <ul>
                        Recommended Computer Configuration
                        <li>Intel/AMD Quad-Core+</li>
                        <li>10Gb+ of available Hard Disk Drive space</li>
                        <li>16Gb+ of RAM</li>
                        <li>24”+ HD Color monitor (1980 Pixels+ Wide) x 2</li>
                        <li>4Gb+ Video/Graphics card</li>
                        <li>2 Button Scrolling Wheel Mouse</li>
                        <li>Sound &amp; Speakers</li>
                        <li>Microsoft Windows 10 Pro (64Bit)</li>
                    </ul>                
                </div>
            </div>            
        </div>
    );
}

