/**
 * @namespace FluxEcoBindingHttp
 */

/**
 *  @typedef {Object} FluxEcoBindingHttp.HttpPolicy - Configuration for HTTP policies.
 *  @property {string} path - The path the policy should be applied to.
 *  @property {Array<string>} requiredHeaders - List of required headers for requests.
 *  @property {Array<string>} allowedHeaders - List of allowed headers for requests.
 *  @property {string} allowedIps - List of allowed IPs for requests.
 */

/**
 *  @typedef {Object} FluxEcoBindingHttp.HttpServer - Configuration for the HTTP server.
 *  @property {string} port - The port to run the server on.
 *  @property {string} host - The host to run the server on.
 */

/**
 *  @typedef {Object} FluxEcoBindingHttp.HttpRequestTarget
 *  @property {FluxEcoBindingHttp.HttpServer} server
 *  @property {string} basePath
 */

/**
 * @typedef {Object} FluxEcoBindingHttp.HttpStaticRoute
 * @property {string} contentType - The content type of the route.
 */


/**
 * @typedef {Object} FluxEcoBindingHttp.HttpApiRoute
 * @property {FluxEcoBindingHttp.HttpContentType} contentType - The content type of the route.
 * @property {array} [parametersNames] - The parameters of the route.
 * @property {string} actionName - The name of the action.
 * @property {Array<string>} required - The required properties of the route.
 */

/**
 * @typedef {string} FluxEcoBindingHttp.HttpContentType
 */


/**
 @typedef {Object} FluxEcoBindingHttp.HttpServerConfig
 @property {FluxEcoBindingHttp.HttpServer} server - Configuration for the HTTP server.
 @property {FluxEcoBindingHttp.HttpPolicy|null} policies - Policies to be applied to requests.
 @property {Object} routes - HTTP routes configuration.
 @property {Object.<string,FluxEcoBindingHttp.HttpStaticRouteConfiguration>} routes.static - Configuration for static routes.
 @property {Object.<string,FluxEcoBindingHttp.HttpApiRoute>} routes.api - Configuration for API routes.
 */
