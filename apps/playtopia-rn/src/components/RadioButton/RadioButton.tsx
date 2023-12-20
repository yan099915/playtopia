import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function RadioButton() {
  return <View style={styles.radioButton}></View>;
}

const styles = StyleSheet.create({
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 16,
    borderColor: '#B0B0B0',
    borderWidth: 1,
    padding: 2,
  },
});
