import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import {authNavigations} from '../../constants';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
};

const stack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  return (
    <stack.Navigator>
      <stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
    </stack.Navigator>
  );
}
