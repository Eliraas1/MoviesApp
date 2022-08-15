import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/app/store';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
const Navigator: typeof Tab.Navigator = () => {
  const user = useSelector((state: RootState) => state.user);
  React.useEffect(() => {}, [user]);
  if (!user.user) return <AuthNavigator />;
  return <HomeNavigator />;
};

export default Navigator;
