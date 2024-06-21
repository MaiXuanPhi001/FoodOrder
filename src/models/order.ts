import { FoodOption } from "./food";

export interface OrderPending extends FoodOption {
    _idOrder: number
    // "_id": 0,
    // "name": "CB mot minh",
    // "price": 20000,
    // "type": 3,
    // "amount": 1,
    // "options": [
    //   {
    //     "_id": 0,
    //     "title": "Cấp độ",
    //     "maxChoose": 1,
    //     "_idFood": 0,
    //     "ingredients": [
    //       {
    //         "_id": 0,
    //         "_idOptionFood": 0,
    //         "_idFood": 2,
    //         "food": {
    //           "_id": 2,
    //           "name": "Cấp 2",
    //           "price": 0,
    //           "type": 5,
    //           "amount": 1
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     "_id": 1,
    //     "title": "Món thêm",
    //     "maxChoose": 2,
    //     "_idFood": 0,
    //     "ingredients": [
    //       {
    //         "_id": 1,
    //         "_idOptionFood": 1,
    //         "_idFood": 3,
    //         "food": {
    //           "_id": 3,
    //           "name": "Mực thêm",
    //           "price": 20000,
    //           "type": 0,
    //           "amount": 1
    //         }
    //       },
    //       {
    //         "_id": 2,
    //         "_idOptionFood": 1,
    //         "_idFood": 4,
    //         "food": {
    //           "_id": 4,
    //           "name": "Bò thêm",
    //           "price": 25000,
    //           "type": 0,
    //           "amount": 1
    //         }
    //       },
    //       {
    //         "_id": 3,
    //         "_idOptionFood": 1,
    //         "_idFood": 5,
    //         "food": {
    //           "_id": 5,
    //           "name": "Mì thêm",
    //           "price": 25000,
    //           "type": 0,
    //           "amount": 0
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     "_id": 2,
    //     "title": "1 Mì kim chi bất kì",
    //     "maxChoose": 2,
    //     "_idFood": 0,
    //     "ingredients": [
    //       {
    //         "_id": 4,
    //         "_idOptionFood": 2,
    //         "_idFood": 1,
    //         "food": {
    //           "_id": 1,
    //           "name": "Mì kim chi hải sản",
    //           "price": 55000,
    //           "type": 1,
    //           "amount": 2,
    //           "options": [
    //             {
    //               "_id": 3,
    //               "title": "Cấp độ",
    //               "maxChoose": 1,
    //               "_idFood": 1,
    //               "ingredients": [
    //                 {
    //                   "_id": 5,
    //                   "_idOptionFood": 3,
    //                   "_idFood": 2,
    //                   "food": {
    //                     "_id": 2,
    //                     "name": "Cấp 2",
    //                     "price": 0,
    //                     "type": 5,
    //                     "amount": 0
    //                   }
    //                 },
    //                 {
    //                   "_id": 8,
    //                   "_idOptionFood": 3,
    //                   "_idFood": 7,
    //                   "food": {
    //                     "_id": 7,
    //                     "name": "Cấp 0",
    //                     "price": 0,
    //                     "type": 5,
    //                     "amount": 1
    //                   }
    //                 },
    //                 {
    //                   "_id": 9,
    //                   "_idOptionFood": 3,
    //                   "_idFood": 8,
    //                   "food": {
    //                     "_id": 8,
    //                     "name": "Cấp 1",
    //                     "price": 0,
    //                     "type": 5,
    //                     "amount": 1
    //                   }
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       },
    //       {
    //         "_id": 6,
    //         "_idOptionFood": 2,
    //         "_idFood": 6,
    //         "food": {
    //           "_id": 6,
    //           "name": "Mì kim chi bò",
    //           "price": 25000,
    //           "type": 1,
    //           "amount": 0
    //         }
    //       }
    //     ]
    //   }
    // ],
    // "_idOrder": 1718976021682
}
