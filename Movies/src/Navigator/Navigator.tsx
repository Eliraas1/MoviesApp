import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {RootState} from '../app/store';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './Drawer';

const Tab = createBottomTabNavigator();
const Navigator: typeof Tab.Navigator = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user.user);
  React.useEffect(() => {
    console.log({user});
  }, [user]);
  if (!user.user) return <AuthNavigator />;
  return <HomeNavigator />;
};

export default Navigator;
