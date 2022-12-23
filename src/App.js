import React, { useEffect, useState } from 'react';
import './App.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listPredictions } from './graphql/queries';

import { fetchAllPredictionsByYear } from './components/queries';
import awsExports from './aws-exports';
import { Header } from './components/header';
import { ListDiv } from './components/guesses';
Amplify.configure(awsExports);

function App() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    fetchAllPredictionsByYear(currentYear, setPredictions);
  }, []);

  return (
    <div className="App">
      <div className="Main dropShadow1">
        <Header setPredictions={setPredictions} />
        {predictions.length > 0 && <ListDiv predictionData={predictions} />}
      </div>
    </div>
  );
}

export default App;
