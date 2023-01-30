import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WelcomeScreen = ({route}) => {
  const {email} = route.params;
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Welcome {email} </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
