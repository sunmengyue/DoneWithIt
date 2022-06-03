import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.delete}>
        <MaterialCommunityIcons name='trash-can' size={35} color='#fff' />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  delete: {
    width: 70,
    backgroundColor: colors.danger,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
