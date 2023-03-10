import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../component/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { __getTodos } from "../redux/modules/todosSlice";

const Works = () => {
  const todoList = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const Params = useParams();
  console.log("Param : ", Params);

  const todoget = todoList.find(
    (todoList) => todoList.id === parseInt(Params.id)
  );
  console.log(todoget);

  const navigate = useNavigate();

  const [todo, setTodo] = useState({
    title: todoget.title,
    body: todoget.body,
    username: todoget.username,
  });

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  const onClickEditButtonHandler = async (todoId, edit) => {
    await axios.patch(`http://localhost:3001/Todos/${todoId}`, edit);
    navigate("/TodoLists");
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          // π submitνμ λ λΈλΌμ°μ μ μλ‘κ³ μΉ¨μ λ°©μ§ν©λλ€.
          e.preventDefault();
          onClickEditButtonHandler(todo);
        }}
      >
        <StH2>μμ±μ</StH2>

        <InPut1
          required //μλ¬΄κ²λ μλ ₯νμ§ μμΌλ©΄ μλκ²
          type="text"
          name="username"
          value={todo.username}
          placeholder="μμ±μμ μ΄λ¦μ μλ ₯ν΄μ£ΌμΈμ. (5μ μ΄λ΄)"
          onChange={(ev) => {
            setTodo({ ...todo, username: ev.target.value });
          }}
          maxLength={5}
        ></InPut1>
        <StH2>μ λͺ©</StH2>
        <InPut1
          type="text"
          value={todo.title}
          name="title"
          onChange={(ev) => {
            setTodo({ ...todo, title: ev.target.value });
          }}
          placeholder="μ λͺ©μ μλ ₯ν΄μ£ΌμΈμ. (50μ μ΄λ΄)"
          maxLength={50}
        ></InPut1>
        <StH2>λ΄μ©</StH2>
        <Textarea
          name="body"
          rows="10"
          value={todo.body}
          maxLength={200}
          onChange={(ev) => {
            setTodo({ ...todo, body: ev.target.value });
          }}
          placeholder="λ΄μ©μ μλ ₯ν΄μ£ΌμΈμ. (200μ μ΄λ΄)"
        />
        <AddButton onClick={() => onClickEditButtonHandler(todoget.id, todo)}>
          μμ νκΈ°
        </AddButton>
      </form>
    </div>
  );
};

export default Works;

const StH2 = styled.h2`
  font-size: 20px;
`;

const InPut1 = styled.input`
  border: 1px solid #ddd;
  height: 40px;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 98%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;

const AddButton = styled.button`
  border: 1px solid #ddd;
  height: 40px;
  width: 99%;
  margin-top: 25%;
  border-radius: 5px;
`;
