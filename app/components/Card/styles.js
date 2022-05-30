import { StyleSheet } from 'react-native';

import colors from '../../config.js/colors';

const styles = StyleSheet.create({
  card: {
    height: 270,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  cardImg: {
    width: '100%',
    height: '66%'
  },
  textContainer: {
    padding: 15
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
});

export default styles;
