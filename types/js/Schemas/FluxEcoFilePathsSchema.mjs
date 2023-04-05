/**
 * FluxEcoFilePathsSchema
 *
 * @typedef {Object} FluxEcoFilePathsSchema
 * @property {Object.<string, FluxEcoFilePathSchema>} - Configuration for public files, where the key is the directory- or file-path
 */

/**
 * @typedef {Object} FluxEcoFilePathSchema
 * @property {string} pathType - The path type: file|directory
 * @property {string} contentType - The content type of the file(s).
 */