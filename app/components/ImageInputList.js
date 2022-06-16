import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ images = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {images.map((image, index) => (
            <ImageInput
              imageUri={image}
              onImageChange={() => onRemoveImage(image)}
              key={`${index}-${image}`}
            />
          ))}
          <ImageInput onImageChange={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

export default ImageInputList;
