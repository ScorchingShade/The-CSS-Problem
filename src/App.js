import FlexboxContainer from './components/flexboxContainer';
import buttonsList  from './components/btnList.js'
import './App.css'
import Dropdown from 'react-dropdown';
import { useState } from 'react';

const options = [
  'two', 'three', 'four', 'five', 'more'
];

function App() {
  const [listType, setListType] = useState('');
  const dropdownHandler =(e)=>{
    setListType(e.value);
  }
  return (
    <div className='container'>
      <div className='problem'>
      <h1>The problem</h1>
      <h3>Create a container that at max can have a 3x3 grid</h3>
      <ul>
        <li>If it has 1 item, skip render</li>
        <li>If it has 2 items, there should be 2 rows and 1 column centered and vertically+horizontally aligned</li>
        <li>If it has 3 items, there should be 3 rows and 1 column centered and vertically+horizontally aligned</li>
        <li>If it has 4 items, there should be 2 rows and 2 columns centered and vertically+horizontally aligned</li>
        <li>If it has 5 items, there should be 2 rows and 3 columns centered and vertically+horizontally aligned</li>
      </ul>
      </div>
      
      <div className='listContainer'>
      <Dropdown options={options} onChange={dropdownHandler} value={'two'} placeholder="Select an option"/>  
        <FlexboxContainer buttonList={buttonsList} listType={listType}/>
      </div>
    </div>
  );
}

export default App;
