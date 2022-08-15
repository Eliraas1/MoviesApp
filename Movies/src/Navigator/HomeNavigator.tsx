import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MovieScreen from '../Screens/MovieScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/app/store';

const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
  const favoritesMovie = useSelector(
    (state: RootState) => state.favorite.value,
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      swipeEnabled
      initialRoute="Home"
      activeColor="#02ad94"
      inactiveColor="#dedede"
      style={{backgroundColor: '#ffff'}}
      barStyle={{backgroundColor: '#0f0f0f', padding: 4}}>
      <Tab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="movie-open" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel:
            favoritesMovie.length > 0 ? favoritesMovie.length.toString() : '',
          tabBarIcon: ({color}) =>
            favoritesMovie.length > 0 && (
              <Icon name="heart" color={color} size={28} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
