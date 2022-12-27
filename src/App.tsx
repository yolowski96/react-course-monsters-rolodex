import { useState, useEffect,ChangeEvent } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import { getData} from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  },[])

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField));

    setFilteredMonsters(newFilterMonsters);

  },[monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchingValue = event.target.value.toLowerCase();
    setSearchField(searchingValue);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      < SearchBox className='monsters-search-box' placeholder='search monsters' onChangeHandler={onSearchChange} />
      < CardList monsters={filteredMonsters} />
    </div>
  );

}

export default App;
