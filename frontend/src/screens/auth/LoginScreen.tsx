import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField';

export default function LoginScreen() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeValue = (name: string, text: string) => {
    setValue({
      ...value,
      [name]: text,
    });
  };

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error="이메일을 입력하세요"
          inputMode="email"
          value={value.email}
          onChangeText={text => handleChangeValue('email', text)}
          touched={touched.email}
          onBlur={() => handleBlur('email')}
        />
        <InputField
          placeholder="비밀번호"
          error="비밀번호를 입력하세요"
          secureTextEntry
          value={value.password}
          onChangeText={text => handleChangeValue('password', text)}
          touched={touched.password}
          onBlur={() => handleBlur('password')}
        />
      </View>
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
  },
});
