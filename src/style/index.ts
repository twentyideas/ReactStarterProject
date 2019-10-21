import { createMuiTheme, makeStyles, Theme as MuiTheme } from "@material-ui/core/styles"
import jss from "jss"
import jssPluginGlobal from "jss-plugin-global"

import Border from "./classes/Border"
import Color from "./classes/Color"
import Flex from "./classes/Flex"
import Handy from "./classes/Handy"
import MarginPadding from "./classes/MarginPadding"
import Opacity from "./classes/Opacity"
import Positional from "./classes/Positional"
import Shadow from "./classes/Shadow"
import TextAlignment from "./classes/TextAlignment"
import breakpoints from "./config/breakpoints"
import { overrides, props } from "./config/overridesAndProps"
import palette from "./config/palette"
import spacing from "./config/spacing"
import typography from "./config/typography"

jss.use(jssPluginGlobal())

export const Theme = createMuiTheme({
    typography,
    palette,
    breakpoints,
    spacing,
    overrides,
    props
})

function useClasses(theme: MuiTheme) {
    return makeStyles({
        /* make sure the headers & font matches what we told MUI */
        "@global": {
            body: {
                fontFamily: theme.typography.fontFamily
            },
            h1: theme.typography.h1,
            h2: theme.typography.h2,
            h3: theme.typography.h3,
            h4: theme.typography.h4,
            h5: theme.typography.h5,
            h6: theme.typography.h6
        },
        ...Border(),
        ...Color(theme.palette),
        ...Flex(),
        ...Handy(),
        ...MarginPadding(theme.spacing),
        ...Opacity(),
        ...Positional(),
        ...TextAlignment(),
        ...Shadow()
    })
}

export const useRootClasses = useClasses(Theme)
