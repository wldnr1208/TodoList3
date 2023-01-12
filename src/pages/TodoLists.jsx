import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getTodos, __deleteTodo } from "../redux/modules/todosSlice";
import Header from "../component/Header";
import styled from "styled-components";
// 순서1여기 + Slice.js가서 todos값 선언하고 + index.js가서 store전역으로 사용하게 설정
const TodoLists = () => {
  const todoList = useSelector((state) => state.todos.todos);
  console.log(todoList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodos());
  }, []);
  console.log(todoList);

  const onDeleteHandler = (id) => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      dispatch(__deleteTodo(id));
    } else {
      return;
    }
  };

  return (
    <>
      <Header />
      <h1>내 목표</h1>
      {todoList?.map((todos) => (
        <div>
          <div
            key={todos.id}
            todo={todos}
            onClick={() => {
              navigate(`/todolist/:id`);
            }}
          />

          <StCard1
            onClick={() => {
              navigate(`/Detail/${todos.id}`);
              console.log(todos.id);
            }}
          >
            <h2>{todos.title}</h2>
            <StH2>작성자 : {todos.username}</StH2>
            <Button2 onClick={() => onDeleteHandler(todos.id)}>
              삭제하기
            </Button2>
          </StCard1>
        </div>
      ))}
    </>
  );
};

export default TodoLists;

const StCard1 = styled.div`
  border: 1px solid #ddd;
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 20px;
  font-size: 25px;
  border-radius: 15px;
`;
const StH2 = styled.div`
  font-size: 12px;
  position: relative;
  top: 90px;
  right: 46%;
`;
const Button2 = styled.button`
  margin: 35px;
  width: 100px;
  height: 60px;
  border-radius: 15px;
  background-color: bisque;
`;
