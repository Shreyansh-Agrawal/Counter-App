import React, {useState} from 'react';
import Counter from './src/componets/Counter';
import {StyleSheet} from 'react-native';

import CountContextProvider from './src/componets/context/CountContextProvider';

export default function App() {
  return (
    <CountContextProvider>
      <Counter style={styles.screen} />
    </CountContextProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
  },
});
