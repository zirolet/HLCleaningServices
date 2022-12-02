import './Info.css'
import './Card.css'
import mid from './assetsc/mid.png'
import commercial from './assetsc/commercial.png'
import residential from './assetsc/residential.png'


/*
100vw, three cards each of 27vw. So there will be 2 spaces in between, then 2 spaces on the outside.
100-3*27=100-81= 18vw
6 each on the outside spaces leaves us with 6 more for the 2 spaces in between. So in between each card is 3 vw.
So left card will be at 6vw.
Middle card is (6+27+3)
Last card is 6 + 2(27+3)
*/
function Card(props){
    /*
    title: Can be empty
    lines: array of text
    image: the image for the top of the card
    color: color of the background
    colort: color of the text
    pos: position of the card
    */

    return(
        <div className = "Card" 
        style={{"background-color": props.color, "color" : props.colort, "left": props.pos}}>
            <img className="image" src={props.image}/>
            <h2 style={{"font-weight": "lighter"}}>{props.title}</h2>
            {
                props.lines.map(line => {
                    return <h3 style={{"font-weight": "lighter"}}>{line}</h3>
                })
            }
        </div>
    )
}


export default function Info(){
    return(
        <div className = "Info">
            <h1 style={{"font-weight": "lighter"}}>Cleaning Services</h1>
            <Card title = {"Residential"} image = {residential} color = "#202020" colort = "white" pos = "6vw" lines = {["Vacation Houses","Move In/Out", "Apartments", "Living Spaces"]}/>
            <Card title = {""} image = {mid} color = "#816E7C" colort = "white" pos = "36vw" lines = {["Daily", "Weekly / Bi-Weekly","Monthly","Regular and Deep Cleaning"]}/>
            <Card title = {"Commercial"} image = {commercial} color = "#CFD7D4" colort = "black" pos = "66vw" lines = {["Construction Sites","Day Cares", "Businesses"]}/>
        </div>
    )
}