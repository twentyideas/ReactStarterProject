/* TopBar auto-generated by npm run generator */
import { Theme, AppBar, Toolbar } from "@material-ui/core"
import { makeStyles, CSSProperties } from "@material-ui/styles"
import clsx from "clsx"
import { observer } from "mobx-react"
import React from "react"
import Store from "store/Store"
import { useRootClasses } from "style"
import { getPageName } from "Router"

interface TopBarProps {
    className?: string
    style?: CSSProperties
}

const useStyles = makeStyles((theme: Theme) => ({
    topBar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        minHeight: theme.spacing(8)
    }
}))

const TopBar: React.FC<React.PropsWithChildren<TopBarProps>> = (props: React.PropsWithChildren<TopBarProps>) => {
    const classes = useStyles()
    const { row, itemsCenter, flexGrow, textCenter } = useRootClasses()
    const className = clsx(classes.topBar, props.className)

    let pageName = getPageName(Store.route.state.location.pathname.replace("/", "") || "landing")
    return (
        <div className={className}>
            <AppBar className={className}>
                <Toolbar>
                    <div>React Starter App</div>
                    <div className={clsx(flexGrow, textCenter)}>{pageName}</div>
                    <div className={clsx(row, itemsCenter)}>{new Date(Store.appContext.state.time.now).toLocaleString()}</div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default observer(TopBar)
