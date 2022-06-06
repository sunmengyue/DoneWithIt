import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, SubmitButton, AppFormField } from '../components/forms';
import AppTextInput from '../components/AppTextInput';

import colors from '../config/colors';
import AppFormPicker from '../components/forms/AppFormPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category')
});

const categories = [
  { label: 'Furiture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 }
];

export default function ListingEditScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <AppFormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
        />
        <AppFormPicker
          items={categories}
          name='category'
          placeholder='Category'
        />
        <AppFormField
          maxLenth={255}
          name='description'
          multiline
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' style={styles.btn} />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: colors.primary
  }
});
