import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})