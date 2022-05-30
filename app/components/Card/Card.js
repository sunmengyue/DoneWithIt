import { View, Image, Text } from 'react-native';
import AppText from '../AppText';
import styles from './styles';
export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image
        }}
        resizeMode='cover'
        style={styles.cardImg}
      />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
