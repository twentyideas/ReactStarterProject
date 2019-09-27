/* Main auto-generated by npm run generator */
import { RouteComponentProps } from "@reach/router"
import { Theme } from "@material-ui/core"
import { makeStyles, CSSProperties } from "@material-ui/styles"
import { observer } from "mobx-react"
import clsx from "clsx"
import TopBar from "components/organisms/Layout/TopBar"
import React from "react"
import { AppRouter } from "Router"
import { useRootClasses } from "style"

/* this is really a page */
interface MainProps extends RouteComponentProps {
    className?: string
    style?: CSSProperties
}

const useStyles = makeStyles((theme: Theme) => ({
    mainLayout: {
        width: '100vw',
        height: '100vh',
        background: theme.palette.common.white
    },
    topBar: {
        flex: `0 0 ${theme.spacing(8)}px`
    },
    mainRouter: {
        background: theme.palette.background.default,
        paddingTop: theme.spacing(1),
        flex: `0 0 calc(100vh - ${theme.spacing(8)}px)`
    }
}))

const MainLayout: React.FC<React.PropsWithChildren<MainProps>> = (props: React.PropsWithChildren<MainProps>) => {
    const classes = useStyles();
    const rootClasses = useRootClasses();
    const className = clsx(classes.mainLayout, props.className, rootClasses.column, rootClasses.overflowHidden)

    return (
        <div className={className}>
            <TopBar className={classes.topBar}/>
            <div className={clsx(classes.mainRouter, rootClasses.overflowAuto, rootClasses.ph1)}>
                {AppRouter.main}
            </div>
        </div>
    )
}

export default observer(MainLayout)