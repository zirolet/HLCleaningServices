import "./AreaM.css"
import map from "./assetsm/area.png"

export default function AreaM(){
    return(
        <div className="AreaM">
            <img src={map}/>
            <h3>Serving...</h3>
            <h3>Pearland | Friendswood | Galveston | Webster  League City | Texas City | Kemah | Alvin</h3>
            <h3><i>... And the surrounding South-East</i></h3>
        </div>
    )
}