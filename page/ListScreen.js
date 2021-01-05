import React from 'react';
import {  Text,FlatList,StyleSheet, Button, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListScreen =({navigation})=> {
const friend=[
    {name: 'Friend #1',key:1},
    {name: 'Friend #2',key:2},
    {name: 'Friend #3',key:3},
    {name: 'Friend #4',key:4},
    {name: 'Friend #5',key:5},
    {name: 'Friend #6',key:6}, 
    {name: 'Friend #7',key:7},
    {name: 'Friend #8',key:8},   
];
    return (
      <View>
            <Button title="HomeScreen" onPress={()=>navigation.navigate('Home')}/>

        <FlatList 
      showsHorizontalScrollIndicator={false}
        keyExtractor={(friend)=>{friend.name}}
           data={friend}
           renderItem={({item}) => {
             return <Text style={styles.text}>{item.name}-Age {item.key}</Text>;
           }}
        />
       
      </View>
    
    )
}
const styles=StyleSheet.create({

  text:{
    marginVertical: 30,
  }
})

export default ListScreen;