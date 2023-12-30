import React, { useEffect } from 'react';
import '../css/quickFilter.css';
import '../App.css';

export const QuickFilter = ({
  predictions,
  setFilteredPredictionData,
  filterString,
  setFilterString,
}) => {
  // if filterString changes, filter the predictions array and setFilteredPredictionData to the filtered array
  console.log(`filteredString length is ${filterString.length}`);
  useEffect(() => {
    if (filterString.length > 1 && filterString) {
      const filteredData = predictions.filter((prediction) => {
        return (
          prediction.Prediction.toLowerCase().includes(
            filterString.toLowerCase()
          ) ||
          prediction.Author.toLowerCase().includes(filterString.toLowerCase())
        );
      });
      setFilteredPredictionData(filteredData);
    } else {
      setFilteredPredictionData(predictions);
    }
  }, [filterString]);

  return (
    <div className="quickFilterContainer">
      <span className="material-icons-outlined">filter_list</span>
      <input
        value={filterString}
        type="text"
        onChange={(e) => setFilterString(e.target.value)}
        className="quickFilterInput"
      ></input>
    </div>
  );
};
