import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors';

function ImageInput({ imageUri, onImageChange }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = async () => {
    if (!imageUri) selectImage();
    else onRemoveImage();
  };

  const requestPermission = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (!granted)
        alert('You need to enable permission to get access to the library');
    } catch (error) {
      console.log(error);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled) onImageChange(result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  const onRemoveImage = () => {
    Alert.alert('Delete Image', 'Do you really want to delete the image?', [
      { text: 'No' },
      { text: 'Yes', onPress: () => onImageChange(null) }
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialIcons name='camera-alt' size={40} color={colors.medium} />
        )}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.uploadedImg} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: colors.light
  },
  uploadedImg: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    marginHorizontal: 15
  }
});

export default ImageInput;
