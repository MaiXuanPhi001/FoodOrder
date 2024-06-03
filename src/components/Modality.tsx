import React from 'react'
import { Modal, Pressable } from 'react-native'
import Box from '~/atoms/Box'

interface Props {
    show?: boolean,
    setShow?: Function | undefined,
    animation?: 'slide' | 'fade' | 'none',
    children: JSX.Element | JSX.Element[],
    close?: boolean,
}

const Modality = ({
    show,
    setShow,
    animation = 'slide',
    children,
    close = true,
}: Props) => {
    // animation={'slide', 'fade', 'none'}

    return (
        <Modal
            animationType={animation}
            visible={show}
            transparent={true}
            onRequestClose={() => setShow && setShow(false)}
        >
            <Pressable
                style={{ flex: 1 }}
                onPress={() => { (close && setShow) && setShow(false) }}
            >
                <Box
                    f={1}
                    ai='center'
                    jc='center'
                    bg={'rgba(0,0,0,0.5)'}
                >
                    {children}
                </Box>
            </Pressable>
        </Modal>
    )
}

export default Modality