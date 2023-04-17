/**
 * @typedef {Object} FluxEcoConfig
 * @property {FluxEcoApiDefinition} definitions
 */


/**
 * @typedef {Object} FluxEcoApiDefinition
 * @property {FluxEcoServer} server
 * @property {Object.<string, FluxEcoAction>} actions
 * @property {Object|null} filePaths
 * @property {function}
 */

/**
 * @typedef {Object} FluxEcoAction - A schema for defining an action in FluxEco.
 * @property {string} name
 * @property {string} type - httpRequest, boundedAction
 * @property {string} path - The path of the action.
 * @property {Object.<string, FluxEcoActionParameterDefinition>} parameters - The parameters of the action, with each key being a string and the value being a FluxEcoActionParameterSchema.
 * @property {Object} response - The response of the action.
 * @property {string} response.contentType - The content type of the response.
 */