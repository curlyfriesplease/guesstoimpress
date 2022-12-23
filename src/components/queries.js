import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { getPrediction, listPredictions } from '../graphql/queries';

export async function fetchAllPredictionsByYear(queryYear, setPredictions) {
  try {
    const predictionData = await API.graphql(
      graphqlOperation(listPredictions, {
        filter: {
          Year: {
            eq: queryYear,
          },
        },
      })
    );
    const predictions = predictionData.data.listPredictions.items;
    console.log(`🔮🔮🔮 predictions: 🔮🔮🔮`);
    console.dir(predictions);
    setPredictions(predictions);
  } catch (err) {
    console.log('error fetching predictions:');
    console.log(err);
  }
}

export async function fetchAllPredictionsByAuthor(queryAuthor, setPredictions) {
  try {
    const predictionData = await API.graphql(
      graphqlOperation(listPredictions, {
        filter: {
          Author: {
            eq: queryAuthor,
          },
        },
      })
    );
    const predictions = predictionData.data.listPredictions.items;
    console.log(`🔮🔮🔮 predictions: 🔮🔮🔮`);
    console.dir(predictions);
    setPredictions(predictions);
  } catch (err) {
    console.log('error fetching predictions:');
    console.log(err);
  }
}
