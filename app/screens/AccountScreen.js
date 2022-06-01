import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingItem from '../components/ListingItem';
import Screen from '../components/Screen';
import colors from '../config.js/colors';
import AppIcon from '../components/AppIcon';
import ListSeparator from '../components/ListSeparator';

const initialUser = {
  image: require('../assets/profile.jpg'),
  name: 'Simon Sun',
  email: 'mengyuesun@gmail.com'
};

const listItems = [
  {
    id: '1',
    title: 'My Listings',
    iconName: 'format-list-bulleted',
    iconColor: colors.primary
  },
  {
    id: 2,
    title: 'My Messages',
    iconName: 'email',
    iconColor: colors.secondary
  }
];

export default function AccountScreen() {
  const [user, setUser] = useState(initialUser);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListingItem
          title={user.name}
          subtitle={user.email}
          image={user.image}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          ItemSeparatorComponent={ListSeparator}
          data={listItems}
          keyExtractor={(item) => `${item.title}-${item.id.toString()}`}
          renderItem={({ item }) => (
            <ListingItem
              title={item.title}
              ImageComponent={
                <AppIcon
                  name={item.iconName}
                  size={40}
                  backgroundColor={item.iconColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={[styles.container, { marginTop: 0 }]}>
        <ListingItem
          style={styles.logout}
          title='Log Out'
          ImageComponent={
            <AppIcon name='logout' size={40} backgroundColor={colors.yellow} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 30
  }
});
