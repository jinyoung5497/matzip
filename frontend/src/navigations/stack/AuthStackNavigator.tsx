import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {authNavigations} from '../../constants';
import SignupScreen from '../../screens/auth/SignupScreen';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};

const stack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  return (
    <stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
      <stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{
          headerTitle: '로그인',
        }}
      />
      <stack.Screen
        name={authNavigations.SIGNUP}
        component={SignupScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </stack.Navigator>
  );
}
