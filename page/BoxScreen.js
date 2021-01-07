import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const  BoxScreen =() => {
    return (
        <View style={styles.view}>
            <Text style={styles.textone}> Box #1</Text>
            <Text style={styles.texttwo}> Box #2</Text>
            <Text style={styles.textthree}> Box #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  view:{
      borderWidth:2,
      borderColor:'red',
      margin: 20,
      height:200,
      //alignItems:'center',
      //alignItems:'stretch',
      //alignItems:'flex-start',
      //alignItems: 'flex-end',
      //justifyContent:'center',
      // flexDirection:"row",
      //flexDirection:'row-reverse'
      // flexDirection:'column',
      // flexDirection:'column-reverse',
       //justifyContent:'center',
      // justifyContent:'space-evenly',
       justifyContent:'space-between',
       //justifyContent:'space-around'
      //justifyContent:'flex-start',
      //justifyContent:'flex-end',
  },
  textone:{
      borderWidth:2,
      borderColor:'#005895',
      //flex: 1,
      alignSelf:'flex-start',

  },
  texttwo:{
    borderWidth:2,
     borderColor:'#005893',
    // flex: 2,
    //alignSelf:'flex-end',
    alignSelf:'center',
  },
  textthree:{
    borderWidth:2,
    borderColor:'#005389',
   // flex: 1,
   alignSelf:'flex-end',
  }

})
export default BoxScreen;