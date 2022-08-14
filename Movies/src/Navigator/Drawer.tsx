import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MovieScreen from '../Screens/MovieScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import InformationScreen from '../Screens/InformationScreen';
import HomeNavigator from './HomeNavigator';
// import {useSelector} from 'react-redux';
// import {RootState} from '../app/store';
// import {googleSignOut} from '../services/googleServices';
// import {logoutUser} from '../features/userSlice';
// import {useDispatch} from 'react-redux';

const Tab = createDrawerNavigator();
const DrawerNavigator = () => {
  //   const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('asd');
    // googleSignOut();
    // dispatch(logoutUser);
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      swipeEnabled
      initialRoute="Home"
      activeColor="#02ad94"
      inactiveColor="#dedede">
      <Tab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color}) => (
            <Icon name="movie-open" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          drawerLabel: 'Your favorites',
          drawerIcon: ({color}) => (
            <Icon name="heart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="information"
        component={InformationScreen}
        options={{
          drawerLabel: 'Movie details',
          drawerIcon: ({color}) => (
            <Icon name="information" color={color} size={20} />
          ),
        }}
      />
      {/* <DrawerItem
        label="Logout"
        icon={({focused, color}) => (
          <Icon
            color={color}
            size={20}
            name={focused ? 'logout' : 'heart-broken'}
          />
        )}
        onPress={handleLogout}
      /> */}
    </Tab.Navigator>
  );
};

export default DrawerNavigator;
