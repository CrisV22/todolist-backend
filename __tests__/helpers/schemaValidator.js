const { Validator } = require('jsonschema');

const v = new Validator();
const assert = require('assert');

function validateSchema(res, schema) {
    const result = v.validate(res, schema);
    if (result.valid) {
        console.log('Response is valid according to the schema.');
    } else {
        console.log(JSON.stringify(res, null, 2));
        console.error('Response validation failed:', result.errors);
        result.errors.forEach(error => {
            console.error(`Error: ${error.property} ${error.message}`);
        });
        assert.fail('Response validation failed');
    }

    return result.valid;
}

module.exports = {
    validateSchema,
};