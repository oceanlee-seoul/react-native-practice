import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {MD2Colors, MD3Colors} from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MD2Colors.blue500,
  },
  text: {fontSize: 20, color: MD2Colors.blue200},
});
