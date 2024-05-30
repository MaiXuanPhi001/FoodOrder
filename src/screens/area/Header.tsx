import { Setting } from 'iconsax-react-native';
import React, { useCallback } from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Box from '~/atoms/Box';
import Txt from '~/atoms/Txt';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { areasMainSelector, areaChooseMainSelector } from '~/reduxs/selectors/mainSelector';
import { setAreaChoose } from '~/reduxs/slices/mainSlice';
import { Area } from '~/servers/databases/areas';
import { colors } from '~/themes/colors';

const heightContainer = 50

const Header = () => {
  const dispatch = useAppDispatch()
  const areas = useAppSelector(areasMainSelector)
  const areaChoose = useAppSelector(areaChooseMainSelector)

  const handleSetAreaChoose = (area: Area) => {
    dispatch(setAreaChoose(area))
  }

  return (
    <Box row jc='space-between' ai='center' h={heightContainer} bg={colors.background} w={'100%'} p={5}>
      <Menu>
        <MenuTrigger style={styles.menuTrigger}>
          <Txt>{areaChoose?.name || 'Chưa có khu vực nào'}</Txt>
        </MenuTrigger>
        <MenuOptions>
          {areas.map((area: Area) =>
            <MenuOption
              key={area._id}
              onSelect={() => handleSetAreaChoose(area)}
              style={styles.menuOption}
            >
              <Txt>{area.name}</Txt>
            </MenuOption>
          )}
        </MenuOptions>
      </Menu>

      <Setting color={colors.black} />
    </Box>
  )
}

export default Header

const styles = StyleSheet.create({
  menuTrigger: {
    alignSelf: 'flex-start',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOption: {
    height: 50,
    justifyContent: 'center'
  }
})