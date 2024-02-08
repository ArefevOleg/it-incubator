import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #07643b;
  color: #fff;

`;