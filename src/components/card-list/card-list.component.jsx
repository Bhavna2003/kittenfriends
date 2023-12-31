// import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = ({ kittens }) => (
    <div className="card-list">
        {kittens.map((kitten) => {
            return <Card key={kitten.id} kitten={kitten} />
        })}
    </div>
);

// class CardList extends Component{
//     render(){
//         const { kittens } = this.props;

//         return (
//             <div className="card-list">
//                 {kittens.map((kitten) => {
//                     return (
//                     <Card key={kitten.id} kitten={kitten} />
//                 )})}
//             </div>
//         )
//     }
// }

export default CardList;