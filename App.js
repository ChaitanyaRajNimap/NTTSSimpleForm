import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';
import Login from './src/components/Login';
import WelcomeScreen from './src/components/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textStyle: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
