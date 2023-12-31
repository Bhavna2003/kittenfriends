// import {Component} from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/searchbox.component';

const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, set value]
  const [kittens, setKittens] = useState([]);
  const [filteredKittens, setFilteredKittens] = useState(kittens);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setKittens(users));
  }, [])

  useEffect(() => {
    const newfilteredKittens = kittens.filter((kitten) =>{
      return kitten.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredKittens(newfilteredKittens);
  }, [kittens, searchField])

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  } 

  return(
    <div className="App">
        <h1 className='app-title'>Beautiful Kitten Friends</h1>
        <SearchBox 
        className='kitten-search-box'
        onChangeHandler = {onSearchChange} 
        placeholder='Search Kittens' />
        <CardList kittens={filteredKittens} />
      </div>
  );
};

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       kittens: [],
//       searchField: ''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users => this.setState(() =>{
//       return {kittens: users}
//     }
//     )))
//   }

//   onSearchChange = (event) =>{
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() =>{
//       return {searchField};
//     })
//   } 

//   render(){
//     const {kittens, searchField} = this.state;
//     const {onSearchChange} = this;
    
//     const filteredKittens = kittens.filter((kitten) =>{
//       return kitten.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Beautiful Kitten Friends</h1>
//         <SearchBox 
//         className='kitten-search-box'
//         onChangeHandler = {onSearchChange} 
//         placeholder='Search Kittens' />
//         <CardList kittens={filteredKittens} />
//       </div>
//     );
//   }
// }

export default App;

