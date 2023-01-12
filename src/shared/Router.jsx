import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Works from "../pages/Works";
import TodoLists from "../pages/TodoLists";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolists/" element={<TodoLists />} />
        <Route path="/works/" element={<Works />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
