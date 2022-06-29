import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import colors from '../config/colors';
import AppBtn from '../components/AppBtn';
import routes from '../components/navigation/routes';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.accountBtnContainer}>
        <AppBtn
          color={colors.primary}
          title='Login'
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppBtn
          color={colors.secondary}
          title='Register'
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoContainer: {
    position: 'absolute',
    top: '15%',
    alignItems: 'center'
  },
  accountBtnContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    height: 100,
    width: 100
  },
  tagline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12
  }
});

export default WelcomeScreen;
