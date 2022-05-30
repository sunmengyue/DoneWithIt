import { View, StyleSheet } from 'react-native';
import Card from './app/components/Card/Card';
// import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title='Red jacket for sale'
        subTitle='$100'
        image='https://images.unsplash.com/photo-1523364583621-23af08364dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center'
    backgroundColor: '#f8f4f4',
    paddingHorizontal: 20,
    paddingTop: 100
  }
});
