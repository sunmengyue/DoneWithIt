import React from 'react';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const images = values[name];

  const handleRemove = (img) => {
    setFieldValue(
      name,
      images.filter((image) => image !== img)
    );
  };

  const handleAdd = (newImg) => {
    setFieldValue(name, [...images, newImg]);
  };

  return (
    <>
      <ImageInputList
        images={images}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
