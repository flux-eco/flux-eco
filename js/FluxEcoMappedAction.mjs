export default class FluxEcoMappedAction {

    /**
     * @type {FluxEcoActionMapping}
     */
    #mapping


    /**
     * @param {FluxEcoActionMapping} mapping
     */
    constructor(
        {mapping}
    ) {
        this.#mapping = mapping;
    }


    /**
     * @param {FluxEcoActionMapping} mapping
     */
    static new(
        {mapping} = null
    ) {

    }

    process(srcParameters) {
        const mappedParameters = null;
        if (this.#mapping.parametersMapping !== null) {
            const mappedParameters = this.#mapParameters(srcParameters);
        }
        return this.#mapping.handle(mappedParameters);
    }

    #mapParameters(srcParameters) {
        const mappedParameters = null;
        for (const [newKey, definition] of Object.entries(this.#mapping.parametersMapping)) {
            switch (typeof definition.fromSrc) {
                case "function": {
                    mappedParameters[newKey] = this.#toNewType(definition.fromSrc(srcParameters), definition.newSchema);
                    break;
                }
                case "string": {
                    mappedParameters[newKey] = this.#toNewType(srcParameters[definition.fromSrc], definition.newSchema);
                    break;
                }
            }
        }
        return mappedParameters;
    }

    /**
     * @param newValue
     * @param {object|null} newSchema
     * @param {string} newSchema.type
     * @return {number|any|boolean|string}
     */
    #toNewType(newValue, newSchema) {
        if (newSchema !== null) {
            switch (newSchema.type) {
                case "string":
                    return String(newValue);
                case "number":
                    return Number(newValue);
                case "boolean":
                    return Boolean(newValue);
                case "object":
                    return Object(newValue);
            }
        }
        return newValue;
    }
}