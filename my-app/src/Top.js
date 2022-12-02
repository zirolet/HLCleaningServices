import './Top.css'
import top from './assetsc/top.png';

export default function Top(){
    return (
        <div className="Top">
            <img className="topLogo" src = {top}/>
            
            <h1 className="introTop">Introducing <br></br> Cleaning Services For Everyone</h1>
            <h1 className="introBottom">HL Cleaning Services</h1>
        </div>
    )
}