/**
 * @namespace FluxEcoBindingHttp
 */

/**
 *  @typedef {Object} HttpPolicy - Configuration for HTTP policies.
 *  @property {string} path - The path the policy should be applied to.
 *  @property {Array<string>} requiredHeaders - List of required headers for requests.
 *  @property {Array<string>} allowedHeaders - List of allowed headers for requests.
 *  @property {string} allowedIps - List of allowed IPs for requests.
 */

/**
 *  @typedef {Object} HttpServer - Configuration for the HTTP server.
 *  @property {string} port - The port to run the server on.
 *  @property {string} host - The host to run the server on.
 */

/**
 *  @typedef {Object} HttpRequestTarget
 *  @property {HttpServer} server
 *  @property {string} basePath
 */

/**
 * @typedef {Object} HttpStaticRouteConfiguration
 * @property {string} contentType - The content type of the route.
 */


/**
 * @typedef {Object} HttpApiRoute
 * @property {HttpContentType} Content-Type - The content type of the route.
 * @property {array} [parametersNames] - The parameters of the route.
 * @property {string} actionName - The name of the action.
 * @property {Array<string>} required - The required properties of the route.
 */

/**
 * @typedef {string} HttpContentType
 */


/**
 @typedef {Object} HttpServerConfig
 @property {HttpServer} server - Configuration for the HTTP server.
 @property {HttpPolicy|null} policies - Policies to be applied to requests.
 @property {Object} routes - HTTP routes configuration.
 @property {Object.<string, Object.<string, HttpStaticRouteConfiguration>>} routes.static - Configuration for static routes.
 @property {Object.<string,HttpApiRoute>} routes.api - Configuration for API routes.
 */
