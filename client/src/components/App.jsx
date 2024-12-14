import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDoList />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
