import './Pagejump.css';

export default function Pagejump() {
    return(
        <>
        <div className='breadcrumb'>
            <div>Previous Page / Previous Page / <span>VinylMaster CUT V5</span></div>
        </div>
        <header className='pagejumps'>
            <div className= "pagejumpcontainer">
                <div className= "pagejump">Overview</div>                
                <div className= "pagejump">Features</div>                
                <div className= "pagejump">Compare</div>
                <div className= "pagejump">Upgrade</div>
                <div className= "pagejump">Free Demo</div>
                <div className= "pagejump">System Requirements</div>
            </div>          
        </header>
        </>
    );
}
