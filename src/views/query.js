import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import { fetchAllPredictionsByAuthorAnddYearWithoutStateUpdate } from '../components/queries';
import { ListDiv } from '../components/guesses'

export const NoQueryMessage = () => (
  <>
    <h3>Custom queries must be written in this format:</h3>
    <h1>/query/year=2021authors=JON&ELEANOR&THOM+W</h1>
    <h3>1️⃣ Must start with year=XXXX</h3>
    <h3>2️⃣ Followed by authors=AAA&BBB&CCC</h3>
    <h3>3️⃣ Authors must be separated by an '&' symbol, and must be in caps</h3>
    <h3>4️⃣ If an author has a space in their name, use a + symbol</h3>
  </>
)

export const Query = ({ setPredictions, predictionData }) => {
  const [year, setYear] = useState('');
  const [authors, setAuthors] = useState(['BONGO']);

  const location =  useLocation();
  const pathname =  location.pathname;
  const authorString = pathname.substring(pathname.indexOf('authors') + 8)

  useEffect(() => {
    const initialAuthors = authorString.split('&')
    const queryAuthors = initialAuthors.map((i) => { return i.replace("+"," ").replace("/","")})
    setAuthors(queryAuthors)

    const queryYear = pathname.substring(pathname.indexOf('year') + 5).substring(0, 4);
    setYear(queryYear);

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
  }, [location]);

  return (
    <>
      <p>
        Filtered predictions from {authors.join(', ')} for the year{' '}
        {year}
      </p>
      <ListDiv predictionData={predictionData} />
    </>
  );
};
