import React from 'react'
import { ScrollView } from 'react-native'
import Box from '~/atoms/Box'
import Txt from '~/atoms/Txt'
import Modality from '~/components/Modality'
import { colors } from '~/themes/colors'

interface Props {
    isShow: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    foodOption: any
}

const ModalFoodOption = ({ isShow, setShow, foodOption }: Props) => {
    console.log('foodOption: ', JSON.stringify(foodOption))

    return (
        <Modality show={isShow} setShow={setShow} close={false}>
            <Box bg={colors.white} w={'80%'} h={'90%'} as='center'>
                {foodOption &&
                    <ScrollView>
                        <Txt bold>{foodOption.name}</Txt>
                        {foodOption.options.map((option) => (
                            <Box key={option._id}>
                                <Txt ml={10}>{option.title}</Txt>
                                {option.ingredients.map((ingredient) => (
                                    <Txt ml={20}>{ingredient.food.name}</Txt>
                                ))}
                            </Box>
                        ))}
                    </ScrollView>
                }
            </Box>
        </Modality>
    )
}

export default ModalFoodOption