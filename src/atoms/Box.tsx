import React from 'react';
import { DimensionValue, StyleProp, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

interface Props {
    f?: number
    w?: DimensionValue
    h?: DimensionValue
    mw?: DimensionValue
    mh?: DimensionValue
    row?: boolean
    m?: number
    mx?: number
    my?: number
    mt?: number
    mr?: number
    mb?: number
    ml?: number
    p?: number
    px?: number
    py?: number
    pt?: number
    pr?: number
    pb?: number
    pl?: number
    bg?: string
    o?: number
    gap?: number
    wrap?: boolean
    ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    as?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    position?: 'absolute' | 'relative'
    top?: number
    right?: number 
    bottom?: number 
    left?: number
    center?: boolean
    jc?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    radius?: number
    borderTopWidth?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    borderBottomRightRadius?: number
    borderBottomLeftRadius?: number
    borderWidth?: number
    borderBottomWidth?: number
    borderColor?: string
    zIndex?: number
    overflow?: "visible" | "hidden" | "scroll"
    children?: React.JSX.Element | React.JSX.Element[]
    styles?: StyleProp<ViewStyle>
}

const Box: React.FC<Props & ViewProps> = ({
    f,
    w,
    h,
    mw,
    mh,
    row,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    bg,
    o,
    gap,
    position,
    top,
    right, 
    bottom, 
    left,
    wrap,
    ai,
    as,
    jc,
    center,
    radius,
    borderTopWidth,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    borderWidth,
    borderBottomWidth,
    borderColor,
    zIndex,
    overflow,
    styles,
    children,
    ...rest
}) => {
    const boxStyle: StyleProp<ViewStyle> = [
        {
            flex: f,
            width: w,
            height: h,
            maxWidth: mw,
            maxHeight: mh,
            margin: m,
            marginHorizontal: mx,
            marginVertical: my,
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb,
            marginLeft: ml,
            padding: p,
            paddingHorizontal: px,
            paddingVertical: py,
            paddingTop: pt,
            paddingRight: pr,
            paddingBottom: pt,
            paddingLeft: pl,
            backgroundColor: bg,
            opacity: o,
            gap,
            position,
            top,
            right, 
            bottom, 
            left,
            alignItems: ai,
            alignSelf: as,
            justifyContent: jc,
            borderRadius: radius,
            borderTopWidth,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius,
            borderBottomWidth,
            borderWidth,
            borderColor,
            zIndex,
            overflow,
        },
        row && { flexDirection: 'row' },
        wrap && { flexWrap: 'wrap' },
        center && { alignItems: 'center', justifyContent: 'center' },
        (!f && !as)&& { alignSelf: 'flex-start' }
    ]

    return (
        <View
            style={[
                boxStyle,
                styles, // ko nen xoa
            ]}
            {...rest}
        >
            {children}
        </View>
    )
}

export default Box