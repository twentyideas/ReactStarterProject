/* %name% auto-generated by npm run generator */
import { Theme } from "@material-ui/core"
import { makeStyles, CSSProperties } from "@material-ui/styles"
import { observer } from "mobx-react"
import clsx from "clsx"
import React from "react"
import Store from "store/Store"
import { useRootClasses } from "style"


interface %name%Props {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    %className%: {
        backgroundColor: theme.palette.background.default
    } as CSSProperties
}))

const %name%: React.FC<%name%Props> = (props: %name%Props) => {
    const classes = useStyles()
    const rc = useRootClasses()
    const className = clsx(classes.%className%, props.className)

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default observer(%name%)