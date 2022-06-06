import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

import * as Yup from 'yup';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password')
});

export default function RegisterScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='account'
          name='account'
          placeholder='User Name'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
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
        <SubmitButton title='Register' style={styles.btn} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginTop: 10
  }
});
