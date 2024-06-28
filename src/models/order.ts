import { FoodOption } from "./food";

export interface OrderPending extends FoodOption {
    _idOrder: number
}
