import React, {useState} from 'react';
import Header from './componenets/header';
import Footer from './componenets/footer';
import './App.css';
import Content from './componenets/ContentSelector';

function App() {
const [categories] = useState([
  {name: "About"},
  {name: "Portfolio"},
  {name: "Contact"},
  {name: "Resume"}
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
