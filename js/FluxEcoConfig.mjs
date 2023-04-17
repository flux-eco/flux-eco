export default class FluxEcoConfig {
    /**
     * @type {string}
     */
    #configUrl;

    /**
     * @type {FluxEcoApiDefinition|null}
     */
    definitions = null;

    /**
     * @type {Object}
     * @property {FluxEcoServer} server
     */
    settings

    /**
     * @type {Object}
     */
    outbounds

    constructor() {
        this.#configUrl = new URL("../assets/json/actions.json", location.href).toString();
    }

    static async read() {
        const obj = new this();
        await obj.#loadConfig();
        return obj;
    }

    /**
     * @return {boolean}
     */
    get hasDefaultAction() {
        return this.definitions.hasOwnProperty("defaultActionName");
    }

    /**
     * @return {string|null}
     */
    get defaultActionName() {
        if (this.hasDefaultAction === false) {
            return null;
        }
        return this.definitions.defaultActionName;
    }

    get actionNames() {
        const actions = this.definitions.actions;
        return Object.values(actions).map(action => action.name);
    }

    get parameterNames() {
        const actions = fluxEcoConfig.definitions.actions;
        const result = {};
        for (const action of Object.values(actions)) {
            const actionName = action.name;
            const parameterNames = Object.keys(action.parameters);
            for (const parameterName of parameterNames) {
                result[`${actionName}: ${parameterName}`] = parameterName;
            }
        }
        return result;
    }

    /**
     * @return {Promise<void>}
     */
    async #loadConfig() {
        const config = await (await fetch(this.#configUrl)).json();
        this.#loadDefinitions(config.definitions);
        this.#loadSettings(config.settings);
    }


    /**
     * @return {void}
     */
    #loadDefinitions(definitions) {
        this.definitions = definitions;
    }

    /**
     * @return {void}
     */
    #loadSettings(settings) {
        this.settings = settings;
    }

    /**
     *
     * @param {string|null} actionName
     * @param {Object|null} parameters
     * @return {Promise<Object>}
     */
    async createActionParametersInstance(
        actionName, parameters
    ) {
        let parametersInstance = {};
        if (actionName === null || parameters === null) {
            return parametersInstance;
        }

        const parameterDefinitions = this.definitions.actions[actionName] ?? {};
        for (const [key, value] of Object.entries(parameters)) {
            if (parameterDefinitions.key && parameterDefinitions.key.type === typeof value) {
                parametersInstance[key] = parameterDefinitions.key
            }
        }
        return parametersInstance;
    }
}