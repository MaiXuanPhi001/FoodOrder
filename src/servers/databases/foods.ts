export interface Food {
    _id: number
    name: string
    price: number
    type: number // 0: món ăn | 1 mì cay | 2 lẩu | 3 combo | 4 nước | 5 cấp độ cay
    noteEnable: boolean
}

export const foods: Food[] = [
    {
        _id: 0,
        name: 'CB mot minh',
        price: 20000,
        type: 3,
        noteEnable: false,
    },
    {
        _id: 1,
        name: 'Mì kim chi hải sản',
        price: 55000,
        type: 1,
        noteEnable: true,
    },
    {
        _id: 2,
        name: 'Cấp 2',
        price: 0,
        type: 5,
        noteEnable: false
    },
    {
        _id: 3,
        name: 'Mực thêm',
        price: 20000,
        type: 0,
        noteEnable: true
    },
    {
        _id: 4,
        name: 'Bò thêm',
        price: 25000,
        type: 0,
        noteEnable: true,
    },
    {
        _id: 5,
        name: 'Mì thêm',
        price: 25000,
        type: 0,
        noteEnable: true,
    },
    {
        _id: 6,
        name: 'Mì kim chi bò',
        price: 25000,
        type: 1,
        noteEnable: true,
    },
    {
        _id: 7,
        name: 'Cấp 0',
        price: 0,
        type: 5,
        noteEnable: false
    },
    {
        _id: 8,
        name: 'Cấp 1',
        price: 0,
        type: 5,
        noteEnable: false
    },
    {
        _id: 9,
        name: 'Coca',
        price: 25000,
        type: 4,
        noteEnable: true
    },
    {
        _id: 10,
        name: 'Lẩu hải sản',
        price: 207000,
        type: 2,
        noteEnable: true
    },
]