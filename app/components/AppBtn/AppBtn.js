import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function AppBtn(props) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, { backgroundColor: props.color }]}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}
