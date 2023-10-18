import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Text,
} from 'react-native';
import * as D from './src/data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MD2Colors} from 'react-native-paper';

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;
const text = `Almost before we knew it, we had left the ground.`;

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require('./src/assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
        <View style={[styles.flex, styles.padding10]}>
          <Text style={[styles.text, styles.regular]}>{text}</Text>
          <Text style={[styles.text, styles.medium]}>{text}</Text>
          <Text style={[styles.text, styles.semiBold]}>{text}</Text>
          <Text style={[styles.text, styles.bold]}>{text}</Text>
        </View>
        <Icon name="home" size={50} color={MD2Colors.lightBlue500} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  imageBackground: {padding: 10},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  padding10: {padding: 10},
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},
  regular: {fontFamily: 'DancingScript-Regular'},
  medium: {fontFamily: 'DancingScript-Medium'},
  semiBold: {fontFamily: 'DancingScript-SemiBold'},
  bold: {fontFamily: 'DancingScript-Bold'},
});
