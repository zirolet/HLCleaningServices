import './Area.css'
import area from './assetsc/area.png'

export default function Area(){
    return(
        <div className="Area">
            <img className="image" src={area}/>
            <i className="high">Locations</i>
            <p className="left">
                <br></br>
                Pearland
                <br></br>
                Friendswood
                <br></br>
                Galveston
                <br></br>
                Webster
            </p>
            <p className="right">
                <br></br>
                League City
                <br></br>
                Texas City
                <br></br>
                Kemah
                <br></br>
                Alvin
            </p>
                <i className="low">... And the surrounding South-East</i>
        </div>
    )
}