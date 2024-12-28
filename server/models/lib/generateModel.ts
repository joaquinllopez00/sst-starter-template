import buildTableName from "./buildTableName";
import initModel from "./initModel";
import initSchema from "./initSchema";

interface ModelIndex {
  indexObj: { global: boolean; name: string };
  key: string;
}

function generateModel(
  tableName: string,
  primaryKey: string,
  sortKey?: string | null,
  index: ModelIndex | ModelIndex[] | null = null,
) {
  const prefix = process.env.APP_NAME;
  const stage = process.env.APP_STAGE;
  const table = buildTableName(prefix, stage, tableName);
  const schema = initSchema(primaryKey, sortKey, index);
  const Model = initModel(table, schema);

  return Model;
}

export default generateModel;
