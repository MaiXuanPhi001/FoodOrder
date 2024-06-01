import { useWindowDimensions } from "react-native"
import { ResponsiveArea } from "~/models/responsive"
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

export const useResponsiveOrder = (): ResponsiveArea => {
    const { width, height } = useWindowDimensions()
    const areas = useAppSelector(areasMainSelector)
    const portrait = width > height // màn hình có đang xoay ngang hay không
    const widthListItem = width  // Chiều dài của một list
    const padding = 10
    const gap = 10 // Margin của mỗi item 
    const itemOnLine = portrait ? 4 : 2 // số lượng item dc hiện thị trên một hàng
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