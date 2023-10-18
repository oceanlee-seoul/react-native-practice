import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {Platform, Dimensions} from 'react-native';
import {MD2Colors} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>OS : {Platform.OS}</Text>
      <Text style={[styles.text]}>width : {width}</Text>
      <Text style={[styles.text]}>height : {height}</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 20}]} />
      <View style={[styles.box, styles.border, {borderBottomLeftRadius: 40}]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: MD2Colors.blue500,
    flex: 1,
    paddingLeft: Platform.select({ios: 0, android: 20}),
  },
  text: {
    fontSize: 20,
    color: MD2Colors.blue200,
    marginBottom: 10,
    marginLeft: 10,
  },
  box: {
    height: 100,
    backgroundColor: MD2Colors.lime500,
    marginBottom: 10,
    width: '70%',
    marginLeft: Platform.select({ios: 20, android: 0}),
  },
  border: {
    borderWidth: 10,
    borderColor: MD2Colors.blue900,
  },
});
