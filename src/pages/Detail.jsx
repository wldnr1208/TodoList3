import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getTodos } from "../redux/modules/todosSlice";
import styled from "styled-components";
import { useEffect } from "react";

const Detail = () => {
  const todoList = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const Params = useParams();
  console.log("Param : ", Params);

  const todoget = todoList.find(
    (todoList) => todoList.id === parseInt(Params.id)
  );
  console.log(Params.id);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>id: ({todoget?.id})</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/todoLists");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todoget?.title}</StTitle>
          <StBody>{todoget?.body}</StBody>
          <AddButton
            onClick={() => {
              navigate(`/Edit/${todoget.id}`);
            }}
          >
            수정하기
          </AddButton>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const AddButton = styled.button`
  border: 1px solid #ddd;
  height: 40px;
  width: 99%;
  margin-top: 25%;
  border-radius: 5px;
`;
