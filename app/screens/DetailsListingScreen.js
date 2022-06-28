import { Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import ListingItem from '../components/ListingItem';

import colors from '../config/colors';

export default function DetailsListingScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: listing.imgUrl
        }}
      ></Image>
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>{listing.name}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <ListingItem
          title='Simon Sun'
          subtitle='5 Listings'
          image={require('../assets/profile.jpg')}
          showChevrons
        />
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
