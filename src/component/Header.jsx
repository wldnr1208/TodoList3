import React from "react";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <HomeIcon
        fontSize="large"
        onClick={() => {
          navigate("/");
        }}
      />
      <h3>모두의 투두리스트</h3>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
