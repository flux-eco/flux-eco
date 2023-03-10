import "./flux-eco-binding-http-types.mjs"

/**
 * @typedef {Object} FluxEcoAppConfig
 * @property {FluxEcoHttpServerConfig} inboundsConfig.httpBindingConfig
 * @property {FluxEcoApiConfig} apiConfig
 * @property {FluxEcoOutboundsConfig} outboundsConfigs
 */

/**
 * @typedef {FluxEcoBindingHttp.HttpServerConfig} FluxEcoHttpServerConfig
 */

/**
 * @typedef {Object} FluxEcoApiConfig
 * @property {Object.<string, FluxEcoApiOutboundsMapping>} outbounds - Defines the mappings for outbound calls.
 */

/**
 * @typedef {Object} FluxEcoOutboundsConfig
 */

/**
 * @typedef {Object}  FluxEcoApiOutboundsMapping
 * @property {string} actionName - The name of the action.
 * @property {Object.<string, string>} parametersMapping - An object containing key-value
 */



/**
 * @namespace FluxEcoApp
 */

/**
 * FluxEcoApp configuration schema.
 *
 * @typedef {Object} FluxEcoApp.Config
 * @property {string} name - The name of the FluxEco app.
 * @property {object} inboundsConfig - The inbound configuration of the FluxEco app.
 * @property {object} inboundsConfig.httpBindingConfigs - The HTTP binding configuration of the FluxEco app.
 * @property {object} api - The API configuration of the FluxEco app.
 * @property {object} api.config - The API config schema of the FluxEco app.
 * @property {object} api.actions - The actions of the FluxEco app.
 * @property {object} outboundsConfigs - The outbound configuration of the FluxEco app.
 * @property {object} outboundsConfigs.flux-eco-http-proxy-request - The HTTP proxy request configuration of the FluxEco app.
 */



