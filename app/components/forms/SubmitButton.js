import React from 'react';
import { useFormikContext } from 'formik';
import AppBtn from '../AppBtn';

function SubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();
  return <AppBtn title={title} onPress={handleSubmit} style={style} />;
}

export default SubmitButton;
