import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state = {
        monsters:  [], 
        searchField: ''
      };
    }

    componentDidMount (){ //isso monta primeiro qualquer funcao escrita aqui
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({monsters:users}));

    }

  handleChage = (e) => {
     this.setState({searchField: e.target.value}) 
    }  

  render() {
    const { monsters, searchField } = this.state; //mesma coisa que usar const monsters = this.state.monsters; e constsearchField = this.state.searchField; separadamente
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
        <div className='App'>
          <h1> Monsters Rolodex </h1>
          <SearchBox 
            placeholder='search monster' 
            handleChage= {this.handleChage }
          />
          <CardList monsters={filteredMonsters}/>   
        </div>
        ); 
          
      //pode usar password no input para esconder os caracterres por ex.
      //  onChange={e => {this.setState({searchField: e.target.value})}} Isso e oq permite a busca instantanea 
      
  }
}

export default App;
