import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

export default function ListingItem({
  title,
  subtitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
  showChevrons
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.itemContainer}>
          <View style={styles.contentContainer}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.listItemText}>
              <AppText style={styles.listItemTitle} numberOfLines={1}>
                {title}
              </AppText>
              {subtitle && (
                <AppText style={styles.listItemSubtitle} numberOfLines={2}>
                  {subtitle}
                </AppText>
              )}
            </View>
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name='chevron-right'
              size={25}
              color={colors.medium}
            />
          )}
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
  contentContainer: { flex: 1, flexDirection: 'row', alignItems: 'center' },
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
