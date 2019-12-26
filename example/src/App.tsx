import React from 'react';

import TestPlugin from 'skeleton-text';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Products demo: </header>
      <TestPlugin dummyText="Bla" className="test vvv" />
    </div>
  );
};

export default App;
