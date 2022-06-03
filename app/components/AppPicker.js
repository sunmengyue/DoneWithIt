import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList
} from 'react-native';
import Screen from './Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ selectedItem, onSelectChange, icon, items, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={25}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        animationType='slide'
      >
        <Screen>
          <Button onPress={() => setModalVisible(false)} title='close' />
          <FlatList
            data={items}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectChange(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    width: '100%',
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  text: {
    flex: 1
  }
});

export default AppPicker;
