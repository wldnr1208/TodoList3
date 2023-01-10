import React from "react";
import styled from "styled-components";
import Header from "../component/Header";

const Works = () => {
  return (
    <div>
      <Header />
      <StH2>작성자</StH2>
      <InPut1 placeholder="작성자의 이름을 입력해주세요.(5자이내)"></InPut1>
      <StH2>제목</StH2>
      <InPut1 placeholder="제목을 입력해주세요. (50자 이내)"></InPut1>
      <StH2>내용</StH2>
      <Textarea
        name="body"
        rows="10"
        maxLength={200}
        placeholder="내용을 입력해주세요. (200자 이내)"
      />
      <AddButton>추가하기</AddButton>
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
