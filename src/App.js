import FlexboxContainer from './components/flexboxContainer';
import buttonsList  from './components/btnList.js'
import './App.css'

function App() {
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

      <div>
        {console.log(buttonsList)}
        <FlexboxContainer buttonList={buttonsList} listType='two'/>
      </div>
    </div>
  );
}

export default App;
