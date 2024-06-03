export interface Food {
    _id: number
    name: string
    price: number
    type: number // 0: món ăn | 1 mì cay | 2 lẩu | 3 combo
}

export const foods: Food[] = [
    {
        _id: 0,
        name: 'Mì kim chi hải sản',
        price: 55000,
        type: 1,
        ingredient: [
            {
                title: 'Cấp độ',
                _idFood: [0, 1, 2, 3, 4, 5, 6, 7],
                maxChoose: 1,
            }
        ]
    },
    {
        _id: 1,
        name: 'Mì kim chi bò',
        price: 55000,
    },
    {
        _id: 2,
        name: 'Mì kim chi bò mỹ',
        price: 55000,
    },
    {
        _id: 3,
        name: 'Mì kim chi bạch tuột',
        price: 55000,
    },
    {
        _id: 4,
        name: 'Mì kim chi cá',
        price: 55000,
    },
    {
        _id: 5,
        name: 'Mì kim chi gà',
        price: 55000,
    },
    {
        _id: 6,
        name: 'Mì kim chi thập cẩm',
        price: 55000,
    },
    {
        _id: 7,
        name: 'Combo 2 mình',
        price: 250000,
        type: 3,
        ingredient: [
            {
                title: '2 Mì kim chi bất kì',
                _idFood: [0, 1, 2, 3, 4, 5, 6],
                maxChoose: 2,
            },
            {
                title: 'Món thêm',
                _idFood: [8, 9],
                maxChoose: 1
            },
            {
                title: 'Nước',
                _idFood: [10, 11],
                maxChoose: 2
            },
        ]
    },
    {
        _id: 8,
        name: 'Takoyaki',
        price: 39000,
    },
    {
        _id: 9,
        name: 'Kim bắp',
        price: 45000,
    },
    {
        _id: 10,
        name: 'Coca',
        price: 45000,
    },
    {
        _id: 11,
        name: 'Trà sữa',
        price: 45000,
    },
]