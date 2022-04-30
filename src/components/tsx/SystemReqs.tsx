import React from 'react';

interface SysRequirements {
    minimumComputerConfiguration : string | null,
    recommendedComputerConfiguration : string | null
}

function SystemReqs({productData}) {

    const {systemRequirements} : {systemRequirements : SysRequirements[]} = productData;

    return(
        <div className='SystemReqs'>
            <h2>System Requirements</h2>
            <h3>To operate the Software successfully the following computer configuration is required:</h3>
            <div className='configholder'>
                <div className="colhalf">                
                    <ul>
                        Minimum Computer Configuration
                        {
                            systemRequirements.map((entry,i)  => 
                                (entry.minimumComputerConfiguration !== null ? <li key = {i}>{entry.minimumComputerConfiguration}</li> : ''))
                        }
                    </ul>                
                </div>
                <div className="colhalf">                
                    <ul>
                        Recommended Computer Configuration
                        {
                            systemRequirements.map((entry,i)  => 
                                (entry.recommendedComputerConfiguration !== null ? <li key = {i}>{entry.recommendedComputerConfiguration}</li> : ''))
                        }
                    </ul>                
                </div>
            </div>            
        </div>
    );
}

export default SystemReqs;