/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import HomeScreen from './scr/screens/HomeScreen';
import ExperienceScreen from './scr/screens/ExperienceScreen';
import BackgroundScreen from './scr/screens/BackgroundScreen';
import CanDoScreen from './scr/screens/CanDoScreen';
import FormScreen from './scr/screens/CanDoScreen/FormScreen';
import LocalStorageScreen from './scr/screens/CanDoScreen/LocalStorageScreen';
import {Provider} from 'react-redux';
import ReduxScreen from './scr/screens/CanDoScreen/ReduxScreen';
import store from './scr/redux/store';
import NotificationScreen from './scr/screens/CanDoScreen/NotificationScreen';
import './scr/utils/notification';
import CameraScreen from './scr/screens/CanDoScreen/CameraScreen';
import AxiosScreen from './scr/screens/CanDoScreen/AxiosScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#005ce6" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Experience"
            component={ExperienceScreen}
            options={{animation: 'slide_from_left'}}
          />
          <Stack.Screen
            name="BackgroundScreen"
            component={BackgroundScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="CanDoScreen"
            component={CanDoScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="FormScreen"
            component={FormScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="LocalStorageScreen"
            component={LocalStorageScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="ReduxScreen"
            component={ReduxScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen
            name="AxiosScreen"
            component={AxiosScreen}
            options={{animation: 'slide_from_right'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
