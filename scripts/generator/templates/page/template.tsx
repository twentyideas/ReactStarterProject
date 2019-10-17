/* %name% auto-generated by npm run generator */
import { RouteComponentProps } from "@reach/router"
import { Theme } from "@material-ui/core"
import { makeStyles, CSSProperties } from "@material-ui/styles"
import { observer } from "mobx-react"
import React from "react"
import Store from "store/Store"
import { useRootClasses } from "style"

interface %name%Props {

}

const useStyles = makeStyles((theme: Theme) => ({
    %className%: {
        backgroundColor: theme.palette.background.default
    } as CSSProperties
}))

const %name%: React.FC<RouteComponentProps<%name%Props>> = (props: RouteComponentProps<%name%Props>) => {
    const classes = useStyles()
    const rc = useRootClasses()

    return (
        <div className={classes.%className%}>
            %name% Page
        </div>
    )
}

export default observer(%name%)