/* Home auto-generated by npm run generator */
import { RouteComponentProps } from "@reach/router"
import { Theme } from "@material-ui/core"
import { makeStyles, CSSProperties } from "@material-ui/styles"
import { observer } from "mobx-react"
import React from "react"
import Store from "store/Store"
import { useRootClasses } from "style"

interface HomeProps {}

const useStyles = makeStyles((theme: Theme) => ({
    homePage: { backgroundColor: theme.palette.background.default } as CSSProperties
}))

const Home: React.FC<RouteComponentProps<HomeProps>> = props => {
    const classes = useStyles()
    const rc = useRootClasses()

    const s = new Date(Store.appContext.state.time.now).getSeconds()
    const m2 = s % 2 === 0
    const m3 = s % 3 === 0

    return (
        <div className={classes.homePage}>
            Home Page
            <div x-if={m3}>Seconds divisible by 3</div>
            <div x-else-if={m2}>Seconds divisible by 2</div>
            <div x-else>Seconds divisible by 1</div>
        </div>
    )
}

export default observer(Home)
