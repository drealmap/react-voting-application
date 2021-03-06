import React, {useState} from 'react';
import './App.css';





function App() {

  const [catCount, setCatcount] = useState(0);
  const [dogCount, setDogcount] = useState(0);

  

  const totalCount = catCount + dogCount;
  

  let catPercent;
  let dogPercent;

  if (totalCount === 0) {
    catPercent = 0;
    dogPercent = 0;
  } else{
    catPercent = ((catCount/totalCount) * 100).toFixed(1) 
    dogPercent = ((dogCount/totalCount) * 100).toFixed(1) 
  }
  
  



  return (
    <div className="App">
      <div className='flex_container'>
        <div className='cat' style={{width: catPercent + '%'}}></div>
        <div className='dog' style={{width: dogPercent + '%'}}></div>
      </div>

      <div className='buttons'>
        <div className='cat_button' onClick={() => setCatcount(catCount + 1)} >
          <h2>CATS</h2>
          
        <h2>{catPercent}%</h2> 
        </div>
        <div className='liner'></div>
        <div className='dog_button' onClick={() => setDogcount(dogCount + 1)}>
          <h2>DOGS</h2>
          <h2>{dogPercent}%</h2>
        </div>
      </div>

      <h1>{totalCount} votes</h1>
    </div>

  );
}

export default App;