import React, { useState, useEffect } from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import awsExports from './aws-exports';

import { Layout } from './views/layout';
import { YearPage } from './views/yearpage';
import { NoQueryMessage, Query } from './views/query';
import { Rules } from './views/rules';
import { Error } from './views/error';
import { Winners } from './views/winners';

Amplify.configure(awsExports);

function App() {
  const [predictions, setPredictions] = useState([]);
  const [filteredPredictions, setFilteredPredictions] = useState([]);
  const [filterString, setFilterString] = useState(predictions);

  useEffect(() => {
    if (!filterString) {
      setFilteredPredictions(predictions);
    }
  }, [filterString]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setPredictions={setPredictions} />}>
          <Route
            index
            element={
              <YearPage
                setPredictions={setPredictions}
                predictions={predictions}
                setFilteredPredictions={setFilteredPredictions}
                filteredPredictions={filteredPredictions}
                filterString={filterString}
                setFilterString={setFilterString}
              />
            }
          />
          <Route path="query" exact element={<NoQueryMessage />} />
          <Route
            path="query/*"
            element={
              <Query
                setPredictions={setPredictions}
                predictionData={predictions}
                setFilteredPredictions={setFilteredPredictions}
                filteredPredictions={filteredPredictions}
                filterString={filterString}
                setFilterString={setFilterString}
              />
            }
          />
          <Route path="rules" element={<Rules />} />
          <Route path="winners" element={<Winners />} />
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
