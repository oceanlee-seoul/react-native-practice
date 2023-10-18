import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import TopBar from './src/screens/TopBar';
import Content from './src/screens/Content';
import BottomBar from './src/screens/BottomBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <>
      <SafeAreaView style={[styles.flex]}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoulte]}>
        <Icon name={'feather'} size={50} color={'white'}></Icon>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: MD2Colors.lightBlue100},
  absoulte: {
    backgroundColor: MD2Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: 100,
    padding: 10,
    borderRadius: 35,
  },
});
