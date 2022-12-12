import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchingValue: ''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        }
      ))
  }

  onSearchChange = (event) => {
    const searchingValue = event.target.value.toLowerCase();

    this.setState(() => { return { searchingValue } })
  };

  render() {
    const filterMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.searchingValue));
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        < SearchBox className='monsters-search-box' placeholder='search monsters' onChangeHandler={this.onSearchChange} />
        < CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
