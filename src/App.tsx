import React from 'react';
import ProgressContainer from './containers/ProgressContainer';
import FormContainer from './containers/FormContainer';

function App() {
  return (
    <div>
      <ProgressContainer />
      <FormContainer pageIndex={0} />
      <FormContainer pageIndex={1} />
      <FormContainer pageIndex={2} />
    </div>
  );
}

export default App;
