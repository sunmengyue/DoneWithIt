import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AppBtn({ color, onPress, style, title }) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  },
  btnContainer: {
    width: '95%',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18
  }
});
