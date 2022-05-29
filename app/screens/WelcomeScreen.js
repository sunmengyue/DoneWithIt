import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.accountBtnContainer}>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoContainer: {
    position: 'absolute',
    top: '15%',
    alignItems: 'center'
  },
  accountBtnContainer: {
    width: '100%'
  },
  logo: {
    height: 100,
    width: 100
  },
  loginButton: {
    backgroundColor: 'tomato',
    width: '100%',
    height: 70
  },
  registerButton: {
    backgroundColor: 'lightseagreen',
    width: '100%',
    height: 70
  }
});

export default WelcomeScreen;
