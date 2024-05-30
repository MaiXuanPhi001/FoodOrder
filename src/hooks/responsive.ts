import { useWindowDimensions } from "react-native"
import { ResponsiveArea } from "~/models/responsive"

export const useResponsiveArea = (): ResponsiveArea => {
    const { width, height } = useWindowDimensions()
    const portrait = width > height // màn hình có đang xoay ngang hay không
    const widthListItem = width  // Chiều dài của một list
    const padding = 10
    const gap = 10 // Margin của mỗi item 
    const itemOnLine = portrait ? 6 : 3 // số lượng item dc hiện thị trên một hàng
    const widthItem = (widthListItem - gap) / itemOnLine - padding // Chiều dài của mỗi item

    return {
        padding,
        gap,
        itemOnLine,
        widthItem,
        widthListItem,
    }
}