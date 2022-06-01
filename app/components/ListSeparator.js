import { View, StyleSheet } from 'react-native';
import colors from '../config.js/colors';

export default function ListSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light
  }
});
