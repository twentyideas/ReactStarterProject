/* Button auto-generated by npm run generator */
import { Theme, Button, CircularProgress } from "@material-ui/core"
import { ButtonProps } from "@material-ui/core/Button"
import { makeStyles, CSSProperties } from "@material-ui/styles"
import clsx from "clsx"
import React from "react"

export interface BtnProps extends Omit<ButtonProps, "onClick"> {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode

    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
}

const useStyles = makeStyles((theme: Theme) => ({
    buttonAtom: {
        position: "relative"
    },
    spinnerContainer: {
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}))

const Btn: React.FC<BtnProps> = props => {
    const classes = useStyles()
    const className = clsx([classes.buttonAtom, props.className])

    const [promiseRunning, setPromiseRunning] = React.useState(false)
    const aliveRef = React.useRef(true)

    React.useEffect(() => {
        // on dismount
        return () => {
            aliveRef.current = false
        }
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            setPromiseRunning(true)
            Promise.resolve(props.onClick(e)).finally(() => {
                if (aliveRef.current) {
                    setPromiseRunning(false)
                }
            })
        }
    }

    let content
    if (!promiseRunning) {
        content = props.children
    } else {
        content = (
            <>
                <div style={{ opacity: 0 }}>{props.children}</div>
                <div className={classes.spinnerContainer}>
                    <CircularProgress size={24} />
                </div>
            </>
        )
    }

    return (
        <Button
            {...props}
            className={className}
            style={props.style}
            onClick={handleClick}
            disabled={promiseRunning || props.disabled}
            color={props.color || "primary"}
            variant={props.variant || "contained"}
        >
            {content}
        </Button>
    )
}

export default Btn
