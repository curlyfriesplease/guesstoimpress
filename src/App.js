import React, { useEffect, useState } from 'react';
import './App.css';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listPredictions } from './graphql/queries';
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
              />
            }
          />
          <Route path="query" exact element={<NoQueryMessage />} />
          <Route
            path="query/*"
            element={<Query setPredictions={setPredictions} />}
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
