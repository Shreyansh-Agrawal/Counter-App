import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Button(props) {
  return (
    <>
      <TouchableOpacity style={styles.Btn} onPress={props.onClick}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  Btn: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 30,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    marginLeft: 30,
    marginBottom: 10,
  },
});
