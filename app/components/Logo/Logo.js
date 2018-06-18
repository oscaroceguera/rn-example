import React, { Component } from 'react'
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 250

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      containerImageWith: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize)
    }
  }

  componentDidMount() {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did'

    this.keyboardShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.KeyboardShow
    )

    this.keyboardHideListener = Keyboard.addListener(
      `keyboard${name}HIde`,
      this.KeyboardHide
    )
  }
  KeyboardShow = () => {
    // Animated.timing(this.containerImageWith, {
    //   toValue: styles.$smallContainerSize,
    //   duration: ANIMATION_DURATION
    // }).start()

    // Animated.timing(this.imageWidth, {
    //   toValue: styles.$smallImageSize,
    //   duration: ANIMATION_DURATION
    // }).start()

    Animated.parallel([
      Animated.timing(this.containerImageWith, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start()
  }

  KeyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWith, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start()
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }
  render() {
    const containerImageStyle = [
      styles.containerImage,
      {width: this.state.containerImageWith, height: this.state.containerImageWith}
    ]

    const imageStyle = [
      styles.logo,
      { width: this.state.imageWidth },
      this.props.tinColor ? {tinColor: this.props.tinColor} : null
    ]
    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>  
          <Animated.Image
            resizeMode='contain'
            style={[StyleSheet.absoluteFill,containerImageStyle]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode='contain'
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
