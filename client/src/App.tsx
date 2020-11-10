import React from 'react';
import SmallTab from './components/templates/SmallTab'
import Index from './components/atoms/index'
import FilterCohort from './components/templates/filterCohort';

function App() {
  return (
    <div className="App">
      <div>
        <Index />
        <FilterCohort />
        <SmallTab />
      </div>
    </div>
  );
}

export default App;
