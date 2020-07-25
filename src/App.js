import React, {useState} from 'react';
import Header from './componenets/header';
import './App.css';

function App() {
const [categories] = useState([
  {name: "About Me"},
  {name: "Portfolio"},
  {name: "Contact"},
  {name: "Resume"}
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);
console.log(currentCategory)

  return (
    <div className="App">
      <Header categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
    </div>
  );
}

export default App;
