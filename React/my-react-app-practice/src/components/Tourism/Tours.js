import Card from "./Card";
import './Tours.css'



function Tours(props){

    return (
        <div className="container">
            <div>
            <h2 className="title">Plane Tour with Tauqueer</h2>
            </div>
            <div className="cards">
                {
                    props.tours.map( (tour) => {
                        return <Card {...tour} removeTour = {props.removeTour}></Card>
                    } ) 
                }
            </div>
        </div>
    );

}

export default Tours;