import React from "react"
import { Router } from "@reach/router";
import { Route, RouteInfo } from "./Route"
import MainLayout from "components/organisms/Layout/MainLayout"
import Home from "components/pages/Home"

const navigationGuards = {
    layout: (to: RouteInfo, from?: RouteInfo): Promise<string | boolean> => {
        return new Promise((resolve) => {
            if (to && (to.fullPath === '/*' || to.fullPath === '/')) {
                return resolve(`/home`)
            }
            return resolve(true)
        })
    },
    app: async (to: RouteInfo, from?: RouteInfo): Promise<string | boolean> => {
        // do auth & other checks here
        return true
    }
}


export const AppRouter = {
    layout: (
        <Router>
            <Route path="/*" guard={navigationGuards.layout} component={MainLayout}/>
        </Router>
    ),
    main: (
        <Router>
            <Route guard={navigationGuards.app} path="home" component={Home}/>
        </Router>
    )
}
