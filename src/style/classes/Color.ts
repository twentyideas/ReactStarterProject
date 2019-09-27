import { CSSProperties } from "@material-ui/styles"
import { Palette } from "@material-ui/core/styles/createPalette"

export default (palette: Palette) => {
    return {
        colorPrimary: { color: palette.primary.main } as CSSProperties,
        colorPrimaryLight: { color: palette.primary.light } as CSSProperties,
        colorPrimaryDark: { color: palette.primary.dark } as CSSProperties,
        colorPrimaryContrast: { color: palette.primary.contrastText } as CSSProperties,
        colorSecondary: { color: palette.secondary.main } as CSSProperties,
        colorSecondaryLight: { color: palette.secondary.light } as CSSProperties,
        colorSecondaryDark: { color: palette.secondary.dark } as CSSProperties,
        colorSecondaryContrast: { color: palette.secondary.contrastText } as CSSProperties,
        colorError: { color: palette.error.main } as CSSProperties,
        colorErrorLight: { color: palette.error.light } as CSSProperties,
        colorErrorDark: { color: palette.error.dark } as CSSProperties,
        colorErrorContrast: { color: palette.error.contrastText } as CSSProperties,
        colorCommonWhite: { color: palette.common.white } as CSSProperties,
        colorCommonBlack: { color: palette.common.black } as CSSProperties,
        colorBackground: { color: palette.background.default } as CSSProperties,
        colorBackgroundPaper: { color: palette.background.paper } as CSSProperties,

        colorText: { color: palette.text.primary } as CSSProperties,
        colorTextSecondary: { color: palette.text.secondary } as CSSProperties,
        colorTextHint: { color: palette.text.hint } as CSSProperties,
        colorTextDisabled: { color: palette.text.disabled } as CSSProperties,

        bgPrimary: { backgroundColor: palette.primary.main } as CSSProperties,
        bgPrimaryLight: { backgroundColor: palette.primary.light } as CSSProperties,
        bgPrimaryDark: { backgroundColor: palette.primary.dark } as CSSProperties,
        bgPrimaryContrast: { backgroundColor: palette.primary.contrastText } as CSSProperties,
        bgSecondary: { backgroundColor: palette.secondary.main } as CSSProperties,
        bgSecondaryLight: { backgroundColor: palette.secondary.light } as CSSProperties,
        bgSecondaryDark: { backgroundColor: palette.secondary.dark } as CSSProperties,
        bgSecondaryContrast: { backgroundColor: palette.secondary.contrastText } as CSSProperties,
        bgError: { backgroundColor: palette.error.main } as CSSProperties,
        bgErrorLight: { backgroundColor: palette.error.light } as CSSProperties,
        bgErrorDark: { backgroundColor: palette.error.dark } as CSSProperties,
        bgErrorContrast: { backgroundColor: palette.error.contrastText } as CSSProperties,

        bgCommonWhite: { backgroundColor: palette.common.white } as CSSProperties,
        bgCommonBlack: { backgroundColor: palette.common.black } as CSSProperties,

        bgBackground: { backgroundColor: palette.background.default } as CSSProperties,
        bgBackgroundPaper: { backgroundColor: palette.background.paper } as CSSProperties,

        bgText: { backgroundColor: palette.text.primary } as CSSProperties,
        bgTextSecondary: { backgroundColor: palette.text.secondary } as CSSProperties,
        bgTextHint: { backgroundColor: palette.text.hint } as CSSProperties,
        bgTextDisabled: { backgroundColor: palette.text.disabled } as CSSProperties,
    }
}