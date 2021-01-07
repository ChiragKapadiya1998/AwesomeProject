import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Demo from './page/Demo';
import HomeScreen from './page/HomeScreen';
import ImageScreen from './page/ImageScreen';
import ListScreen from "./page/ListScreen";
import ButtonScreen from "./page/ButtonScreen";
import Counter from './page/CounterScreen'
import ColorScreen from './page/ColorScreen';
import SquareScreen from './page/SquareScreen';
import Reducer from './page/Reducer';
import Datafetch from './page/Datafetch';
import TextScreen from './page/TextScreen';
import BoxScreen from './page/BoxScreen'

const Stack = createStackNavigator();
class App extends Component {

  render(props) {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Img" component={ImageScreen} />
        <Stack.Screen name="Buttons" component={ButtonScreen} />
        <Stack.Screen name="DemoScreen" component={Demo} />
        <Stack.Screen name="CounterScreen" component={Counter} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="ReducerScreen" component={Reducer} />
        <Stack.Screen name="Datafetch" component={Datafetch} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
export default  App;