import React from 'react';
import SmallTab from './components/templates/SmallTab'
import FilterCohort from './components/templates/filterCohort';
import NameInput from './components/atoms/NameInput';

function App() {
  return (
    <div className="App">
      <div>
        <NameInput />
        <FilterCohort />
        <SmallTab />
      </div>
    </div>
  );
}

export default App;
