import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { StyleSheet, Image, TouchableOpacity, Picker } from 'react-native';
import { Card, ListItem, Button, Header} from 'react-native-elements'
import Icon from 'react-native-ionicons'
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Route } from "react-router";
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute, RouteProp, useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BottomTabParamList, TabOneParamList, TimerParamList, TabTwoParamList, TabThreeParamList } from '../types';
import { LinearGradient } from 'expo-linear-gradient';

type TimerNavigationProp = StackNavigationProp<TimerParamList, 'Timer'>;

type TimerRouteProp = RouteProp<TimerParamList, 'Timer'>;

type Props = {
  route: TimerRouteProp;
  // action?: string,
  navigation: TimerNavigationProp;

};

export default function Timer(props:Props) {
  const initial = {initialMinute: 0,initialSeconds: 0};
  const [redirect, setRedirect] = useState('')
  const navigation = useNavigation<TimerNavigationProp>();
  const [timer, setTimer] = useState(false)
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)
  const [pause, setPause] = useState(false)
  let time : any = 0
  let myInterval: any;

  useEffect(()=>{
      if(timer == true && !pause) {
        myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds-1);
          }
          if (seconds === 0) {
              if (minutes === 0) {
                  clearInterval(myInterval)
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              }
          } 
        }, 1000)
        return ()=> {
          clearInterval(myInterval);
        };
      } else if (timer == true && pause) {
        return
      }
});

useEffect(() => {
  if(pause) {
    clearInterval(myInterval)
  }
}, [pause])

  return (
    timer == false?
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(11,11,109,1)', 'transparent']}
        style={styles.background}
      />
      <TouchableOpacity style={{position: 'absolute', top:50, right:30}} onPress={() => navigation.goBack()}>
        <Text style={{fontSize:20, color: 'white'}}>
          Cancel
        </Text>
      </TouchableOpacity>
    <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={minutes}
          onValueChange={(itemValue) => setMinutes(itemValue)}
        >
          <Picker.Item color='white' label="5" value={5} />
          <Picker.Item color='white' label="10" value={10} />
          <Picker.Item color='white' label="15" value={15} />
          <Picker.Item color='white' label="20" value={20} />
          <Picker.Item color='white' label="25" value={25} />
          <Picker.Item color='white' label="30" value={30} />
          <Picker.Item color='white' label="35" value={35} />
          <Picker.Item color='white' label="40" value={40} />
          <Picker.Item color='white' label="45" value={45} />
          <Picker.Item color='white' label="50" value={50} />
          <Picker.Item color='white' label="55" value={55} />
          <Picker.Item color='white' label="60" value={60} />
        </Picker>
        <Text style={{fontSize:20, color: 'white'}}>Minutes</Text>
    </View>
    <Button title='Begin' onPress={() => {
      setTimer(true)
    }}/>
    </View>
    :
    minutes == 0 && seconds == 0?
    null 
    :
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(11,11,109,1)', 'transparent']}
        style={styles.background}
      />
      <TouchableOpacity style={{position: 'absolute', top:50, right:30}} onPress={() => {setTimer(false); navigation.goBack()}}>
        <Text style={{fontSize:20, color: 'white'}}>
          Cancel
        </Text>
      </TouchableOpacity>
      <Text>
      {minutes} : {seconds < 10? "0"+seconds: seconds}
      </Text>
      <TouchableOpacity onPress={() => setPause(!pause)}>
        <Text>{pause? "Play": "Pause"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(55, 153, 194)',
    },
    picker: {
        width: 100,
        color: 'white'
      },
    pickerContainer: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 500,
    }
})