import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Logo from '../Logo';

const Container = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 33px;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Navbar />
    </Container>
  );
};

export default Header;
