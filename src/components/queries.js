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
    const sortedPredictionsByName = predictions.sort((a, b) => (a.Author > b.Author) ? -1 : 1)
    console.log(`🔮🔮🔮 predictions: 🔮🔮🔮`);
    console.dir(predictions);
    setPredictions(sortedPredictionsByName);
  } catch (err) {
    console.log('error fetching predictions:');
    console.log(err);
  }
}

export async function fetchAllPredictionsByStatus(queryStatus, setPredictions) {
  try {
    const predictionData = await API.graphql(
      graphqlOperation(listPredictions, {
        filter: {
          status: {
            eq: queryStatus,
          },
        },
      })
    );
    const predictions = predictionData.data.listPredictions.items;
    const sortedPredictionsByYear = predictions.sort((a, b) => (a.Year > b.Year) ? 1 : -1)
    console.log(`🔮🔮🔮 predictions: 🔮🔮🔮`);
    console.dir(predictions);
    setPredictions(sortedPredictionsByYear);
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
    const sortedPredictionsByYear = predictions.sort((a, b) => (a.Year > b.Year) ? -1 : 1)
    console.log(`🔮🔮🔮 predictions: 🔮🔮🔮`);
    console.dir(predictions);
    setPredictions(sortedPredictionsByYear);
  } catch (err) {
    console.log('error fetching predictions:');
    console.log(err);
  }
}

export async function fetchAllPredictionsByCategory(queryCategory, setPredictions) {
  try {
    const predictionData = await API.graphql(
      graphqlOperation(listPredictions, {
        filter: {
          category: {
            eq: queryCategory,
          },
        },
      })
    );
    const predictions = predictionData.data.listPredictions.items;
    const sortedPredictionsByYear = predictions.sort((a, b) => (a.Year > b.Year) ? -1 : 1)
    console.log(`🔮🔮🔮 predictions: 🔮🔮🔮`);
    console.dir(predictions);
    setPredictions(sortedPredictionsByYear);
  } catch (err) {
    console.log('error fetching predictions:');
    console.log(err);
  }
}