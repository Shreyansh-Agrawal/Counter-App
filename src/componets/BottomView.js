import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomView() {
  return (
    <>
      <Text style={styles.num}>341</Text>
      <Text style={styles.calories}>calories left</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.stats}>View Stats</Text>
        <View style={styles.icon}>
        <Icon  name="chevron-forward-outline" size={30} color="#000" />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  num: {
    fontWeight:'bold',
    fontSize: 25,
    color:'#000',
    marginTop: 35,
    marginLeft: 25,
  },
  calories: {
    fontWeight:'bold',
    fontSize: 20,
    marginLeft: 25,
    paddingBottom:"3%"
  },
  stats: {
    fontSize: 22,
    color:'#000',
    marginLeft: 35,
    marginTop: 22,
    fontWeight:'bold',
  },
  icon:{
    marginTop: 22,
  },
  btn: {
    width: '100%',
    backgroundColor: '#E9E9E6',
    borderRadius: 30,
    height: '13%',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
});