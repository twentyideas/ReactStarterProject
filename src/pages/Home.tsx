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
    homePage: {
        backgroundColor: theme.palette.background.default
    } as CSSProperties
}))

const Home: React.FC<RouteComponentProps<HomeProps>> = props => {
    const classes = useStyles()
    const rc = useRootClasses()

    return <div className={classes.homePage}>Home Page</div>
}

export default observer(Home)
