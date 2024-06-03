import { useWindowDimensions } from "react-native"
import { ResponsiveArea, ResponsiveOrder } from "~/models/responsive"
import { useAppSelector } from "./redux"
import { areasMainSelector } from "~/reduxs/selectors/mainSelector"

export const useResponsiveArea = (): ResponsiveArea => {
    const { width, height } = useWindowDimensions()
    const areas = useAppSelector(areasMainSelector)
    const portrait = width > height // màn hình có đang xoay ngang hay không
    const widthListItem = width  // Chiều dài của một list
    const padding = 10
    const gap = 10 // Margin của mỗi item 
    const itemOnLine = portrait ? 6 : 3 // số lượng item dc hiện thị trên một hàng
    const widthItem = (widthListItem - gap) / itemOnLine - padding // Chiều dài của mỗi item
    const heightItemMenuOption = 50 // Chiều cao của mỗi item poppup menu
    let heightScrollPoppupMenu = heightItemMenuOption * areas.length // Chiều cao của scrollView poppup menu
    const maxHeightScrollPoppupMenu = height - heightItemMenuOption // Chiều cao tối đã của scrollView poppup menu

    // Nếu chiều cao của heightScrollPoppupMenu > maxHeightScrollPoppupMenu
    if (heightScrollPoppupMenu > maxHeightScrollPoppupMenu) {
        heightScrollPoppupMenu = maxHeightScrollPoppupMenu
    }

    return {
        padding,
        gap,
        itemOnLine,
        widthItem,
        widthListItem,
        heightScrollPoppupMenu,
        heightItemMenuOption,
    }
}

export const useResponsiveOrder = (): ResponsiveOrder => {
    const { width, height } = useWindowDimensions()
    const portrait = width > height // màn hình có đang xoay ngang hay không
    const widthFoods = portrait ? width * 60 / 100 : width // Chiều rộng của component foods
    const widthOrder = portrait ? width - widthFoods : width // Chiều rộng của component order
    const heighFoods = portrait ? '100%' : '50%' // Chiều cao của component foods
    const heighOrder = portrait ? '100%' : '50%' // Chiều cao của component order
    const padding = 10
    const gap = 10 // Margin của mỗi item 
    const itemOnLine = portrait ? 4 : 3 // số lượng item dc hiện thị trên một hàng
    const widthItem = (widthFoods - gap) / itemOnLine - padding // Chiều rộng của mỗi item
    const heightItem = widthItem + 20 // Chiều cao của mỗi item
    const sizeIconItem = widthItem * 40 / 100

    return {
        padding,
        gap,
        itemOnLine,
        widthItem,
        portrait,
        widthFoods,
        widthOrder,
        heighFoods,
        heighOrder,
        heightItem,
        sizeIconItem,
    }
}