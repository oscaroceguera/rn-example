import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home.js'
import CurrencyList from './screens/CurrencyList'
import Options from './screens/Options'
import Themes from './screens/Themes'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434'
  // $outline: 1
})

export default () => <Themes />
