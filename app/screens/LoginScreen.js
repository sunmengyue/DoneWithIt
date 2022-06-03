import React from 'react';
import { Formik } from 'formik';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppBtn from '../components/AppBtn';

import colors from '../config/colors';

function LoginScreen() {
  return (
    <Screen>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              onChange={handleChange('email')}
              placeholder='email'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChange={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
            <AppBtn
              color={colors.primary}
              title='Login'
              onPress={handleSubmit}
              style={styles.btn}
            />
          </>
        )}
      </Formik>
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
