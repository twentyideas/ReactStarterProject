import { observable, computed, action } from "mobx"
import Base from "./Base"
import { Store } from "../Store"

export default class %name% extends Base {
    /* put your computed getter names in here because they are non-enumerable. The debug component needs this to render them on f7. */
    _getters = ["displayName"]

    /* -----------------------------
        observable state properties. e.g., @observable name: string = ""
       ----------------------------- */
    @observable firstName: string = ""
    @observable lastName: string = ""
    
    /* -----------------------------
        computed getters here
       ----------------------------- */
    @computed
    get displayName() {
        return [this.firstName, this.lastName].filter(Boolean).join(' ')
    }

    /* -----------------------------
        actions here
       ----------------------------- */
    @action
    setName = (v: string) => {
        const [firstName, lastName] = v.split(' ')
        if (firstName) {
            this.firstName = firstName
        }
        if (lastName) {
            this.lastName = lastName
        }
    }

    /* ----------------------------
        init method here. Called by the store. 
        Delete this if you don't want to do anything special on this module's creation.
    ------------------------------- */
    async init = (store: Store) => {
        await super.init(store)
        return Promise.resolve()
    }
}

