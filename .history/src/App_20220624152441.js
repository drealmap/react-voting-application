import React, {useState} from 'react';
import './App.css';





function App() {

  const [catCount, setCatcount] = useState(0);
  const [dogCount, setDogcount] = useState(0);

  const totalCount = catCount + dogCount;


  return (
    <div className="App">
      <div className='flex_container'>
        <div className='cat'></div>
        <div className='dog'></div>
      </div>

      <div className='buttons'>
        <div className='cat_button' onClick={() => setCatcount(catCount + 1)} >
          <h2>CATS</h2>
          <h2></h2>
        </div>
        <div className='liner'></div>
        <div className='dog_button' onClick={() => setDogcount(dogCount + 1)}>
          <h2>DOGS</h2>
        </div>
      </div>

      <h1>votes</h1>
      {console.log(catCount)}
    </div>
  );
}

export default App;
