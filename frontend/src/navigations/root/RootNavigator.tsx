import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
import React from 'react';
import useAuth from '@/hooks/queries/useAuth';

function RootNavigator() {
  const {isLogin} = useAuth();

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
