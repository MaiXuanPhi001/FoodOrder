import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Navigation from '~/navigators/Navigation'
import store from '~/reduxs/store'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App