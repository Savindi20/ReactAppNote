import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";

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
         {/*<DefaultLayout/>*/}
         {/* <Login/>*/}
          <Routes>
              <Route path="/*"
                     Component={DefaultLayout}>
              </Route>
              <Route path="/login"
                     Component={Login}>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
)
    ;
}

export default App;
