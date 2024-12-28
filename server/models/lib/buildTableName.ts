const buildTableName = (prefix, stage, table) => `${stage}-${prefix}-${table}`;

export default buildTableName;
