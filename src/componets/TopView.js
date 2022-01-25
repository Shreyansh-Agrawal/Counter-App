import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TopView() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  let date = d.getDate();
  let month = months[d.getMonth()];
  
  return (
    <View style={styles.topView}>
      <Text style={styles.today}>Today</Text>
      <Text style={styles.date}>{date} {month}</Text>
      <View style={styles.hrRule} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    marginLeft: 30,
    marginTop: 45,
  },
  today: {
    fontSize: 28,
    color: '#000',
  },
  date: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  hrRule: {
    paddingTop: 30,
    borderBottomColor: '#C6B9C6',
    borderBottomWidth: 1,
    width: '90%',
  },
});
