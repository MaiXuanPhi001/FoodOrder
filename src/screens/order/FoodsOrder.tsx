import React, { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { foodOptionUpdateMainSelector, orderPendingMainSelector } from '~/reduxs/selectors/mainSelector'
import { setFoodOptionUpdate } from '~/reduxs/slices/mainSlice'
import ItemFoodsOrderPending from './ItemFoodsOrderPending'
import ModalFoodOptionUpdate from './ModalFoodOptionUpdate'
import ModalDeleteFoodOrder from './ModalDeleteFoodOrder'
import { Food } from '~/models/database'

const FoodsOrder = () => {
    const dispatch = useAppDispatch()
    const orderPending = useAppSelector(orderPendingMainSelector)
    const foodOptionUpdate = useAppSelector(foodOptionUpdateMainSelector)
    const [foodDelete, setFoodDelete] = useState<Food | null>(null)

    const handleShowFoodOption = useCallback((food: Food) => {
        dispatch(setFoodOptionUpdate(food))
    }, [])

    const handleShowModalDelete = useCallback((food: Food) => {
        setFoodDelete(food)
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            {orderPending.map((food: Food) =>
                <ItemFoodsOrderPending
                    key={food._id + Math.random()}
                    food={food}
                    main={true}
                    onShowFoodOption={handleShowFoodOption}
                    onShowModalDelete={handleShowModalDelete}
                />
            )}

            {foodOptionUpdate &&
                <ModalFoodOptionUpdate
                    dispatch={dispatch}
                    isShow={foodOptionUpdate !== null}
                    foodOptionUpdate={foodOptionUpdate}
                />
            }

            {foodDelete &&
                <ModalDeleteFoodOrder
                    dispatch={dispatch}
                    isShow={foodDelete !== null}
                    foodDelete={foodDelete}
                    setFoodDelete={setFoodDelete}
                />
            }
        </ScrollView>
    )
}

export default FoodsOrder