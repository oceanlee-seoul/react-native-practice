import React, {useMemo} from 'react';
import type {FC} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import PersonUsingValueState from './src/screens/PersonUsingValueState';
import PersonUsingObjectState from './src/screens/PersonUsingObjectState';
import PersonUsingPassingState from './src/screens/PersonUsingPassingState';
import * as D from './src/data';

const {width} = Dimensions.get('window');

type PersonInformation = {
  title: string;
  Component: FC<any>;
};

const personInformations: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PersonUsingObjectState', Component: PersonUsingObjectState},
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState},
];

const numberOfComponents = personInformations.length;

export default function App() {
  const people = useMemo(() => D.makeArray(10).map(D.createRandomPerson), []);
  const children = useMemo(
    () =>
      personInformations.map(({title, Component}: PersonInformation) => (
        <View style={{flex: 1}} key={title}>
          <Text style={[styles.text]}>{title}</Text>
          <FlatList
            data={people}
            renderItem={({item}) => <Component person={item} />}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      )),
    [],
  );

  return (
    <SafeAreaView style={[styles.flex]}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalScrollView}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {borderWidth: 1, borderColor: MD2Colors.grey500},
  horizontalScrollView: {width: width * numberOfComponents},
  text: {fontSize: 24, textAlign: 'center'},
});
