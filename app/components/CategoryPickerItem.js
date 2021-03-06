import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppIcon from './AppIcon';
import AppText from './AppText';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AppIcon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={70}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 23,
    alignItems: 'center',
    width: '33%'
  },
  label: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default CategoryPickerItem;
