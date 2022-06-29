import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../../screens/AccountScreen';
import MessageScreen from '../../screens/MessageScreen';

const Stack = createNativeStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='AccountStackScreen' component={AccountScreen} />
    <Stack.Screen name='MessageStackScreen' component={MessageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
