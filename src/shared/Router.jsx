import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Works from "../pages/Works";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist/" element={<TodoList />} />
        <Route path="/works/" element={<Works />} />
        {/* <Route path="/:id" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
