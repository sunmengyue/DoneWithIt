import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingScreen from '../../screens/ListingScreen';
import DetailsListingScreen from '../../screens/DetailsListingScreen';

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen name='Listing' component={ListingScreen} />
    <Stack.Screen
      name='DetailListingScreen'
      component={DetailsListingScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
