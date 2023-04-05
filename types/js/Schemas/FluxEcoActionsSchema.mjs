/**
 * @typedef {Object} FluxEcoActionsSchema
 * @property {Object.<string, FluxEcoActionSchema>}
 */

/**
 * @typedef {Object} FluxEcoActionSchema - A schema for defining an action in FluxEco.
 * @property {string} path - The path of the action.
 * @property {Object.<string, FluxEcoActionParameterSchema>} parameters - The parameters of the action, with each key being a string and the value being a FluxEcoActionParameterSchema.
 * @property {Object} response - The response of the action.
 * @property {string} response.contentType - The content type of the response.
 */

/**
 * @typedef {Object} FluxEcoActionParameterSchema - A schema for defining a parameter in a FluxEco action.
 * @property {string} name - The location of the parameter ("path" or "query").
 * @property {string} in - The location of the parameter ("path" or "query").
 * @property {string} type - The data type of the parameter ("string" or "number").
 */
