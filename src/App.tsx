import React, { useState } from 'react';
import Hero from './layouts/Hero';
import PageLayout from './layouts/PageLayout';

const App: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  );
};

export default App;
