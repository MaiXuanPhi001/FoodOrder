import React from 'react'
import { ScrollView } from 'react-native'
import { useAppSelector } from '~/hooks/redux'
import { foodsMainSelector, orderPendingMainSelector } from '~/reduxs/selectors/mainSelector'
import ItemFoodsOrder from './ItemFoodsOrder'

const FoodsOrder = () => {
    const foods = useAppSelector(foodsMainSelector)
    const orderPending = useAppSelector(orderPendingMainSelector)

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 5, paddingLeft: 0 }}>
            {orderPending.map((food, index) =>
                <ItemFoodsOrder
                    key={food._id}
                    food={food}
                />
            )}
        </ScrollView>
    )
}

export default FoodsOrder