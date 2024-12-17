import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, View, SafeAreaView} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList>;

export default function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <CustomButton
          label="로그인하기"
          variant="filled"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}
