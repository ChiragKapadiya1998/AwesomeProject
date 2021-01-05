import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Demo from './page/Demo';
import HomeScreen from './page/HomeScreen';
import ImageScreen from './page/ImageScreen';
import ListScreen from "./page/ListScreen";
import ButtonScreen from "./page/ButtonScreen";
import Counter from './page/CounterScreen'
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
      </Stack.Navigator>
    </NavigationContainer>


      // <ScrollView>  
      // <SafeAreaView >
      //   <View >
      //     <Text>chirag kapadiya  </Text>
      //   </View>
      //     <ListScreen/>
      //     {/* <ImageScreen/> */}
      //     {/* <Demo/> */}
      //     {/* <HomeScreen/> */}
      // </SafeAreaView>
      // </ScrollView>
    );
  }
}
export default  App;