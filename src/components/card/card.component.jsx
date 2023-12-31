// import { Component } from "react";
import './card.styles.css';

const Card = ({kitten}) => {
    const {name, id, email} = kitten;
    return (
        <div className="card-container">
            <img 
            alt={`kitten ${name}`} 
            src={`https://robohash.org/${id}?set=set4&size=180x180`} 
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

// class Card extends Component{
//     render(){
//         const {name, id, email} = this.props.kitten;
//         return(
//             <div className="card-container" key={id}>
//                 <img 
//                 alt={`kitten ${name}`} 
//                 src={`https://robohash.org/${id}?set=set4&size=180x180`} 
//                 />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;