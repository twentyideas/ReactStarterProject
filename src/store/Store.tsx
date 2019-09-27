import AppContext from "./modules/AppContext"
import Route from "./modules/Route"
import User from "./modules/User"

export class Store {
    appContext: AppContext
    route: Route
    user: User

    constructor() {
        this.appContext = new AppContext()
        this.route = new Route()
        this.user = new User()
    }

    async init() {
        const promises = [
            this.appContext.init(this),
            this.route.init(this),
            this.user.init(this)
        ]
        return Promise.all(promises)
    }
}

export default new Store();