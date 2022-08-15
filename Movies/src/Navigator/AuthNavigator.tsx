import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Login from '../Screens/Login';

const Tab = createBottomTabNavigator();
const AuthNavigator: typeof Tab.Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      swipeEnabled
      initialRoute="Login"
      activeColor="#02ad94"
      inactiveColor="#dedede"
      style={{backgroundColor: '#ffff'}}
      barStyle={{backgroundColor: '#0f0f0f', padding: 4}}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="login" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthNavigator;
