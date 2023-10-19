import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import Cashe from './src/screens/Cashe';
import Fibo from './src/screens/Fibo';
import Memo from './src/screens/Memo';

const {width} = Dimensions.get('window');
const numberOfComponents = 3;

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        contentContainerStyle={[styles.contentContainerStyle]}>
        <Cashe />
        <Fibo />
        <Memo />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  contentContainerStyle: {width: width * numberOfComponents},
});
