import React from 'react';
import { ProgressContainer, FormContainer } from './containers';
import { Layout } from './components';

function App() {
  return (
    <Layout>
      <ProgressContainer />
      <FormContainer pageIndex={0} />
      <FormContainer pageIndex={1} />
      <FormContainer pageIndex={2} />
    </Layout>
  );
}

export default App;
