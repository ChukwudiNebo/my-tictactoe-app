import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTac from './component/TicTac'
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<TicTac />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
