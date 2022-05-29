import { SafeAreaView, View, StyleSheet, Image } from 'react-native';

import colors from '../config.js/colors';

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.accountBtnContainer}>
        <View style={styles.loginBtn}></View>
        <View style={styles.registerBtn}></View>
      </View>
      <Image
        source={require('../assets/chair.jpg')}
        style={styles.chairImg}
        resizeMode='contain'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  accountBtnContainer: {
    width: '100%',
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  loginBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary
  },
  registerBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary
  },
  chairImg: {
    width: '100%',
    height: '100%'
  }
});
