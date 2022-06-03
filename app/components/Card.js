import { View, Image, StyleSheet } from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';

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

const styles = StyleSheet.create({
  card: {
    height: 270,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  cardImg: {
    width: '100%',
    height: '66%'
  },
  textContainer: {
    padding: 15
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
});
