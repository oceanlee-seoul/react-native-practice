import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Person from './src/data/copy/Person';
import * as D from './src/data';

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson);

export default function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <FlatList
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparator}></View>
        )}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {
    borderWidth: 1,
    borderColor: MD2Colors.grey500,
  },
});
