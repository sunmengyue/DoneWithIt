import { Text } from 'react-native';
import styles from './styles';

export default function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}
