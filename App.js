import React, { Component } from "react";
import {StyleSheet,ScrollView, Button, Text, View ,SafeAreaView,Image, Alert,TouchableOpacity,} from "react-native";
import Demo from './page/Demo';
import HomeScreen from './page/HomeScreen'
class App extends Component {
  state = { myState: "chirag kapadiya",};
   updateState = () => this.setState({myState: 'The state is updated'  })
 
  render(props) {
    return (
      <ScrollView>  
      <SafeAreaView style={styles.container}>
      <View >
        <Text>chirag kapadiya </Text>
       <Button style={styles.button}  title={this.state.myState}  onPress={this.updateState} >
         {this.state.myState}
        </Button>
      </View>
      <View >
        <Text style={styles.text} onPress={this.updateState}>
           <Text> {this.state.myState}</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={()=>{Alert.alert("You need to...")}}>
      <Image 
         source={require('./image/4.jpeg')} 
         style={{height:250,width:250,margin:20,}}
         />
         <Image 
         source={require('./image/5.jpeg')} 
         style={{height:250,width:250,margin:20,}}
         />
         <Image 
         source={require('./image/2.jpeg')} 
         style={{height:250,width:250,margin:20,}}
         />
         </TouchableOpacity>
      <Demo/>
      <HomeScreen/>
      </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
  contioner: {
    marginTop:20,
    flex:1,    
  },
  text: {
    height:30,
    borderRadius: 2,
    color:'#fff',
    fontSize: 20,
    backgroundColor: 'red'
  }

})

export default  App;