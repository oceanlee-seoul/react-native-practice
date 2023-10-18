import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 30;
const iconColor = 'white';
const icons = ['home', 'table-search', 'human-female', 'account-settings'];

export default function BottomBar() {
  const children = icons.map(name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ));
  return <View style={[styles.view]}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: MD2Colors.lightBlue500,
  },
});
