import { View, Image, Text } from 'react-native';
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
        <Text style={styles.text}>{title}</Text>
        <Text style={[styles.text, styles.price]}>{subTitle}</Text>
      </View>
    </View>
  );
}
