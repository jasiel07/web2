import './App.css';
import React from "react";
import Day7 from './Components.js/Day7';
import Day6entry from './Components.js/Day6entry';
import List from './Components.js/Day6list';
import Day8 from './Components.js/Day8';
import Home from './Components.js/Day9home';
import NavBar from './Components.js/Day9navbar';
import Singers from './Components.js/Day9singers';
import Albums from './Components.js/Day9albums';
import Login from './Components.js/Day10login';



import { Route,Routes } from 'react-router-dom';


function createEntry(items) {
  return (
    <Day6entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}



function App() {
  return (
    <div className="App">
    <p>Day 8</p>
    <p><h4>Dare to answer my Question within 5 sec</h4></p>
    <Day8/>
    <p>Day 6</p>
      <h1 style={{ textAlign:"center",backgroundColor:'lightpink'}}>
      Products
   </h1>
  
   <dl >{List.map(createEntry)}</dl>
   <p>Day 9</p>
   <NavBar/>
   <Routes>
       <Route exact path='/' element={<Home />}></Route>
       <Route path='/singers' element={<Singers />}></Route>
       <Route path='/albums' element={<Albums />}></Route>
   </Routes>


      <p>Day 7</p>
      <Day7/>
      <p>Day 10</p>
      <Login/>
   
    </div>
  );
}

export default App;