import typography from "./config/typography.json"
import spacing from "./config/spacing.json"
import palette from "./config/palette.json"
import breakpoints from "./config/breakpoints.json"
import { createMuiTheme, makeStyles, Theme as MuiTheme } from '@material-ui/core/styles'
import { TypographyStyleOptions } from "@material-ui/core/styles/createTypography"

import Border from "./classes/Border"
import Color from "./classes/Color"
import Flex from "./classes/Flex"
import Handy from "./classes/Handy"
import MarginPadding from "./classes/MarginPadding"
import Opacity from "./classes/Opacity"
import Positional from "./classes/Positional"
import TextAlignment from "./classes/TextAlignment"
import Shadow from "./classes/Shadow"
import jss from "jss"
import jssPluginGlobal from "jss-plugin-global"

jss.use(jssPluginGlobal())

function getTheme() {
    const theme = createMuiTheme({
        typography: {
            fontFamily: typography.fontFamily,
            htmlFontSize: typography.htmlFontSize,
            fontWeightLight: typography.fontWeightLight,
            fontWeightRegular: typography.fontWeightRegular,
            fontWeightMedium: typography.fontWeightMedium,
            fontWeightBold: typography.fontWeightBold,
            h1: typography.h1 as TypographyStyleOptions,
            h2: typography.h2 as TypographyStyleOptions,
            h3: typography.h3 as TypographyStyleOptions,
            h4: typography.h4 as TypographyStyleOptions,
            h5: typography.h5 as TypographyStyleOptions,
            h6: typography.h6 as TypographyStyleOptions,
            subtitle1: typography.subtitle1 as TypographyStyleOptions,
            subtitle2: typography.subtitle2 as TypographyStyleOptions,
            body1: typography.body1 as TypographyStyleOptions,
            body2: typography.body2 as TypographyStyleOptions,
            button: typography.button as TypographyStyleOptions,
            caption: typography.caption as TypographyStyleOptions,
            overline: typography.overline as TypographyStyleOptions
        },
        spacing: spacing.value
    })

    /* passing it in doesnt seem to work */
    theme.palette.common = palette.common
    theme.palette.background = palette.background
    theme.palette.primary = palette.primary
    theme.palette.secondary = palette.secondary
    theme.palette.error = palette.error
    theme.palette.text = palette.text

    theme.breakpoints.values = breakpoints

    return theme
}

function useClasses(theme: MuiTheme) {

    return makeStyles({
        /* make sure the headers & font matches what we told MUI */
        '@global': {
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


/* exports */
export const Theme = getTheme()
export const useRootClasses = useClasses(Theme)
