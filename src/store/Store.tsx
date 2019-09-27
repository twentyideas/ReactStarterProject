import AppContext from "./modules/AppContext"
import Route from "./modules/Route"

export class Store {
    appContext: AppContext
    route: Route

    constructor() {
        this.appContext = new AppContext()
        this.route = new Route()
    }

    async init() {
        const promises = [
            this.appContext.init(this),
            this.route.init(this),
        ]
        return Promise.all(promises)
    }
}

export default new Store();