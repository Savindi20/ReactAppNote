import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from "./view/common/NavBar/Navbar";
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Fotter/Footer";
import {BrowserRouter} from "react-router-dom";

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
        <BrowserRouter>
            <Navbar></Navbar>
            <MainContent></MainContent>
            <Footer></Footer>
        </BrowserRouter>
    </>
)
    ;
}

export default App;
