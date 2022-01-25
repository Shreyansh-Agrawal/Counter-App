import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import TopView from './TopView';
import BottomView from './BottomView';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Counter() {
  const [count, setCount] = useState(756);

  const IncrementCount = () => {
    setCount(count + 1);
  };

  const DecrementCount = () => {
    setCount(count - 1);
  };

  const plus = <Icon  name="add-outline" size={50} color="#000" />
  const minus = <Icon  name="remove-outline" size={50} color="#000" />
  return (
    <LinearGradient  colors={['#AEF419', '#EDD51B', '#FBA921']} style={styles.container}>
      <TopView/>
      <Text style={styles.counter}>{count}</Text>
      <Text style={styles.subText}>CALORIES TODAY</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title={plus} onClick={IncrementCount} />
        <Button title={minus} onClick={DecrementCount} />
      </View>
      <View style={styles.bar}></View>
      <BottomView/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDD51B',
    margin: 22,
    marginBottom:"44%",
    borderRadius:30,
  },
  counter: {
    fontSize: 60,
    marginTop: 25,
    marginLeft: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  subText: {
    marginLeft:30,
    fontSize:20,
    fontWeight:'bold',
    color:'#4E4B23'
  },
  bar:{
    backgroundColor:'#4E4B23',
    height:10,
    width:"23%",
    marginLeft:"38%",
    marginTop:40,
    borderRadius:30
  },
});