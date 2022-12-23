/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrediction = /* GraphQL */ `
  mutation CreatePrediction(
    $input: CreatePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    createPrediction(input: $input, condition: $condition) {
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
export const updatePrediction = /* GraphQL */ `
  mutation UpdatePrediction(
    $input: UpdatePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    updatePrediction(input: $input, condition: $condition) {
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
export const deletePrediction = /* GraphQL */ `
  mutation DeletePrediction(
    $input: DeletePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    deletePrediction(input: $input, condition: $condition) {
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
