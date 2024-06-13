import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { orderPendingMainSelector } from '~/reduxs/selectors/mainSelector'
import ItemFoodsOrder from './ItemFoodsOrder'
import { setFoodOption } from '~/reduxs/slices/mainSlice'

const FoodsOrder = () => {
    const dispatch = useAppDispatch()
    const orderPending = useAppSelector(orderPendingMainSelector)

    const handleShowFoodOption = useCallback((food) => {
        dispatch(setFoodOption(food))
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
        </ScrollView>
    )
}

export default FoodsOrder