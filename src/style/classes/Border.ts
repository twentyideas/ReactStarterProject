import { CSSProperties } from "@material-ui/styles"

export default () => {
    const shadow = `0 0 4px 2px rgba(black, 0.1)`

    return {
        bordered: { border: 'solid 1px' } as CSSProperties,
        roundedBorder: { borderRadius: '5px !important' } as CSSProperties,
        flatBorder: { borderRadius: '0 !important' } as CSSProperties,
        circleBorder: { borderRadius: '50% !important' } as CSSProperties,
    }
}