import './InfoM.css'
import mid from './assetsm/mid.png'
import res from './assetsm/residential.png'
import com from './assetsm/commercial.png'


export default function InfoM(){
    return(
        <div className="InfoM">
            <h1 style={{"text-align": "center", "font-weight":"lighter", "font-size":"7vw","margin":"2vw", "color": "#816E7C"}}>Cleaning Services</h1>
            <div className="res">
                <img src={res}/>
                <h2 style={{"font-size": "8vw","font-weight":"normal"}}>Residential</h2>
                <h3>Vacation Houses</h3>
                <h3>Move In/Out</h3>
                <h3>Apartments</h3>
                <h3>Living Spaces</h3>
            </div>
            <div className="mid">
                <img src={mid}/>
                <h3>Daily, Weekly, Bi-Weekly, Monthly</h3>
                <h3>Regular and Deep Cleaning</h3>
            </div>
            <div className="com">
                <img src={com}/>
                <h2 style={{"font-size": "8vw","font-weight":"normal"}}>Commercial</h2>
                <h3>Construction Sites</h3>
                <h3>Day Cares</h3>
                <h3>Businesses</h3>
            </div>
        </div>
    )
}