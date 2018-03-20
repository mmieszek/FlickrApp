import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './app/components/Home'
import Details from './app/components/Details'

export default StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details }
})
