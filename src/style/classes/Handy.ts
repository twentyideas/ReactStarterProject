import { assign } from "lodash"
import { CSSProperties } from "@material-ui/styles"

export default () => { // creates handy classes that are good to use
    const noSelect: CSSProperties = {
        userSelect: 'none',
        msUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none'
    }

    const pointer: CSSProperties = assign({}, noSelect, { cursor: "pointer" })
    
    return {
        noSelect,
        pointer,
        block: { display: 'block !important' } as CSSProperties,
        inlineBlock: { display: 'inline-block !important' } as CSSProperties,
        invisible: { visibility: 'hidden' } as CSSProperties,
        noDisplay: { display: 'none' } as CSSProperties,
        separatorX: {
            height: '1px',
            width: '100%',
            flex: '0 0 1px',
            background: '$color-text-hint'
        } as CSSProperties,
        separatorY: {
            width: '1px',
            flex: '0 0 1px',
            alignSelf: 'stretch',
            background: '$color-text-hint'
        } as CSSProperties,
        overflowHidden: { overflow: 'hidden' }  as CSSProperties,
        overflowAuto: { overflow: 'auto' }  as CSSProperties,
    }
}
