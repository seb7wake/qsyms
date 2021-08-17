import * as React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Header} from 'react-native-elements'
import Icon from 'react-native-ionicons'
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Route } from "react-router";
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

const TabTwoStack = createStackNavigator<TabTwoParamList>();

type TabOneNavigationProp = StackNavigationProp<TabOneParamList, 'Home'>;

type TabOneRouteProp = RouteProp<TabOneParamList, 'Home'>;

type Props = {
  route: TabOneRouteProp;
  // action?: string,
  navigation: TabOneNavigationProp;
};

export default function TabOneScreen(props: Props) {
  const [redirect, setRedirect] = useState('')
  const navigation = useNavigation<TabOneNavigationProp>();
  return (
    <View style={styles.container}>
     <View style={styles.card1}>
    <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
        <Text style={{alignSelf: 'center', textAlign: 'center', color: 'white',fontWeight: '600', fontSize: 28, width:200}}>MEDITATION TECHNIQUES</Text>
        <Image style={{alignSelf: 'center',justifyContent:'flex-end', flex: 1, width: 80, height:100}} source={require('../assets/images/meditation-icon.png')}/>
        {/* <Ionicons  style={{alignSelf: 'center',justifyContent:'flex-end', flex: 1}} color='black' name="time" lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)" size={70}/> */}
    </TouchableOpacity>
    </View>
    <View style={styles.card2}>
    <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => navigation.navigate('Timer')}>
        <Text style={{alignSelf: 'center', textAlign: 'center', color: 'white',fontWeight: '600', fontSize: 28, width:200}}>MEDITATION TIMER</Text>
        <Image style={{alignSelf: 'center',justifyContent:'flex-end', flex: 1, width: 120, height: 130}} source={require('../assets/images/clock.png')}/>
        {/* <Ionicons  style={{alignSelf: 'center',justifyContent:'flex-end', flex: 1}} color='black' name="time" lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)" size={70}/> */}
    </TouchableOpacity>
    </View>
    <View style={styles.card3}>
    <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} >
        <Text style={{alignSelf: 'center', textAlign: 'center', color: 'white',fontWeight: '600', fontSize: 28, width:200}}>PRANAYAMA EXERCISES</Text>
        <Image style={{alignSelf: 'center',justifyContent:'flex-end', flex: 1, width: 110, height: 125}} source={require('../assets/images/clock.png')}/>
        {/* <Ionicons  style={{alignSelf: 'center',justifyContent:'flex-end', flex: 1}} color='black' name="time" lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)" size={70}/> */}
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card1: {
    marginTop: '2%',
    marginBottom: '1%',
    borderRadius: 10,
    width: '98%',
    height: '31%',
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#D1EEEE',
    backgroundColor: '#0B0B6D'
  },
  card2: {
    marginTop: '1%',
    marginBottom: '1%',
    borderRadius: 10,
    width: '98%',
    height: '31%',
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#D1EEEE',
    backgroundColor: 'rgba(55, 153, 194, 0.89)'
  },
  card3: {
    marginTop: '1%',
    marginBottom: '1%',
    borderRadius: 10,
    width: '98%',
    height: '31%',
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#D1EEEE',
    backgroundColor: 'rgba(143, 147, 151, 0.89)'
  },
  icon: {
    color: 'black'
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
