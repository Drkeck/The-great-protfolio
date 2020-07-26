import React, {useState} from 'react';
import Header from './componenets/header';
import Footer from './componenets/footer';
import './App.css';
import Content from './componenets/ContentSelector';

function App() {
const [categories] = useState([
  {name: "About Me"},
  {name: "Portfolio"},
  {name: "Contact"},
  {name: "Resume"}
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Header categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
        <Content currentCategory={currentCategory}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
