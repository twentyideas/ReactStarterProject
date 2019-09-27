import { CSSProperties } from "@material-ui/styles"

const m = {
    a: (n: number) => ({ margin: `${n}px !important` } as CSSProperties),
    t: (n: number) => ({ marginTop: `${n}px !important` } as CSSProperties),
    r: (n: number) => ({ marginRight: `${n}px !important` } as CSSProperties),
    b: (n: number) => ({ marginBottom: `${n}px !important` } as CSSProperties),
    l: (n: number) => ({ marginLeft: `${n}px !important` } as CSSProperties),
    h: (n: number) => ({ marginLeft: `${n}px !important`, marginRight: `${n}px  !important` } as CSSProperties),
    v: (n: number) => ({ marginTop: `${n}px !important`, marginBottom: `${n}px  !important` } as CSSProperties),
}

const p = {
    a: (n: number) => ({ padding: `${n}px !important` } as CSSProperties),
    t: (n: number) => ({ paddingTop: `${n}px !important` } as CSSProperties),
    r: (n: number) => ({ paddingRight: `${n}px !important` } as CSSProperties),
    b: (n: number) => ({ paddingBottom: `${n}px !important` } as CSSProperties),
    l: (n: number) => ({ paddingLeft: `${n}px !important` } as CSSProperties),
    h: (n: number) => ({ paddingLeft: `${n}px !important`, paddingRight: `${n}px  !important` } as CSSProperties),
    v: (n: number) => ({ paddingTop: `${n}px !important`, paddingBottom: `${n}px  !important` } as CSSProperties),
}


