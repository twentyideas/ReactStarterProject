import Base from "./Base"
import { capitalize, isEqual } from "lodash"
import { observable, computed, action, toJS } from "mobx"

interface UserState {
    id?: string
    firstName: string
    lastName: string
    email: string
    displayName: string
    color: string
    pts: number
}

export default class User extends Base {
    @observable state: UserState = {
        id: undefined,
        firstName: "",
        lastName: "",
        email: "",
        displayName: "",
        color: "",
        pts: 0,
    }


    @computed
    get name() {
        return [this.state.firstName, this.state.lastName].filter(Boolean).map(capitalize).join(' ')
    }

    @computed
    get version() {
        return this.store && this.store.appContext.state.version
    }

    @action
    update(payload: Partial<UserState>) {
        const newState = { ...this.state, ...payload }
        if (!isEqual(toJS(this.state), newState)) {
            this.state = newState
        }
    }
}

