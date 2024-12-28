import dynamoose from './dbHelper';

function initModel(modelName, schema) {
  return dynamoose.model(modelName, schema, { create: false });
}

export default initModel;
