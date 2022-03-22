import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxColorList, setBoxColorList] = useState([]);

  return (
    <div className="App">
      <BoxForm boxColorList={boxColorList} setBoxColorList={setBoxColorList}/>
      <BoxDisplay boxColorList={boxColorList}/>
    </div>
  );
}

export default App;
