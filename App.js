import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './src/components/Login';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <Login />
      {/* <Text>Hello</Text> */}
    </View>
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
