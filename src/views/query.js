import React, { useEffect, useState } from 'react';
import '../App.css';
import { fetchAllPredictionsByAuthorAnddYearWithoutStateUpdate } from '../components/queries';

export const NoQueryMessage = () => <p>Query instructions to be put here</p>;

export const Query = ({ setPredictions }) => {
  const [queryYear, setQueryYear] = useState('');
  const [queryAuthors, setQueryAuthors] = useState([]);
  const documentURL = document.URL;

  useEffect(() => {
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
          new Promise((resolve, reject) => {
            console.log(`🤌🤌🤌 trying to query for ${queryAuthors[x]}`);
            const promiseResult =
              fetchAllPredictionsByAuthorAnddYearWithoutStateUpdate(
                queryAuthors[x],
                queryYear
              );
            setTimeout(() => {
              console.log('promiseResult');
              console.dir(promiseResult);
              resolve(promiseResult);
            }, 1000);
          })
        );
      }

      console.log('🥳🥳🥳 ALL PROMISES');
      console.dir(allPromises);
      let shinyNewArray = [];

      const whoYouGonnaCall = await Promise.all([allPromises]);
      whoYouGonnaCall.then(
        // (res) => res.map((i) => shinyNewArray.push(i))
        (values) => {
          shinyNewArray.push(values);
        }
      );

      //   res[0].map((oneAuthor) => shinyNewArray.push(oneAuthor.result));
      console.log('shiny new array: 😵‍💫😵‍💫😵‍💫😵‍💫');
      console.dir(shinyNewArray);
      console.dir(whoYouGonnaCall);
      // console.log(data.flat());
      // return data;
      setPredictions(shinyNewArray);
    }

    fetchAllAuthors(queryAuthors, setPredictions);
  }, []);

  return (
    <>
      <p>
        Filtered predictions from {queryAuthors.join(', ')} for the year{' '}
        {queryYear}
      </p>
    </>
  );
};
