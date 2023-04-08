import React, { useEffect } from 'react';
import { ListDiv } from '../components/guesses';
import {
  fetchAllPredictionsByYear,
  fetchAllPredictionsByYearWithoutIncorrects,
} from '../components/queries';
import '../App.css';
import '../css/header.css';
import { QuickFilter } from '../components/quickFilter';

export const YearPage = ({
  setPredictions,
  predictions,
  setFilteredPredictions,
  filteredPredictions,
  filterString,
  setFilterString,
}) => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchAllPredictionsByYear(currentYear, setPredictions);
  }, []);

  return (
    <>
      {!filterString?.length > 0 && (
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
      )}
      <QuickFilter
        predictions={predictions}
        setFilteredPredictionData={setFilteredPredictions}
        filterString={filterString}
        setFilterString={setFilterString}
      />
      {predictions.length > 0 && (
        <ListDiv
          predictionData={
            filterString.length > 0 ? filteredPredictions : predictions
          }
          setPredictions={setPredictions}
        />
      )}
      {predictions.length > 250 && (
        <button
          className="removeIncorrectsButton"
          onClick={() =>
            fetchAllPredictionsByYearWithoutIncorrects(
              currentYear,
              setPredictions
            )
          }
        >
          Show {currentYear} without incorrect guesses
        </button>
      )}
    </>
  );
};
