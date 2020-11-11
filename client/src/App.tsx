import React from 'react';
import SmallTab from './components/templates/SmallTab'
import Index from './components/atoms/index'
import FilterCohort from './components/templates/filterCohort';
import ToolBar from "./components/templates/ToolBar"


function App() {
  const blank = <br />
  return (
    <div className="App">
      <div>
        <Index />
        <FilterCohort />
        <SmallTab />
        {blank}
        {blank}
        <ToolBar />
      </div>
    </div >
  );
}

export default App;
