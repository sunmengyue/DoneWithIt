import { SafeAreaView, View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.accountBtnContainer}>
        <MaterialCommunityIcons name='close' size={30} color='white' />
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={30}
          color='white'
        />
      </View>
      <Image
        source={require('../assets/chair.jpg')}
        style={styles.chairImg}
        resizeMode='contain'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  accountBtnContainer: {
    width: '100%',
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chairImg: {
    width: '100%',
    height: '100%'
  }
});
