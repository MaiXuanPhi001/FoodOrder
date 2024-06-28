import React from 'react';
import { DimensionValue, StyleProp, TextInput, TextInputProps, TextStyle, ViewProps, ViewStyle } from 'react-native';
import { colors } from '~/themes/colors';

interface Props {
    f?: number
    color?: string
    w?: DimensionValue
    h?: DimensionValue
    mw?: DimensionValue
    mh?: DimensionValue
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
    position?: 'absolute' | 'relative'
    top?: number
    right?: number 
    bottom?: number 
    left?: number
    radius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    borderBottomRightRadius?: number
    borderBottomLeftRadius?: number
    borderBottomWidth?: number
    borderWidth?: number
    borderColor?: string
    zIndex?: number
    styles?: StyleProp<ViewStyle>
}

const Input: React.FC<Props & TextInputProps> = ({
    f,
    color = colors.black,
    w,
    h,
    mw,
    mh,
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
    position,
    top,
    right, 
    bottom, 
    left,
    radius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    borderBottomWidth,
    borderWidth,
    borderColor,
    zIndex,
    styles,
    children,
    ...rest
}) => {
    const inputStyle: StyleProp<ViewStyle & TextStyle> = [
        {
            flex: f,
            color,
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
            position,
            top,
            right, 
            bottom, 
            left,
            borderRadius: radius,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius,
            borderBottomWidth,
            borderWidth,
            borderColor,
            zIndex,
        },
    ]

    return (
        <TextInput
            style={[
                inputStyle,
                styles,
            ]}
            {...rest}
        />
    )
}

export default Input