import React from "react";
import Header from "../component/Header";
import styled from "styled-components";

const TodoList = () => {
  return (
    <div>
      <Header />
      <StH2>작성자</StH2>
      <StH2>작성자</StH2>
      <StH2>작성자</StH2>
    </div>
  );
};
export default TodoList;

const StH2 = styled.h2`
  font-size: 20px;
`;
