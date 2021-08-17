/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Header} from 'react-native-elements'
import {NavigationActions} from 'react-navigation';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import Timer from '../screens/Timer'
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import { RouteProp, Route, useRoute, useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: (props) => props.focused? <Image style={{width: 30, height:30}} source={require('../assets/images/logo-filled.png')}/> : <Image style={{width: 30, height: 30}} source={require('../assets/images/meditation-shadow.png')}/>
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: (props) => props.focused? <Image style={{width: 30, height:30}} source={require('../assets/images/calendar.png')}/> : <Image style={{width: 30, height: 30}} source={require('../assets/images/calendar-faded.png')}/>
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: (props) => props.focused? <Image style={{width: 30, height:30}} source={require('../assets/images/profile.png')}/> : <Image style={{width: 30, height: 30}} source={require('../assets/images/profile-faded.png')}/>
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} os="ios-home" md="md-home" style={{ marginBottom: -3 }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  const navigation = useNavigation()
  const route = useRoute()
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  React.useLayoutEffect(() => {
    navigation.setOptions({ tabBarVisible: routeName=='Timer'?false:true });
  }, [navigation, route]);

  return (
    <TabOneStack.Navigator >
      <TabOneStack.Screen
        name="Home"
        component={TabOneScreen}
        options={{ headerTitle: (props) => 
          <View style={styles.header}>
            <Image style={{width: 38, height: 38}} source={require('../assets/images/logo-filled.png')}/>
            <Text style={styles.headerText}>QSYMS</Text>
          </View>
        , headerTitleAlign: 'center' }}
      />
      <TabOneStack.Screen name="Timer" component={Timer} options={{headerShown: false}}/>
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Calendar"
        component={TabTwoScreen}
        options={{ headerTitle: 'QYSMS', headerTitleAlign: 'center' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Profile"
        component={TabThreeScreen}
        options={{ headerTitle: 'QYSMS', headerTitleAlign: 'center' }}
      />
    </TabThreeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 13
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
    fontWeight: 'bold'
  }
})
