import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import * as D from '../data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const name = D.randomName();
const avatarUrl = D.randomAvatarUrl(name);

export default function TopBar() {
  return (
    <View style={[styles.view]}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
      <View style={[styles.centerView]}>
        <Text style={[styles.text]}>{name}</Text>
      </View>
      <Icon name="menu" size={24} color={'white'}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: MD2Colors.amber500,
  },
  text: {fontSize: 20, textAlign: 'center'},
  avatar: {width: 40, height: 40, borderRadius: 20},
  centerView: {flex: 1},
});