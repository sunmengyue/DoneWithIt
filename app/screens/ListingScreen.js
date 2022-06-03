import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const cards = [
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1540660012388-9daa22be0fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Red jacket for sale',
    price: '$100'
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'Nike hightop sneaker',
    price: '$200'
  }
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={cards}
        keyExtractor={(card) => `${card.id}-${card.name}`}
        renderItem={({ item }) => (
          <Card image={item.imgUrl} title={item.name} subTitle={item.price} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  }
});
