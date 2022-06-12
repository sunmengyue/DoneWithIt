import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  container: {
    padding: 20,
    flex: 1
  }
});
