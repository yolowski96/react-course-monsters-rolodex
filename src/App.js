import CardList from './components/card-list/card-list';
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
        },
        () => { console.log(this.state) }
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
        < CardList />
        <input className='search-box' type='search' placeholder='search monsters' onChange={this.onSearchChange} />
        {
          filterMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