// Doing it this way so it is typesafe...
export default (spacing: (n: number) => number) => {
    return {
        // MARGIN CLASSES
        ma0: m.a(spacing(0)),
        mt0: m.t(spacing(0)),
        mr0: m.r(spacing(0)),
        mb0: m.b(spacing(0)),
        ml0: m.l(spacing(0)),
        mh0: m.h(spacing(0)),
        mv0: m.v(spacing(0)),

        ma1: m.a(spacing(1)),
        mt1: m.t(spacing(1)),
        mr1: m.r(spacing(1)),
        mb1: m.b(spacing(1)),
        ml1: m.l(spacing(1)),
        mh1: m.h(spacing(1)),
        mv1: m.v(spacing(1)),

        ma2: m.a(spacing(2)),
        mt2: m.t(spacing(2)),
        mr2: m.r(spacing(2)),
        mb2: m.b(spacing(2)),
        ml2: m.l(spacing(2)),
        mh2: m.h(spacing(2)),
        mv2: m.v(spacing(2)),

        ma3: m.a(spacing(3)),
        mt3: m.t(spacing(3)),
        mr3: m.r(spacing(3)),
        mb3: m.b(spacing(3)),
        ml3: m.l(spacing(3)),
        mh3: m.h(spacing(3)),
        mv3: m.v(spacing(3)),

        ma4: m.a(spacing(4)),
        mt4: m.t(spacing(4)),
        mr4: m.r(spacing(4)),
        mb4: m.b(spacing(4)),
        ml4: m.l(spacing(4)),
        mh4: m.h(spacing(4)),
        mv4: m.v(spacing(4)),

        ma5: m.a(spacing(5)),
        mt5: m.t(spacing(5)),
        mr5: m.r(spacing(5)),
        mb5: m.b(spacing(5)),
        ml5: m.l(spacing(5)),
        mh5: m.h(spacing(5)),
        mv5: m.v(spacing(5)),

        ma6: m.a(spacing(6)),
        mt6: m.t(spacing(6)),
        mr6: m.r(spacing(6)),
        mb6: m.b(spacing(6)),
        ml6: m.l(spacing(6)),
        mh6: m.h(spacing(6)),
        mv6: m.v(spacing(6)),

        ma7: m.a(spacing(7)),
        mt7: m.t(spacing(7)),
        mr7: m.r(spacing(7)),
        mb7: m.b(spacing(7)),
        ml7: m.l(spacing(7)),
        mh7: m.h(spacing(7)),
        mv7: m.v(spacing(7)),

        ma8: m.a(spacing(8)),
        mt8: m.t(spacing(8)),
        mr8: m.r(spacing(8)),
        mb8: m.b(spacing(8)),
        ml8: m.l(spacing(8)),
        mh8: m.h(spacing(8)),
        mv8: m.v(spacing(8)),

        ma9: m.a(spacing(9)),
        mt9: m.t(spacing(9)),
        mr9: m.r(spacing(9)),
        mb9: m.b(spacing(9)),
        ml9: m.l(spacing(9)),
        mh9: m.h(spacing(9)),
        mv9: m.v(spacing(9)),

        ma10: m.a(spacing(10)),
        mt10: m.t(spacing(10)),
        mr10: m.r(spacing(10)),
        mb10: m.b(spacing(10)),
        ml10: m.l(spacing(10)),
        mh10: m.h(spacing(10)),
        mv10: m.v(spacing(10)),

        ma11: m.a(spacing(11)),
        mt11: m.t(spacing(11)),
        mr11: m.r(spacing(11)),
        mb11: m.b(spacing(11)),
        ml11: m.l(spacing(11)),
        mh11: m.h(spacing(11)),
        mv11: m.v(spacing(11)),

        ma12: m.a(spacing(12)),
        mt12: m.t(spacing(12)),
        mr12: m.r(spacing(12)),
        mb12: m.b(spacing(12)),
        ml12: m.l(spacing(12)),
        mh12: m.h(spacing(12)),
        mv12: m.v(spacing(12)),

        ma13: m.a(spacing(13)),
        mt13: m.t(spacing(13)),
        mr13: m.r(spacing(13)),
        mb13: m.b(spacing(13)),
        ml13: m.l(spacing(13)),
        mh13: m.h(spacing(13)),
        mv13: m.v(spacing(13)),

        ma14: m.a(spacing(14)),
        mt14: m.t(spacing(14)),
        mr14: m.r(spacing(14)),
        mb14: m.b(spacing(14)),
        ml14: m.l(spacing(14)),
        mh14: m.h(spacing(14)),
        mv14: m.v(spacing(14)),

        ma15: m.a(spacing(15)),
        mt15: m.t(spacing(15)),
        mr15: m.r(spacing(15)),
        mb15: m.b(spacing(15)),
        ml15: m.l(spacing(15)),
        mh15: m.h(spacing(15)),
        mv15: m.v(spacing(15)),

        ma16: m.a(spacing(16)),
        mt16: m.t(spacing(16)),
        mr16: m.r(spacing(16)),
        mb16: m.b(spacing(16)),
        ml16: m.l(spacing(16)),
        mh16: m.h(spacing(16)),
        mv16: m.v(spacing(16)),

        ma17: m.a(spacing(17)),
        mt17: m.t(spacing(17)),
        mr17: m.r(spacing(17)),
        mb17: m.b(spacing(17)),
        ml17: m.l(spacing(17)),
        mh17: m.h(spacing(17)),
        mv17: m.v(spacing(17)),

        ma18: m.a(spacing(18)),
        mt18: m.t(spacing(18)),
        mr18: m.r(spacing(18)),
        mb18: m.b(spacing(18)),
        ml18: m.l(spacing(18)),
        mh18: m.h(spacing(18)),
        mv18: m.v(spacing(18)),

        ma19: m.a(spacing(19)),
        mt19: m.t(spacing(19)),
        mr19: m.r(spacing(19)),
        mb19: m.b(spacing(19)),
        ml19: m.l(spacing(19)),
        mh19: m.h(spacing(19)),
        mv19: m.v(spacing(19)),

        ma20: m.a(spacing(20)),
        mt20: m.t(spacing(20)),
        mr20: m.r(spacing(20)),
        mb20: m.b(spacing(20)),
        ml20: m.l(spacing(20)),
        mh20: m.h(spacing(20)),
        mv20: m.v(spacing(20)),

        // PADDING CLASSES
        pa0: p.a(spacing(0)),
        pt0: p.t(spacing(0)),
        pr0: p.r(spacing(0)),
        pb0: p.b(spacing(0)),
        pl0: p.l(spacing(0)),
        ph0: p.h(spacing(0)),
        pv0: p.v(spacing(0)),

        pa1: p.a(spacing(1)),
        pt1: p.t(spacing(1)),
        pr1: p.r(spacing(1)),
        pb1: p.b(spacing(1)),
        pl1: p.l(spacing(1)),
        ph1: p.h(spacing(1)),
        pv1: p.v(spacing(1)),

        pa2: p.a(spacing(2)),
        pt2: p.t(spacing(2)),
        pr2: p.r(spacing(2)),
        pb2: p.b(spacing(2)),
        pl2: p.l(spacing(2)),
        ph2: p.h(spacing(2)),
        pv2: p.v(spacing(2)),

        pa3: p.a(spacing(3)),
        pt3: p.t(spacing(3)),
        pr3: p.r(spacing(3)),
        pb3: p.b(spacing(3)),
        pl3: p.l(spacing(3)),
        ph3: p.h(spacing(3)),
        pv3: p.v(spacing(3)),

        pa4: p.a(spacing(4)),
        pt4: p.t(spacing(4)),
        pr4: p.r(spacing(4)),
        pb4: p.b(spacing(4)),
        pl4: p.l(spacing(4)),
        ph4: p.h(spacing(4)),
        pv4: p.v(spacing(4)),

        pa5: p.a(spacing(5)),
        pt5: p.t(spacing(5)),
        pr5: p.r(spacing(5)),
        pb5: p.b(spacing(5)),
        pl5: p.l(spacing(5)),
        ph5: p.h(spacing(5)),
        pv5: p.v(spacing(5)),

        pa6: p.a(spacing(6)),
        pt6: p.t(spacing(6)),
        pr6: p.r(spacing(6)),
        pb6: p.b(spacing(6)),
        pl6: p.l(spacing(6)),
        ph6: p.h(spacing(6)),
        pv6: p.v(spacing(6)),

        pa7: p.a(spacing(7)),
        pt7: p.t(spacing(7)),
        pr7: p.r(spacing(7)),
        pb7: p.b(spacing(7)),
        pl7: p.l(spacing(7)),
        ph7: p.h(spacing(7)),
        pv7: p.v(spacing(7)),

        pa8: p.a(spacing(8)),
        pt8: p.t(spacing(8)),
        pr8: p.r(spacing(8)),
        pb8: p.b(spacing(8)),
        pl8: p.l(spacing(8)),
        ph8: p.h(spacing(8)),
        pv8: p.v(spacing(8)),

        pa9: p.a(spacing(9)),
        pt9: p.t(spacing(9)),
        pr9: p.r(spacing(9)),
        pb9: p.b(spacing(9)),
        pl9: p.l(spacing(9)),
        ph9: p.h(spacing(9)),
        pv9: p.v(spacing(9)),

        pa10: p.a(spacing(10)),
        pt10: p.t(spacing(10)),
        pr10: p.r(spacing(10)),
        pb10: p.b(spacing(10)),
        pl10: p.l(spacing(10)),
        ph10: p.h(spacing(10)),
        pv10: p.v(spacing(10)),

        pa11: p.a(spacing(11)),
        pt11: p.t(spacing(11)),
        pr11: p.r(spacing(11)),
        pb11: p.b(spacing(11)),
        pl11: p.l(spacing(11)),
        ph11: p.h(spacing(11)),
        pv11: p.v(spacing(11)),

        pa12: p.a(spacing(12)),
        pt12: p.t(spacing(12)),
        pr12: p.r(spacing(12)),
        pb12: p.b(spacing(12)),
        pl12: p.l(spacing(12)),
        ph12: p.h(spacing(12)),
        pv12: p.v(spacing(12)),

        pa13: p.a(spacing(13)),
        pt13: p.t(spacing(13)),
        pr13: p.r(spacing(13)),
        pb13: p.b(spacing(13)),
        pl13: p.l(spacing(13)),
        ph13: p.h(spacing(13)),
        pv13: p.v(spacing(13)),

        pa14: p.a(spacing(14)),
        pt14: p.t(spacing(14)),
        pr14: p.r(spacing(14)),
        pb14: p.b(spacing(14)),
        pl14: p.l(spacing(14)),
        ph14: p.h(spacing(14)),
        pv14: p.v(spacing(14)),

        pa15: p.a(spacing(15)),
        pt15: p.t(spacing(15)),
        pr15: p.r(spacing(15)),
        pb15: p.b(spacing(15)),
        pl15: p.l(spacing(15)),
        ph15: p.h(spacing(15)),
        pv15: p.v(spacing(15)),

        pa16: p.a(spacing(16)),
        pt16: p.t(spacing(16)),
        pr16: p.r(spacing(16)),
        pb16: p.b(spacing(16)),
        pl16: p.l(spacing(16)),
        ph16: p.h(spacing(16)),
        pv16: p.v(spacing(16)),

        pa17: p.a(spacing(17)),
        pt17: p.t(spacing(17)),
        pr17: p.r(spacing(17)),
        pb17: p.b(spacing(17)),
        pl17: p.l(spacing(17)),
        ph17: p.h(spacing(17)),
        pv17: p.v(spacing(17)),

        pa18: p.a(spacing(18)),
        pt18: p.t(spacing(18)),
        pr18: p.r(spacing(18)),
        pb18: p.b(spacing(18)),
        pl18: p.l(spacing(18)),
        ph18: p.h(spacing(18)),
        pv18: p.v(spacing(18)),

        pa19: p.a(spacing(19)),
        pt19: p.t(spacing(19)),
        pr19: p.r(spacing(19)),
        pb19: p.b(spacing(19)),
        pl19: p.l(spacing(19)),
        ph19: p.h(spacing(19)),
        pv19: p.v(spacing(19)),

        pa20: p.a(spacing(20)),
        pt20: p.t(spacing(20)),
        pr20: p.r(spacing(20)),
        pb20: p.b(spacing(20)),
        pl20: p.l(spacing(20)),
        ph20: p.h(spacing(20)),
        pv20: p.v(spacing(20)),

    }
}
