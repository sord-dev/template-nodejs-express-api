const ajvInstance = require('./ajv-instance');

const schema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        completed: { type: 'boolean' }
    },
    required: ['title', 'description', 'completed'],
    additionalProperties: false
};

module.exports = ajvInstance.compile(schema);