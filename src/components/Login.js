import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Alert} from 'react-native';
import CustomBtn from './CustomBtn';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: null,
    password: null,
  });
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
  });

  const onSubmit = data => {
    Alert.alert(
      'Login creds',
      `Email : ${data.email} \n Password: ${data.password}`,
    );
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/loginImg.jpg')}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.heading}>Login Now</Text>
      <Text style={styles.subHeading}>
        Please enter the details below to continue.
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputs.email}
            onChangeText={value =>
              setInputs(prevInputs => {
                return {
                  ...prevInputs,
                  email: value,
                };
              })
            }
            placeholder="Enter email"
            style={styles.input}
            keyboardType="email-address"
          />
          <Text style={styles.error}>{error.emailError}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputs.password}
            onChangeText={value =>
              setInputs(prevInputs => {
                return {
                  ...prevInputs,
                  password: value,
                };
              })
            }
            placeholder="Enter password"
            style={styles.input}
            secureTextEntry={true}
            maxLength={6}
          />
          <Text style={styles.error}>{error.passwordError}</Text>
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <CustomBtn value="LOGIN" onPress={inputs => onSubmit(inputs)} />
        <Text style={styles.registerText}>
          Don't have an account!
          <Text style={styles.red}> Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderColor: '#00f',
    borderWidth: 1,
    borderRadius: 300,
    marginTop: 70,
    // backgroundColor: '#f00',
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  heading: {
    marginTop: 30,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subHeading: {
    marginTop: 10,
    color: '#666',
    fontSize: 15,
  },
  formContainer: {
    width: '75%',
    marginTop: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 7,
  },
  input: {
    padding: 10,
    borderColor: '#666',
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
  },
  error: {
    marginHorizontal: 5,
    color: '#f00',
  },
  forgotPassword: {
    color: '#f00',
    fontSize: 15,
    textAlign: 'right',
  },
  registerText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
  },
  red: {color: '#f00'},
});
