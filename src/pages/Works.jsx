import React, { useState } from "react";
import styled from "styled-components";
import Header from "../component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title: "",
    body: "",
    username: "",
  });

  const onSubmitHandler = async (todo) => {
    //1.  이때 todos는 [{투두하나}]임
    await axios.post("http://localhost:3001/Todos", todo); // 이때 서버에 있는 todos도 [{투두하나}]임
    navigate("/TodoLists");
    // 근데 여기서 서버 요청이 끝나고 서버는 [{투두가},{두개임}]
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault();
          onSubmitHandler(todo);
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
            const { value } = ev.target;
            setTodo({
              ...todo,
              username: value,
            });
          }}
          maxLength={5}
        ></InPut1>
        <StH2>제목</StH2>
        <InPut1
          type="text"
          name="title"
          value={todo.title}
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
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
            const { value } = ev.target;
            setTodo({
              ...todo,
              body: value,
            });
          }}
          placeholder="내용을 입력해주세요. (200자 이내)"
        />
        <AddButton>추가하기</AddButton>
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
