import React from 'react';
import SmallTab from './components/templates/SmallTab'
import FilterCohort from './components/templates/filterCohort';

function App() {
  return (
    <div className="App">
      <div>
        <FilterCohort />
        <SmallTab />
      </div>
    </div>
  );
}

export default App;
