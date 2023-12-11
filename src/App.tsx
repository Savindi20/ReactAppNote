import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from "./view/NavBar/Navbar";
import {MainContent} from "./view/MainContent/MainContent";
import {Footer} from "./view/Fotter/Footer";

function App() {
  return (
      // <h1 className="text-3xl font-bold underline">
      //   Hello world!
      // </h1>
    //   <div style={{backgroundColor: "red", padding: 10, textAlign: "center"}}>Inline CSS BOX</div>
    //      <br/>
    //      <div className="box">External CSS BOX</div>
    //      <br/>
    //   <div className="bg-red p-10 text-align">Tailwind External utility BOX</div>
    <>
        <Navbar></Navbar>
        <MainContent></MainContent>
        <Footer></Footer>
    </>
)
    ;
}

export default App;
