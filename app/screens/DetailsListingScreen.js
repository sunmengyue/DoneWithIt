import { Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import ListingItem from '../components/ListingItem';

import colors from '../config.js/colors';

export default function DetailsListingScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1523364583621-23af08364dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
        }}
      ></Image>
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListingItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 250
  },
  contentContainer: {
    padding: 18
  },
  title: {
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 22
  },
  price: {
    color: colors.secondary,
    fontWeight: '700',
    marginBottom: 50
  }
});
