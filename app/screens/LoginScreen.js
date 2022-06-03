import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppBtn from '../components/AppBtn';

import colors from '../config/colors';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Screen>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        onChange={(text) => setEmail(text)}
        placeholder='email'
        keyboardType='email-address'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        onChange={(password) => setPassword(password)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
      />
      <AppBtn
        color={colors.primary}
        title='Login'
        onPress={() => console.log(email, password)}
        style={styles.btn}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginBottom: 20
  },
  btn: {
    alignSelf: 'center',
    marginTop: 20
  }
});

export default LoginScreen;
