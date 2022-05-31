import { View, Image, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config.js/colors';

export default function ListingItem() {
  return (
    <View style={styles.sellerContainer}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        }}
        style={styles.profilePhoto}
      />
      <View style={styles.listItemText}>
        <AppText>Leo Smith</AppText>
        <AppText style={styles.listItemSubtitle}>5 Listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sellerContainer: {
    flexDirection: 'row'
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10
  },
  listItemSubtitle: {
    color: colors.medium,
    marginTop: 2
  }
});
