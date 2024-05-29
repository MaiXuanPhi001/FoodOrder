import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { colors } from '~/themes/colors';

interface Props {
    color?: string
    size?: number
    fs?: "normal" | "italic"
    font?: string
    f?: number
    as?: 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
    fw?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    bold?: boolean
    m?: number
    mx?: number
    my?: number
    mt?: number
    mr?: number
    mb?: number
    ml?: number
    bg?: string
    o?: number
    position?: 'absolute' | 'relative'
    top?: number
    right?: number
    bottom?: number
    left?: number
    styles?: StyleProp<TextStyle>
    children?: Element
}

const Txt: React.FC<Props & TextProps> = ({
    color = colors.black,
    size = 14,
    fs,
    font,
    f,
    as,
    fw,
    bold,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    bg,
    o,
    position,
    top,
    right,
    bottom,
    left,
    styles,
    children,
    ...rest
}) => {
    const txtStyle: StyleProp<TextStyle> = [
        {
            color,
            fontSize: size,
            fontStyle: fs,
            fontFamily: font,
            flex: f,
            alignSelf: as,
            fontWeight: fw,
            margin: m,
            marginHorizontal: mx,
            marginVertical: my,
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb,
            marginLeft: ml,
            backgroundColor: bg,
            opacity: o,
            position,
            top,
            right,
            bottom,
            left,
        },
        bold && { fontWeight: 'bold' }
    ]

    return (
        <Text
            style={[txtStyle, styles]}
            {...rest}
        >
            {children}
        </Text>
    )
}

export default Txt