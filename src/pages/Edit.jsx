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
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault();
          onClickEditButtonHandler(todo);
        }}
      >
        <StH2>작성자</StH2>

        <InPut1
          required //아무것도 입력하지 않으면 안되게
          type="text"
          name="username"
          value={todo.username}
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          onChange={(ev) => {
            setTodo({ ...todo, username: ev.target.value });
          }}
          maxLength={5}
        ></InPut1>
        <StH2>제목</StH2>
        <InPut1
          type="text"
          value={todo.title}
          name="title"
          onChange={(ev) => {
            setTodo({ ...todo, title: ev.target.value });
          }}
          placeholder="제목을 입력해주세요. (50자 이내)"
          maxLength={50}
        ></InPut1>
        <StH2>내용</StH2>
        <Textarea
          name="body"
          rows="10"
          value={todo.body}
          maxLength={200}
          onChange={(ev) => {
            setTodo({ ...todo, body: ev.target.value });
          }}
          placeholder="내용을 입력해주세요. (200자 이내)"
        />
        <AddButton onClick={() => onClickEditButtonHandler(todoget.id, todo)}>
          수정하기
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
