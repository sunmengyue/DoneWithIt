import React from 'react';
import * as Yup from 'yup';
import { Image, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password')
});
function LoginScreen() {
  return (
    <Screen>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          name='email'
          placeholder='email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login' style={styles.btn} />
      </AppForm>
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
    marginTop: 20,
    backgroundColor: colors.primary
  }
});

export default LoginScreen;
