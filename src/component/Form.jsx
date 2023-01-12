import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StH1>무엇을 할까요?</StH1>
      <div>
        <StCard
          onClick={() => {
            navigate("/works");
          }}
        >
          <div>할일 기록하기</div>
          <ArrowForwardIcon color="primary">add_circle</ArrowForwardIcon>
        </StCard>
      </div>
      <StCard
        onClick={() => {
          navigate("/TodoLists");
        }}
      >
        <div>TodoList</div>
        <ArrowForwardIcon color="primary">add_circle</ArrowForwardIcon>
      </StCard>
    </div>
  );
};

export default Form;

const StH1 = styled.div`
  padding: 20px;
  font-size: 30px;
`;
const StCard = styled.div`
  border: 1px solid #ddd;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-top: 20px;
  margin-bottom: 24px;
  font-size: 25px;
  border-radius: 15px;
`;
