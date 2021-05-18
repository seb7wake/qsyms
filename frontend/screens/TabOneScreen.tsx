import * as React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Route } from "react-router";
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

const TabTwoStack = createStackNavigator<TabTwoParamList>();

export default function TabOneScreen({ navigation }: any) {
  const [redirect, setRedirect] = useState('')
  
  return (
    <View style={styles.container}>
    <View style={styles.card}>
    <TouchableOpacity onPress={() => navigation.navigate('TabTwo')}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Ionicons style={styles.icon} name="ios-time" lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)" size={70}/>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">Meditation Timer</Text>
      </View>
    </TouchableOpacity>
    </View>
    <View style={styles.card}>
    <TouchableOpacity onPress={() => navigation.navigate('TabTwo')}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Ionicons style={styles.icon} name="ios-time" lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)" size={70}/>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">Meditation Timer</Text>
      </View>
    </TouchableOpacity>
    </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: '1%',
    borderRadius: 10,
    width: '98%',
    height: '20%',
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#D1EEEE'
  },
  icon: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E0EEEE'
    // justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
