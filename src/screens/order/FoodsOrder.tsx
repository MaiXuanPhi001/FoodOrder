import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { foodOptionUpdateMainSelector, orderPendingMainSelector } from '~/reduxs/selectors/mainSelector'
import { setFoodOptionUpdate } from '~/reduxs/slices/mainSlice'
import ItemFoodsOrder from './ItemFoodsOrder'
import ModalFoodOptionUpdate from './ModalFoodOptionUpdate'

const FoodsOrder = () => {
    const dispatch = useAppDispatch()
    const orderPending = useAppSelector(orderPendingMainSelector)
    const foodOptionUpdate = useAppSelector(foodOptionUpdateMainSelector)

    const handleShowFoodOption = useCallback((food) => {
        dispatch(setFoodOptionUpdate(food))
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            {orderPending.map((food) =>
                <ItemFoodsOrder
                    key={food._id + Math.random()}
                    food={food}
                    main={true}
                    onShowFoodOption={handleShowFoodOption}
                />
            )}
            
            {foodOptionUpdate &&
                <ModalFoodOptionUpdate
                    dispatch={dispatch}
                    isShow={foodOptionUpdate !== null}
                    foodOptionUpdate={foodOptionUpdate}
                />
            }
        </ScrollView>
    )
}

export default FoodsOrder