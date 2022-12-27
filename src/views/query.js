import React, { useEffect, useState, useMemo } from 'react';
import '../App.css';
import { fetchAllPredictionsByAuthorAnddYearWithoutStateUpdate } from '../components/queries';
import { ListDiv } from '../components/guesses'

export const NoQueryMessage = () => (
      <>
        <h3>Custom queries must be written in this format:</h3>
        <h1>/query/year=2021authors=JON&ELEANOR&DAN</h1>
        <h3>1️⃣ Must start with year=XXXX</h3>
        <h3>2️⃣ Followed by authors=AAA&BBB&CCC</h3>
        <h3>3️⃣ Authors must be separated by an '&' symbol, and must be in caps</h3>
      </>
    )

export const Query = ({ setPredictions, predictionData }) => {
  const [queryYear, setQueryYear] = useState('');
  const [queryAuthors, setQueryAuthors] = useState([]);
  const documentURL =  useMemo(() => document.URL, [])
 

  useEffect(() => {
    setPredictions([]);
    console.log(`documentURL: ${documentURL}`);
    const url = documentURL.substring(documentURL.lastIndexOf('/') + 1);
    const year = url.substring(url.indexOf('year') + 5).substring(0, 4);
    setQueryYear(year);

    const authorString = url.substring(url.indexOf('authors') + 8);
    setQueryAuthors(authorString.split('&'));

    async function fetchAllAuthors(queryAuthors, setPredictions) {
      console.log(`queryAuthors received:`);
      console.dir(queryAuthors);

      let allPromises = [];
      for (let x = 0; x < queryAuthors.length; x++) {
        allPromises.push(
          new Promise((resolve) => {
            console.log(`🤌🤌🤌 trying to query for ${queryAuthors[x]}`);
            const promiseResult =
              fetchAllPredictionsByAuthorAnddYearWithoutStateUpdate(
                queryAuthors[x],
                queryYear
              );
            setTimeout(() => {
              resolve(promiseResult);
            }, 1000);
          })
        );
      }

      let shinyNewArray = [];
      let flattenedArray = []

      await Promise.all(allPromises)
      .then(
        (values) => {
          values.map(function (item) { return shinyNewArray.push(item)})
        }
      ).catch(err => console.log(err))

      flattenedArray = flattenedArray.concat(...shinyNewArray)
      console.dir(flattenedArray)
      setPredictions(flattenedArray)
    }

    fetchAllAuthors(queryAuthors, setPredictions);
  }, []);

  return (
    <>
      <p>
        Filtered predictions from {queryAuthors.join(', ')} for the year{' '}
        {queryYear}
      </p>
      <ListDiv predictionData={predictionData} />
    </>
  );
};