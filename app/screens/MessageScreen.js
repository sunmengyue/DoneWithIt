import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListingItem from '../components/ListingItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListSeparator from '../components/ListSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/profile.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/profile.jpg')
  }
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (id) => {
    const newMessages = messages.filter((message) => message.id !== id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListingItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('item clicked on ', item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/profile.jpg')
            }
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
