import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import {useForm} from '../../hooks/useForm';
import {validateLogin} from '../../utils';
import {TextInput} from 'react-native-gesture-handler';

export default function LoginScreen() {
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          ref={emailRef}
          placeholder="이메일"
          error={login.errors.email}
          inputMode="email"
          touched={login.touched.email}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          secureTextEntry
          touched={login.touched.password}
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label={'로그인'}
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});
