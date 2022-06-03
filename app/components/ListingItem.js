import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListingItem({
  title,
  subtitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.itemContainer}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.listItemText}>
            <AppText style={styles.listItemTitle}>{title}</AppText>
            {subtitle && (
              <AppText style={styles.listItemSubtitle}>{subtitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  listItemTitle: {
    fontWeight: '800'
  },
  listItemSubtitle: {
    color: colors.medium,
    marginTop: 2
  },
  listItemText: {
    marginLeft: 10
  }
});
