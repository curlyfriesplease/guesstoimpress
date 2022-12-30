import React, { useEffect } from 'react';
import { ListDiv } from '../components/guesses';
import { fetchAllPredictionsByYear, fetchAllPredictionsByYearWithoutIncorrects } from '../components/queries';
import '../App.css';
import '../css/header.css';



export const YearPage = ({ setPredictions, predictions }) => {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    fetchAllPredictionsByYear(currentYear, setPredictions);
  }, []);

  return (
    <>
      <div className="yearFilters dropShadow2">
        <button
          className="yearFilterButton"
          onClick={() => fetchAllPredictionsByYear('2023', setPredictions)}
        >
          2023
        </button>
        <button
          className="yearFilterButton"
          onClick={() => fetchAllPredictionsByYear('2022', setPredictions)}
        >
          2022
        </button>
        <button
          className="yearFilterButton"
          onClick={() => fetchAllPredictionsByYear('2021', setPredictions)}
        >
          2021
        </button>
      </div>
      {predictions.length > 0 && (
        <ListDiv predictionData={predictions} setPredictions={setPredictions} />
      )}
      {predictions.length > 250 && (
      <button className="removeIncorrectsButton" onClick={() => fetchAllPredictionsByYearWithoutIncorrects(currentYear, setPredictions)}>
        Click to remove incorrect guesses
      </button>
      )}
    </>
  );
};
