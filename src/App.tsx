// import logo from './logo.svg';
import './App.css';
// import { checkItems } from './data/data';
import { Count } from './items/cookie';
// import { Total } from './items/total-display';

function App() : JSX.Element {
  // checkItems('allItems');
  return (
    <div className='container'>
      <Count num={1} objectItem={'grandma'} />
      <Count num={10} objectItem={'grandma'} />
      {/*<Total />*/}
    </div>
  );
}

export default App;
