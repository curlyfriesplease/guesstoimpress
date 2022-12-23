/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrediction = /* GraphQL */ `
  query GetPrediction($id: ID!) {
    getPrediction(id: $id) {
      ID
      Author
      category
      info
      Prediction
      status
      Year
      id
      createdAt
      updatedAt
    }
  }
`;
export const listPredictions = /* GraphQL */ `
  query ListPredictions(
    $filter: ModelPredictionFilterInput
    $nextToken: String
  ) {
    listPredictions(filter: $filter, limit: 1000, nextToken: $nextToken) {
      items {
        ID
        Author
        category
        info
        Prediction
        status
        Year
      }
      nextToken
    }
  }
`;
