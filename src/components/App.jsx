import React, { useState } from 'react';
import LineChart from './Chart/LineChart';
import Setup from './Setup/Setup';
import Solution from './Solution/Solution';
import Results from './Results/Results';
import Frame from './Frame';
import './style.css';

function App() {
  const [results, update] = useState({ tests: [], evaluation: [] });
  const [id, highlight] = useState(-1);

  return (
    <div className="Maximized">
      <Frame title="Setup">
        <Setup callback={update} />
      </Frame>
      <Frame title="Solution">
        <Solution tests={results.tests} id={id} />
      </Frame>
      <Frame title="Evaluation Overview">
        <LineChart dataset={results.evaluation} />
      </Frame>
      <Frame title="Evaluation Results">
        <Results evaluation={results.evaluation} highlight={highlight} />
      </Frame>
    </div>
  );
}

export default App;
