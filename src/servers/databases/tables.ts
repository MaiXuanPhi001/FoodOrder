export interface Table {
    _id: number
    name: string
    position: number
    _idArea: number
}

export const tables: Table[] = [
    {
        _id: 0,
        name: 'A01',
        position: 0,
        _idArea: 0,
    },
    {
        _id: 1,
        name: 'A02',
        position: 1,
        _idArea: 0,
    },
    {
        _id: 2,
        name: 'A03',
        position: 2,
        _idArea: 0,
    },
    {
        _id: 3,
        name: 'B01',
        position: 3,
        _idArea: 1,
    },
    {
        _id: 4,
        name: 'B02',
        position: 4,
        _idArea: 1,
    },
    {
        _id: 5,
        name: 'C01',
        position: 5,
        _idArea: 2,
    },
]