export default class FluxEcoAdapters {



    /**
     * @type {FluxEcoAction} readServerApiDefinitionAction
     */
    #readServerApiDefinitionAction;

    /**
     * @type {FluxEcoApiDefinition} serverApiDefinition
     */
    #serverApiDefinition;

    constructor() {

    }


    /**
     * @return {FluxEcoAdapters}
     */
    static new(

    ) {
        return new this();
    }

    /**
     * @return {Promise<void>}
     */
    async #loadServerApiDefinition() {
        this.#serverApiDefinition = await this.#handleRequest(

        )
    }


    /**
     *
     * @param {string} actionName
     * @param {object|null} parameters
     * @return {Promise<any>}
     */
    async handle(actionName, parameters) {
        const urlSearchParameters = new URLSearchParams(parameters);
        const response = await fetch([requestUrl, urlSearchParameters.toString()].join("?"));
        return await response.json();
    }


    readServerApiDefinition() {

    }

    /**
     * @return {FluxEcoLearnplacesFrontendClientOutbounds}
     */
    async get outbounds() {
        if (this.#outbounds) {
            return this.#outbounds;
        }

        return {
            readPageState: (id) => this.#handleRequest(
                this.serverApiDefinitions.actionsDefinition.readState.path,
                () => {
                    const parameters = {}
                    parameters[this.serverApiDefinitions.actionsDefinition.readState.parameters.id.name] = id;
                    parameters[this.serverApiDefinitions.actionsDefinition.readState.parameters.itemName.name] = "page";
                    return {
                        parameters
                    }
                }
            )
        }
    }

    /**
     * @return {FluxEcoLearnplacesFrontendServerApiDefinition}
     */
    async get serverApiDefinitions() {
        if (this.#serverApiDefinition === null) {
            const requestUrl = new URL("readDefinition", this.#serverApiBasePath);
            this.#serverApiDefinition = await this.#handleRequest(requestUrl.toString(), null)
        }

        return this.#serverApiDefinition;
    }


}