import React, {useState} from 'react';
import Header from './componenets/header';
import Footer from './componenets/footer';
import './App.css';
import Content from './componenets/ContentSelector';

function App() {
  //set what categories exist and which one is currently active so we can dynamically change the page to reflect this.
const [categories] = useState([
  {name: "About"},
  {name: "Portfolio"},
  {name: "Contact"},
  {name: "Resume"}
]);
// sets the default category to "ABOUT" 
const [currentCategory, setCurrentCategory] = useState(categories[0]);
// this is where the magic happens
  return (
    <main className="App">
      <Header categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
      <div className="tb">
      <Content currentCategory={currentCategory}></Content>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
