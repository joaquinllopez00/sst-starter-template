import dynamoose from './dbHelper';

function initSchema(primaryKey, sortKey, index) {
  const schemaOpts = {};

  schemaOpts[primaryKey] = {
    hashKey: true,
    type: String,
  };

  if (sortKey) {
    // schemaOpts[sortKey] = String;
    schemaOpts[sortKey] = {
      rangeKey: true,
      type: String,
    };
  }

  if (index) {
    // Accept an array of indexes
    if (Array.isArray(index)) {
      index.forEach(item => {
        const { key, indexObj } = item;

        schemaOpts[key] = {
          index: indexObj,
          type: String,
        };
      });
    } else {
      // Backwards compatibility to accept a single index
      const { key, indexObj } = index;

      schemaOpts[key] = {
        index: indexObj,
        type: String,
      };
    }
  }

  // console.log('schemaOpts', schemaOpts);
  const schema = new dynamoose.Schema(schemaOpts, {
    saveUnknown: true,
    timestamps: false,
  });

  return schema;
}

export default initSchema;
