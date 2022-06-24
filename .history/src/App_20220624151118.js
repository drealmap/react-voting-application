import React, {useState} from 'react';
import './App.css';





function App() {

  const [catCount, setCatcount] = useState(0);
  const [dogCount, setDogcount] = useState(0);


  return (
    <div className="App">
      <div className='flex_container'>
        <div className='cat'></div>
        <div className='dog'></div>
      </div>

      <div className='buttons'>
        <div className='cat_button'>
          <h2>CATS</h2>
          <h2>shh</h2>
        </div>
        <div className='liner'></div>
        <div className='dog_button'>
          <h2>DOGS</h2>
        </div>
      </div>

      <h1>votes</h1>
    </div>
  );
}

export default App;
