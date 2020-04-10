import React from 'react';
import ProgressBar from 'rc-progress-bar';

import './App.css';

function App() {
  return (
    <div class="App">
      <ProgressBar 
        value={75} 
        showPercentage={true}
      />
    </div>
  );
}

export default App;
