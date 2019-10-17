import AppContext from "./modules/AppContext"
import Route from "./modules/Route"
import Toasts from "./modules/Toasts"

export class Store {
    appContext: AppContext
    route: Route
    toasts: Toasts

    constructor() {
        this.appContext = new AppContext()
        this.route = new Route()
        this.toasts = new Toasts()
    }

    async init() {
        const promises = [this.appContext.init(this), this.route.init(this), this.toasts.init(this)]
        return Promise.all(promises)
    }
}

export default new Store()
