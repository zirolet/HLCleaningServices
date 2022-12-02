import './TopM.css'
import top from './assetsm/top.png'

export default function TopM(){
    return(
        <div className="TopM">
            <img src={top}/>
            <h1 className="introTopM">Introducing <br></br> Cleaning Services For Everyone</h1>
            <h1 className="introBottomM">HL Cleaning Services</h1>
        </div>
    )
}