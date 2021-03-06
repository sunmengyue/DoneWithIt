import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, SubmitButton, AppFormField } from '../components/forms';

import colors from '../config/colors';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least 1 image')
});

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9
  }
];

export default function ListingEditScreen() {
  const location = useLocation();
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <AppFormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <AppFormPicker
          items={categories}
          name='category'
          numberOfColumns={3}
          placeholder='Category'
          PickerItemComponent={CategoryPickerItem}
          width={200}
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
