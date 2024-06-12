import React from 'react'
import { ScrollView } from 'react-native'
import { useAppSelector } from '~/hooks/redux'
import { orderPendingMainSelector } from '~/reduxs/selectors/mainSelector'
import ItemFoodsOrder from './ItemFoodsOrder'

const FoodsOrder = () => {
    const orderPending = useAppSelector(orderPendingMainSelector)

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
                />
            )}
        </ScrollView>
    )
}

export default FoodsOrder