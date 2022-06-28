import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';

export default function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{
            uri: image
          }}
          resizeMode='cover'
          style={styles.cardImg}
        />
        <View style={styles.textContainer}>
          <AppText style={styles.title} numberofLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberofLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
