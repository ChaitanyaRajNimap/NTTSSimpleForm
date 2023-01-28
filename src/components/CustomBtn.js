import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomBtn = ({value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    backgroundColor: '#00f',
    borderRadius: 25,
  },
  buttonText: {
    padding: 15,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
