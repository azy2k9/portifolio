import React from 'react';
import { Homepage } from './components/pages';
import { Wrapper } from './components/templates';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Homepage />
    </Wrapper>
  );
};

export default App;
