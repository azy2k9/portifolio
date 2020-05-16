import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Logo from '../Logo';

const Container = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => (theme.colors.secondary)};
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Navbar />
    </Container>
  );
};

export default Header;
