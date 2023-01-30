import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import CustomBtn from './CustomBtn';

const emailRegEx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,6}$/;

let isValidEmail = false;
let isValidPassword = false;

const Login = ({navigation}) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
  });
  const [focus, setFocus] = useState({
    focusEmail: false,
    focusPassword: false,
  });

  const ref_pswd = useRef();

  const onSubmit = data => {
    let validEmail = validateEmail(data.email);
    let validPassword = validatePassword(data.password);
    // console.log(validEmail, validPassword);

    if (!validEmail) {
      setError(prevErr => {
        return {
          ...prevErr,
          emailError: 'Please enter valid email',
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusEmail: true,
        };
      });
    } else {
      setError(prevErr => {
        return {
          ...prevErr,
          emailError: '',
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusEmail: false,
        };
      });
      if (!validPassword) {
        setError(prevErr => {
          return {
            ...prevErr,
            passwordError: 'Please enter valid password',
          };
        });
        setFocus(prevFocus => {
          return {
            ...prevFocus,
            focusPassword: true,
          };
        });
      } else {
        setError(prevErr => {
          return {
            ...prevErr,
            passwordError: '',
          };
        });
        setFocus(prevFocus => {
          return {
            ...prevFocus,
            focusPassword: false,
          };
        });
        if (validEmail && validPassword) {
          setInputs(prevInputs => {
            return {
              email: '',
              password: '',
            };
          });
          // Alert.alert(
          //   'Login creds : ',
          //   `Email : ${data.email} \n Password: ${data.password}`,
          // );
          navigation.navigate('Welcome', {
            email: inputs.email,
          });
        } else {
          // Alert.alert(`Entered creds doesn't matched!`);
        }
      }
    }
  };

  const validateEmail = text => {
    if (text.length < 1) {
      setError(prevErr => {
        return {
          ...prevErr,
          emailError: "This feild can't be empty",
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusEmail: true,
        };
      });
      return (isValidEmail = false);
    } else if (!emailRegEx.test(text)) {
      setError(prevErr => {
        return {
          ...prevErr,
          emailError: 'Please enter a valid email',
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusEmail: true,
        };
      });
      return (isValidEmail = false);
    } else {
      setError(prevErr => {
        return {
          ...prevErr,
          emailError: '',
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusEmail: false,
        };
      });
      return (isValidEmail = true);
    }
  };

  const validatePassword = text => {
    if (text.length < 1) {
      setError(prevErr => {
        return {
          ...prevErr,
          passwordError: "This feild can't be empty",
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusPassword: true,
        };
      });
      return (isValidPassword = false);
    } else if (!passwordRegEx.test(text)) {
      setError(prevErr => {
        return {
          ...prevErr,
          passwordError: 'Please enter a valid password',
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusPassword: true,
        };
      });
      return (isValidPassword = false);
    } else {
      setError(prevErr => {
        return {
          ...prevErr,
          passwordError: '',
        };
      });
      setFocus(prevFocus => {
        return {
          ...prevFocus,
          focusPassword: false,
        };
      });
      return (isValidPassword = true);
    }
  };

  return (
    <ScrollView>
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
        <KeyboardAvoidingView enabled style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={inputs.email}
              autoFocus={focus.focusEmail}
              onChangeText={value =>
                setInputs(prevInputs => {
                  validateEmail(value, setError);
                  return {
                    ...prevInputs,
                    email: value,
                  };
                })
              }
              returnKeyType="next"
              onSubmitEditing={() => ref_pswd.current.focus()}
              placeholder="Enter email"
              style={[
                styles.input,
                {
                  borderBottomColor: focus.focusEmail ? '#f00' : '#E4E4E4',
                },
              ]}
              keyboardType="email-address"
            />
            <Text style={styles.error}>{error.emailError}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={inputs.password}
              autoFocus={focus.focusPassword}
              ref={ref_pswd}
              onChangeText={value =>
                setInputs(prevInputs => {
                  validatePassword(value, setError);
                  return {
                    ...prevInputs,
                    password: value,
                  };
                })
              }
              placeholder="Enter password"
              style={[
                styles.input,
                {
                  borderBottomColor: focus.focusPassword ? '#f00' : '#E4E4E4',
                },
              ]}
              secureTextEntry={true}
              maxLength={6}
            />
            <Text style={styles.error}>{error.passwordError}</Text>
          </View>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <CustomBtn value="LOGIN" onPress={() => onSubmit(inputs)} />
          <Text style={styles.registerText}>
            Don't have an account!
            <Text style={styles.red}> Register</Text>
          </Text>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
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
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 7,
  },
  input: {
    padding: 10,
    borderColor: '#E4E4E4',
    borderRadius: 10,
    borderWidth: 2,
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
